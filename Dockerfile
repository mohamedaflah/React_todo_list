# Set the base image to create the image for react_app
FROM node:alpine


# create a user with permission to run the app
# -S => create a system user 
# -G => add the user to group 
# This is done to avoid running the app as root
# if the app is run as root any vulnerability in the app be exploitted to again to the host system 
RUN addgroup app && adduser -S -G app app


# set the user to run the app
USER app

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory this done  before copying the rest of the files to take advantage of Docker's cache 
# if the package.json and package-lock.json files haven't changed, Docker will use the cached dependencies
COPY package*.json ./

# sometimes the ownership of the file in the working directory is changed to root and thus app can't access the files and throws an error
# === EACCESS: Permission denied
# to avoid this, change the ownership of the files to the root user
USER root




# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime 
EXPOSE 5173

CMD npm run dev