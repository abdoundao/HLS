FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN apt-get update -y && apt-get upgrade -y

RUN pip install --upgrade pip
RUN pip3 install --upgrade pip
RUN pip3 install django==2.0
RUN pip3 install django-crispy-forms
RUN pip3 install djangorestframework
RUN pip3 install django-extensions
RUN pip3 install pillow
RUN pip3 install django-extensions
RUN pip3 install Werkzeug
RUN pip3 install pyOpenSSL
RUN pip3 install tweepy

WORKDIR /application_client

WORKDIR /HLSproject
ADD . /HLSproject
