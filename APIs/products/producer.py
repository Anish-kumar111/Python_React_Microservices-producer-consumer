
import pika , json
params = pika.URLParameters('paste your AMQP URL here')  #create  cloudMQ  instance &  paste your AMQP URL here or contact me for help (email:kumaranish10092000@gmail.com)


connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main', body =json.dumps(body), properties=properties)