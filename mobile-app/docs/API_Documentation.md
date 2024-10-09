# Smart Home Mobile App API Documentation

## Overview
This document provides details about the API endpoints used by the Smart Home Mobile App to communicate with the backend server.

## Base URL

http://your-backend-server.com/api


## Endpoints

### User Authentication
#### POST /auth/login
•  Description: Authenticates a user and returns a JWT token.

•  Request Body:

{
	"email": "user@example.com",
	"password": "password123"
}

•  Response:

{
	"token": "jwt-token"
}

POST /auth/register
•  Description: Registers a new user.

•  Request Body:

{
	"name": "John Doe",
	"email": "john.doe@example.com",
	"password": "password123"
}

•  Response:

{
	"message": "User registered successfully"
}

Device Management
GET /devices
•  Description: Retrieves a list of all devices.

•  Headers:

{
	"Authorization": "Bearer jwt-token"
}

•  Response:

[
	{
		"id": "device1",
		"name": "Living Room Light",
		"status": "on"
	},
	{
		"id": "device2",
		"name": "Thermostat",
		"status": "off"
	}
]

POST /devices/:id/toggle
•  Description: Toggles the status of a device.

•  Headers:

{
"Authorization": "Bearer jwt-token"
}

•  Response:

{
"id": "device1",
"name": "Living Room Light",
"status": "off"
}

Error Handling
•  401 Unauthorized: Returned when the JWT token is missing or invalid.

•  404 Not Found: Returned when the requested resource does not exist.

•  500 Internal Server Error: Returned when an unexpected error occurs on the server.

Conclusion
This API documentation provides the necessary details to interact with the backend server for the Smart Home Mobile App. For any questions or issues, please contact the project maintainer.

