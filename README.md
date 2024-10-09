# Smart Home IoT System

## Overview
This project is a comprehensive IoT solution for smart home automation. It integrates various smart devices, such as lights, thermostats, and security cameras, into a unified platform that can be controlled via a mobile app.

## Features
•  Control smart devices remotely

•  Real-time data updates

•  Seamless communication between devices and server using MQTT

•  User authentication and authorization


## Technologies Used
•  Backend: Node.js, Express, MongoDB, MQTT

•  Frontend: React Native

•  Version Control: Git


## File Structure

smart-home-iot-system/
├── backend/
│   ├── controllers/
│   │   ├── deviceController.js
│   │   ├── userController.js
│   ├── models/
│   │   ├── deviceModel.js
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── deviceRoutes.js
│   │   ├── userRoutes.js
│   ├── services/
│   │   ├── mqttService.js
│   │   ├── authService.js
│   ├── utils/
│   │   ├── db.js
│   │   ├── logger.js
│   ├── app.js
│   ├── config.js
│   ├── server.js
├── mobile-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DeviceControl.js
│   │   │   ├── Login.js
│   │   ├── screens/
│   │   │   ├── HomeScreen.js
│   │   │   ├── DeviceScreen.js
│   │   ├── services/
│   │   │   ├── apiService.js
│   │   │   ├── mqttService.js
│   │   ├── utils/
│   │   │   ├── stateManagement.js
│   │   │   ├── validation.js
│   ├── App.js
│   ├── index.js
│   ├── package.json
├── docs/
│   ├── README.md
│   ├── API_Documentation.md
│   ├── Architecture_Diagram.png
├── .gitignore
├── package.json
├── README.md


## Setup Instructions
1. Clone the repository:
```bash
git clone https://github.com/SergiySvirkov/smart-home-iot-system.git

Navigate to the project directory:

cd smart-home-iot-system

Install backend dependencies:

npm install

1. Navigate to the mobile app directory and install dependencies:

cd mobile-app
npm install

2. Start the backend server:

npm run dev

3. Start the mobile app:

npm start

Contributing
Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.
