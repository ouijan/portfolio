FROM nginx

# Install Curl
RUN apt-get update && \
	apt-get install -y curl gnupg2

# Install Node & NPM
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash && \
	apt-get install -y nodejs

COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Build App
RUN rm -rf node_modules && \
	npm install && \
	npm run build

RUN chown -R nginx:nginx /usr/share/nginx/html