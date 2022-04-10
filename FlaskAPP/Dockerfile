FROM python:3.9.8
ENV PYTHONBUFFERED 1
WORKDIR /FlaskAPP

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

