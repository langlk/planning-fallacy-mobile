# Planning Fallacy Mobile

### _Epicodus Project in React Native, March 30, 2018_

### By Kelsey Langlois

## Description

This is an app to help people compensate for the Planning Fallacy. It uses a user's Google Calendar to gather their events, and allows them to see upcoming events and check in when they arrive at a given event. The data from these checkins is used to track how late, on average, a user is to events. Uses the Rails backend from [langlk/planning_fallacy](http://github.com/langlk/planning_fallacy).

## Installation and Setup

_You can get this app on Android via Expo at [expo.io/@langlk/planning-fallacy](https://expo.io/@langlk/planning-fallacy). To install on your own machine, follow the following steps:_

* Clone this repository.
* Run the following commands in the project root directory:
  ```
  npm install
  yarn install
  yarn start
  ```
* Ensure you have the [Expo App](https://expo.io/tools#client) on your phone.
* Scan the QR code that appears on the command line using Expo. The project should load on your phone.

## Specifications:

* Allows user to sign up for a Planning Fallacy account or sign in to an existing account.
* Directs user to Planning Fallacy site to connect their Google account.
* Allows a user to view and check in to their events when they have linked their Google Calendar.

## Known Bugs:

* Users can check in to events more than once.
* Signup form inputs take two taps to switch between. There's a known fix for Android, but it requires ejecting the app. For now, navigating between inputs with the keyboard is recommended.
* User offline access does not currently differentiate between lack of internet and the API denying access. A fix is in the works.

## Planned Functionality:

* Integrate location services
* Integrate Google Directions to get departure time recommendation
* Add push notifications to let a user know when to leave

## Support and contact details

_Please contact [kels.langlois@gmail.com](mailto:kels.langlois@gmail.com) with questions, comments, or issues._

## Technologies Used

* React Native
* React Native Elements
* Expo

_This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find information on using it [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)._

### License

Copyright (c) 2017 **Kelsey Langlois**

*This software is licensed under the MIT license.*
