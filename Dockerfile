FROM nginx

WORKDIR /usr/share/nginx/html/
USER root

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /usr/share/nginx/html/
#端口可写可不写，不过我的端口是8001，可能会报错。
#EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
