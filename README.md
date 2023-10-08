# Image Processing API

![Express](https://img.shields.io/badge/Express-4.18.2-green)
![Sharp](https://img.shields.io/badge/Sharp-0.32.6-blue)
![Jest](https://img.shields.io/badge/Jest-29.7.0-orange)

This is a simple Express.js application that provides an API endpoint to filter images from publicly accessible URLs. It uses Jimp for image processing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [API Endpoint](#api-endpoint)
- [Testing](#testing)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/sangpham27/image_processing_API.git
   cd image-filter-api
   ```

1. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Running The Application

To start the application, run the following command:

```bash
npm start
```

The server will start at `http://localhost:8082`.

### API Endpoints
## Parameters:

image_url (query parameter): The URL of the publicly accessible image.
width and height (query parameters): Width and height for resizing the image. If only one is passed in, it will be used as the
Example Request:

```bash
GET /api/images?filename=hero&width=500&height=500
```

## Testing

To run tests, use the following command:

```bash
npm test
```
