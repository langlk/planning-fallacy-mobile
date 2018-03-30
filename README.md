# Planning Fallacy Mobile

### _Epicodus Project in React Native, March 30, 2018_

### By Kelsey Langlois

## Description

This is an app to help people compensate for the Planning Fallacy. It uses a user's Google Calendar to gather their events, and allows them to see upcoming events and check in when they arrive at a given event. The data from these checkins is used to track how late, on average, a user is to events. Uses the Rails backend from [langlk/planning_fallacy](http://github.com/langlk/planning_fallacy).

## Installation and Setup

_You can get this app via Expo at [expo.io/@langlk/planning-fallacy](https://expo.io/@langlk/planning-fallacy). To install on your own machine, follow the following steps:_

* Clone this repository.
* Run the following commands in the project root directory:
  ```
  npm install
  yarn install
  yarn start
  ```
* Ensure you have the [Expo App](https://expo.io/tools#client) on your phone.
* Scan the QR code that appears on the command line using Expo. The project should load on your phone.

## TODO:
  * Connect to Rails API to allow user to sign up, in, and out
  * Add display of upcoming events
  * Add checkin function
  * Integrate location services
  * Integrate Google Directions to get departure time recommendation
  * Add push notifications to let a user know when to leave

## Support and contact details

_Please contact [kels.langlois@gmail.com](mailto:kels.langlois@gmail.com) with questions, comments, or issues._

## Technologies Used

* React Native

_This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find information on using it [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)._

### License

Copyright (c) 2017 **Kelsey Langlois**

*This software is licensed under the MIT license.*
