# Use the official Node image with Alpine
FROM node:alpine3.19

# Set up the working directory with appropriate permissions
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# Set the working directory
WORKDIR /home/node/app

# Copy package files and install dependencies as root
COPY package*.json ./

# Install dependencies as root to avoid permission issues
RUN npm install

# Copy the rest of the code and set ownership for the node user
COPY --chown=node:node . .

# Switch to the non-root user
USER node

# Expose the port the app will run on
EXPOSE 8010

# Run the app
CMD [ "node", "index.js" ]
