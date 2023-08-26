# YouTube_Subscriber API Documentation

## Introduction

The API documentation for YouTube Subscriber API. This documentation provides details on how to interact with the API endpoints to retrieve subscriber information.

## Base URL
The base URL for all endpoints is 
 ```
    http://localhost:3000
 ```
## Authentication

This API does not require authentication for accessing the public endpoints. Simply make the required HTTP requests to start utilizing the API.

## Error Handling

In case of errors, the API will respond with appropriate error status codes and error messages. Please refer to the [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) documentation for more information.

## Endpoints

### Get Subscribers
**Description:** Retrieve a list of all subscribers.

- **Endpoint:** ` /subscribers`
- **Method:** GET
- **Response:**
  - Status Code: 200 OK
  - Content-Type: application/json
  - Example Response:
    ```json
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
    ```
    
  - Error : 400
  - Error Message: NoSubscriber found related to this ID
### Get Subscribers by Name

**Description:** Retrieve subscriber(s) based on their name.

- **Endpoint:**`  /subscribers/names `
- **Method:** GET
- **Query Parameters:**
  - `name` (required): The name of the subscriber to search for.
- **Response:**
  - Status Code: 200 OK
  - Content-Type: application/json
  - Example Response:
    ```json
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
    ```

### Get Subscriber by ID
**Description:** Retrieve a specific subscriber based on their ID.
- **Endpoint:**` /subscribers/id`
- **Query Parameters:**
  - `id` (required): The ID of the subscriber to retrieve.
- **Response:**
  - Status Code: `200 OK`
  - Content-Type: `application/json`
  - Example Response:
    ```json
    {
        "_id": {"$oid": "64d39e9dec691d30784ffadd"},
        "name": "Jeread Krus",
        "subscribedChannel": "CNET",
        "subscribedDate": {"$date": "2023-08-09T14:11:41.455Z"},
    }
    ```


---

> [!NOTE]
> Please be mindful of data privacy and security when using the API endpoints. Ensure that sensitive user information is transmitted securely and only the necessary data is exposed.

## Conclusion

This API documentation provides a comprehensive guide on how to interact with the API endpoints to retrieve subscriber information. If you have any questions or encounter any issues, please feel free to reach out.

While this documentation provides comprehensive guidance, remember that APIs can evolve. Stay connected with our updates to take advantage of new features, enhancements, and improvements. 






