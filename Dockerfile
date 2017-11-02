FROM node

WORKDIR /var/www

ENV NODE_ENV=development
ENV PORT=3000

ADD package.json /var/www
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]