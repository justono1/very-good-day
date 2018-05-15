# Very Good Day

A simple vacation day tracker, approver, requester for small to medium sizes businesses.

## Table of Contents
- [Starting the Environment](#starting-the-ennironment)

### Starting the Environment
To start the dev enivornment first run `npm start` this will run two commands: `npm run sass:build` and `react-scripts start`.

Now this might seem janky but until CRA integrates sass compile into the boilplate this is what we have to do to compile sass without ejecting the CRA.

The next step is to open a new terminal tab and run `npm run sass:watch` this will watch and compile the sass when changes have been made. It will compile the index.scss to the index.css which `react-scripts start` is wathcing for changes which cause the app to reload in your browser.