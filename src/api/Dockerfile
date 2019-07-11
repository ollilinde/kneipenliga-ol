FROM node:10.16.0

# Create a directory where our app will be placed
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Change directory so that our commands run inside this new directory
WORKDIR /home/node/app

# Copy dependency definitions
COPY package*.json ./

USER node

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY --chown=node:node . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "run", "start"]