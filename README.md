# Setup
Created a directory to hold your REST API source code, I am using ```rest-api-shop``` here

Inside directory, run ```npm init```

Open the package.json file with an IDE, i.e. Visual Studio Code

Open the terminal using Ctrl+` (Visual Studio Code) and inside rest-api-shop directory run ```npm install --save express```, as we will use the express framework to aid in API build.

# Test
After writing the server.js and app.js code (or downloading/cloning the files from this repo), inside the directory where these files are held, run
```
node server.js
```

This will start the server at the port specified in server.js, which is 3000. So you can test the server is working in any web browswer by typing
```
localhost:3000
```

You should see the sample JSON response that was written in the app.js file.
