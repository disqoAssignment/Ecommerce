FROM node:12.18.0
COPY  ./front-end /usr/src
WORKDIR /usr/src/front-end
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4200
CMD ng serve --port 4200 --host 0.0.0.0




