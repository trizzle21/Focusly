Focusly

The music powered tabata timer with awesome tunes to keep you on task!

## Table of Contents

* Project Version
* Documentation

## Project Version
Version 1.0 /hacks 2016

## Documentation

This section includes crucial information on how to set up the web application on any server

### Developer Setup

```
npm install 
```

will initialize all the packages from package.json

```
node src/server.js 
```
will initialize and run the server. I personally use nodemon (it makes everything waaay easier)

Requires a ClientSecret.js or ClientSecretLocal.js file in order work.

ClientSecret.js looks like the following:


module.exports = { client_id: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            client_secret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            redirect_uri : "http://localhost:8081/callback/"
    };
