FROM node:13.3.0-stretch

RUN apt update
COPY . /home/
RUN yarn
WORKDIR ./home/AN
CMD yarn start --host 0.0.0.0