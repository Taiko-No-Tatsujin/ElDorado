FROM node:8

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
RUN cd /tmp && npm rebuild bcrypt --build-from-source
WORKDIR /opt/app
ADD . /opt/app

EXPOSE 3000

CMD ["npm", "start"]