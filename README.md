# Problem Statement
* Setup a new app using CRA, Typescript and https://material-ui.com
* Generate a stub json (or dynamic random service) with calendar events of random title, date and duration
* Save the stubs in a browser side IndexedDB or Lovefield by Google
* Implement a "Google Calendar" week view (7 days), not using any existing calendar or date components (but do use basic components from Material UI), by reading the stub events from the store created in the previous step.
* Calendar can start on Today but allow for skipping through weeks (next/previous)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Getting Started with this project
* Copy the URL and clone to your local repository using *git clone*
* run *npm install*
* run *npm start*

# Features
* Events are displayed with duration and title
* Dynamic display of events based on hours and date
* Data is fetched from IndexedDB

# Issues
* Events will not extend based on end date
* Month name will not include two months even if week lies between two months
* Rough transition from week to week
