FROM node:latest
EXPOSE 8080
WORKDIR /app
COPY . /app
RUN rm -rf /app/service
RUN npm install
CMD [ "npm", "run", "start:dev" ]