# amqps://lhrmlkwo:tQd4EApZb9qAHGUgRcbFkTU6mp_ZbRGI@puffin.rmq2.cloudamqp.com/lhrmlkwo
import pika , json
params = pika.URLParameters('amqps://iwvnhhie:87KjGOwmMepWzVwjJGJBok39QHd1QguU@puffin.rmq2.cloudamqp.com/iwvnhhie')


connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='project1', body =json.dumps(body), properties=properties)