# Smart Home Mobile App

## Overview
This mobile application is part of the Smart Home IoT System, designed to control various smart devices such as lights, thermostats, and security cameras. The app provides a user-friendly interface to manage and monitor these devices in real-time.

## Features
•  User authentication and authorization

•  Control smart devices remotely

•  Real-time data updates

•  Seamless communication with the backend server using MQTT


## Technologies Used
•  Frontend: React Native

•  Navigation: React Navigation

•  State Management: Context API

•  Backend Communication: REST API, MQTT


## File Structure

mobile-app/
├── src/
│   ├── components/
│   │   ├── DeviceControl.js
│   │   ├── Login.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── DeviceScreen.js
│   ├── services/
│   │   ├── apiService.js
│   │   ├── mqttService.js
│   ├── utils/
│   │   ├── stateManagement.js
│   │   ├── validation.js
│   ├── App.js
│   ├── index.js
│   ├── package.json


## Setup Instructions
1. Navigate to the mobile app directory:
```bash
cd mobile-app

2. Install dependencies:

npm install

3. Start the mobile app:

npm start

Usage
•  Login: Users must log in to access the app's features.

•  Home Screen: Displays an overview of connected devices.

•  Device Screen: Allows users to control individual devices.

Contributing
Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.
