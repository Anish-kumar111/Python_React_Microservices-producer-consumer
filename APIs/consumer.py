


import pika
import json, os , django

os.environ.setdefault("DJANGO_SETTINGS_MODULE","project1.settings")
django.setup()
# from products.models import Product

from products.models import Product
params = pika.URLParameters('paste your AMQP URL here') #create  cloudMQ  instance &  paste your AMQP URL here or contact me for help (email:kumaranish10092000@gmail.com)


connection = pika.BlockingConnection(params)

channel = connection.channel()
channel.queue_declare(queue='project1')


def callback(body):
   print('received in admin')
   id = json.loads(body)
   print(id)
   product = Product.objects.get(id=id)
   product.likes = product.likes + 1
   product.save()
   print('Product likes increased! ')


   

channel.basic_consume(queue='project1', on_message_callback=callback, auto_ack=True)

print('started consuming in project1')
channel.start_consuming()
channel.close()