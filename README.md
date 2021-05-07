# end-2-end-testing-example

How to run this sample:

```
npm install
nodemon server.js // starting the API
live-server index.html // starting the Frontend
npm run cypress // launch the Cypress test runner
```

Once the cypress app opened:
Click the .spec.js filename to run the end-2-end test

It will launch your app in a separate browser instance and automatically "click through" the app, simulating a user interacting with your app

You find the end 2 end code in the folder "cypress/integration"

