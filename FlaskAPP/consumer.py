



import pika ,json

# from products.models import Product

from app import app,db,Product
params = pika.URLParameters('paste your AMQP URL here')  #create  cloudMQ  instance &  paste your AMQP URL here or contact me for help (email:kumaranish10092000@gmail.com)


connection = pika.BlockingConnection(params)

channel = connection.channel()
channel.queue_declare(queue='main')


def callback(properties,body):
   print('received in flask db')
   data = json.loads(body)
   print(data)
   if properties.content_type == 'product_created':
      product= Product(id=data['id'],title=data['title'],  image=data['image'])
      db.session.add(product)
      db.session.commit()
      print('product created')
   elif properties.content_type == 'product_updated': 
      product= Product.query.get(data['id'])
      product.title= data['title']
      product.image= data['image']
      db.session.commit()
      print('product updated')       
   elif properties.content_type == 'product_updated': 
      product= Product.query.get(data)
      db.session.delete(product)
      db.session.commit()
      print('product deleted')       
      

 


channel.basic_consume(queue='main', on_message_callback=callback, auto_ack=True)

print('started consuming')
channel.start_consuming()
channel.close()