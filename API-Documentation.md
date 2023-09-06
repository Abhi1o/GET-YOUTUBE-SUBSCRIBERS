# Get_YouTube_Subscribers API Documentation

## Introduction

The API documentation for Get YouTube Subscribers provides details on how to interact with the API endpoints to retrieve subscribers information.

## Base URL
The base URL for all endpoints is:
 ```
  http://localhost:3000
 ```
## Authentication

This API does not require authentication for accessing the public endpoints. Simply make the required HTTP requests to start utilizing the API.

## Error Handling

In case of errors, the API will respond with appropriate error status codes and error messages. Please refer to the [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) documentation for more information.

## Endpoints
- [Get Subscribers](#get-subscribers) (` /subscribers `) 
- [Get Subscribers by Names](#get-subscribers-by-names)   (` /subscribers/names `)
- [Get Subscriber by ID](#get-subscriber-by-id)  (` /subscribers/:id `) 

  ### Get Subscribers 
  ---
  **Description:** Retrieve a list of all subscribers.

  - **Endpoint:** `/subscribers`
  - **Method:** `GET`
  - **Response:**
    - Status Code: `200 OK`
    - Content-Type: `application/json`
    - Example Response:
    <img src= "https://github-production-user-asset-6210df.s3.amazonaws.com/87490161/265926168-dfa4879c-acdb-4ca7-a048-364fce16d65a.png" width="1000">
      <!-- ```json
      [   
        {
          "_id": {"$oid": "64d39e9dec691d30784ffadd"},
          "name": "Jeread Krus",
          "subscribedChannel": "CNET",
          "subscribedDate": {"$date": "2023-08-09T14:11:41.455Z"},
        },
        {
          "_id": {"$oid": "64d39e9dec691d30784ffade"},
          "name": "John Doe",
          "subscribedChannel": "freeCodeCamp.org",
          "subscribedDate": {"$date": "2023-08-09T14:11:41.457Z"}
        },
        {
          "_id": {"$oid": "64d39e9dec691d30784ffadf"},
          "name": "Lucifer",
          "subscribedChannel": "Sentex",
          "subscribedDate": {"$date": "2023-08-09T14:11:41459Z"},
        }
      ]
      ``` -->
  - **Endpoint-Specific Error**
    - Error : `500 (Bad Request)`
    - Error Message: `Internal Server Error`


  ### Get Subscribers by Names
  ---
  **Description:** Retrieve subscribers based on their name.
  - **Endpoint:** `/subscribers/names `
  - **Method:** `GET`
  - **Query Parameters:**
    - `names` (required): The name of the subscribers to search for.
  - **Response:**
    - Status Code: `200 OK`
    - Content-Type: application/json
    - Example Response:
    <img src= "https://github-production-user-asset-6210df.s3.amazonaws.com/87490161/265926138-ade5563b-a6c8-448d-baff-bffdb6b3e630.png" width="1000">
      <!-- ```json
      [
        {
          "name": "Jeread Krus",
          "subscribedChannel": "CNET",
        },
        {
          "name": "John Doe",
          "subscribedChannel": "freeCodeCamp.org",
        },
        {
          "name": "Lucifer",
          "subscribedChannel": "Sentex",
        }
      ]
      ``` -->
  - **Endpoint-Specific Error**
    - Status Code: `500 (Bad Request)`
    - Message: `Internal Server Error`

  ### Get Subscriber by ID
  ---
  **Description:** Retrieve a specific subscriber based on their ID.
  - **Endpoint:** `/subscribers/:id`
  - **Method:** `GET`
  - **Query Parameters:**
    - `id` (required): The ID of the subscriber to retrieve data.
  - **Response:**
    - Status Code: `200 OK`
    - Content-Type: `application/json`
    - Example Response:
    <img src= "https://github-production-user-asset-6210df.s3.amazonaws.com/87490161/265926161-25496317-7609-474e-9f7f-f099804186fe.png" width="1000" >
      <!-- ```json
      {
          "_id": {"$oid": "64d39e9dec691d30784ffadd"},
          "name": "Jeread Krus",
          "subscribedChannel": "CNET",
          "subscribedDate": {"$date": "2023-08-09T14:11:41.455Z"},
      }
      ``` -->
  - **Endpoint-Specific Error**:
    - Status Code: `400 (Bad Request)`
    - Message: `No subscriber found related to this ID.`
    - Example Response:
    <img src= "https://github-production-user-asset-6210df.s3.amazonaws.com/87490161/265926155-2cc3317b-cf08-48c7-a003-7b0997170795.png" width="1000">

###



> [!NOTE]
> Please be mindful of data privacy and security when using the API endpoints. Ensure that sensitive user information is transmitted securely and only the necessary data is exposed.

## Conclusion

This API documentation provides a comprehensive guide on how to interact with the API endpoints to retrieve subscribers information. If you have any questions or encounter any issues, please feel free to reach out.

While this documentation provides comprehensive guidance, remember that APIs can evolve. Stay connected with our updates to take advantage of new features, enhancements, and improvements. 






