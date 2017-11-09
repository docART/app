# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.9

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
WORKDIR /usr/src/app
COPY . /usr/src/app/

# Install dependencies
RUN npm install

# Build for production.
RUN npm run build --production

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 5000
