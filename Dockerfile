FROM node:latest
LABEL autor="Jakub Nowakowski"
WORKDIR /app
ADD ./ ./
RUN npm install    
CMD node index.js