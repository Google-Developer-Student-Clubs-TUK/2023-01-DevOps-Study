FROM node:18

WORKDIR /opt/gdsc

COPY ./backend/package*.json ./
RUN npm ci

COPY ./backend ./

CMD ["node", "index.js"]
