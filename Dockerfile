FROM node

ENV NODE_ENV=development
ENV PORT=3000

WORKDIR /var/www
ADD package.json /var/www/

RUN npm install

COPY . /var/www

EXPOSE 3000

CMD ["npm", "start"]