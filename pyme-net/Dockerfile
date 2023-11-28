FROM node:15.13-alpine

WORKDIR /usr/src/app/pyme-net

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install additional dependencies
RUN npm install react-bootstrap bootstrap
RUN npm install react-router-dom
RUN npm install react-icons --save
RUN npm install --save cdbreact
RUN npm install @material-ui/core @material-ui/icons --force
# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]