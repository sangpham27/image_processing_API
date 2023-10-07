# Image Processing API

![Express](https://img.shields.io/badge/Express-4.18.2-green)
![Jimp](https://img.shields.io/badge/Jimp-0.22.10-blue)
![Sharp](https://img.shields.io/badge/Sharp-0.32.6-blue)
![Jest](https://img.shields.io/badge/Jest-29.7.0-orange)

This is a simple Express.js application that provides an API endpoint to filter images from publicly accessible URLs. It uses Jimp for image processing.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [API Endpoint](#api-endpoint)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

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
GET /filteredimage

This endpoint filters an image from a publicly accessible URL.
## Parameters:
image_url (query parameter): The URL of the publicly accessible image.
Example Request:
```bash
GET /filteredimage?image_url=https://znews-photo.zingcdn.me/w960/Uploaded/mdf_uswreo/2023_03_09/df3_data_1.jpg
```
## Example Response (Success):
The response will include the filtered image file.
## Example Response (Error - Missing image_url):
```bash
{
  "error": "image url is required"
}
```
## Testing
To run tests, use the following command:
```bash
npm test
```




