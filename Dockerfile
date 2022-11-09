FROM nginx:alpine
RUN  touch /var/run/nginx.pid && \
     chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid
USER nginx
COPY --chown=nginx:nginx dist/frontend /usr/share/nginx/html
##COPY --chown=nginx:nginx config/myapp/default.conf /etc/nginx/conf.d/default.conf