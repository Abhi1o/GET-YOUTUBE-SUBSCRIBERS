<h1 align="center"> 
GET_YOUTUBE_SUBSCRIBERS
</h1>
Node.js app to get all details of youtube subscribers.

## Table of Contents 📑

- [Introduction 📝](#introduction-📝)
- [Features 💿](#features-💿)
- [Tech Stack 👨‍💻](#tech-stack-👨‍💻)
- [Prerequisites 📚](#prerequisites-📚)
- [Installation & Run🛠️](#installation-and-run-🛠️)
- [API Reference 🔗](#api-reference-🔗)
- [Contribute 🤝](#contribute-🤝)
- [Contributors ✨](#contributors-✨)
- [License ⚖](#license-⚖)
- [Contact 📧](#contact-📧)
- [Acknowledgments 👍](#acknowledgments-👍)


## Introduction 📝
Get_YouTube_Subscribers is an Application that serves as a RESTful API created by using Mongodb in Node.js. It is designed to fetch all subscribers information related to YouTube channel subscribers. The primary technologies used to develop this application are Node.js and Express.js which are used to create API endpoint and manage HTTP request. Additionally, this application utilizes MongoDB as the database to store and manage subscribers data efficiently.

![Get YT SUB](https://github.com/Abhi1o/GET-YOUTUBE-SUBSCRIBERS/assets/87490161/7e4f4776-cd79-4577-bb26-2ef06b30fa0a)

## Features 🧐
Some features of this application :
- **Seamless Data Retrieval:** Effortlessly fetch subscribers data from YouTube channels using API endpoints.
- **Structured JSON Output:** Present retrieved data in well-organized JSON format for easy interpretation.
- **Versatile API Endpoints:** Provide users with multiple API endpoints catering to various data retrieval needs.
- **Effective YouTube Data API Integration:** Interact seamlessly with the YouTube Data API for accurate data retrieval.
- **User-Friendly Setup:** Follow a straightforward setup process, enabling swift utilization of the tool.

## Tech Stack 👨‍💻
GET-Youtube-Subscriber is build using the following technologies:

- **Node.js:** A runtime environment that execute javaScript code on the server-side.
- **Express:** Node.js framework for building web application and RESTful API.
- **MongoDB:** Is NoSQL Database system that stores and manage data in JSON-like format.

## Prerequisites 📚

To run this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation and Run 🛠️
1. Clone the repository from GitHub:
    ```
     git clone https://github.com/Abhi1o/get_youtube_subscribers
    ```
2. Redirect to the project folder:
    ```
     cd get_youtube_subscribers
    ```
3. Install the required dependencies:
    ```
     npm install
    ```
4. Configure the application:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
      ```
       PORT=3000                             # The port on which the application will run
       DATABASE_URI= <your_uri_here>         # The MongoDB connection string
      ```
5. Create Database:
    - Inserting subscribers data into MongoDB.
        ```
         node createDB
        ```
6. Start server:
    ```
     npm start
    ```
    > [!NOTE]
    > Access the  application in your web browser at `http://localhost:3000` (base URL)


## API Reference 🔗
Following API endpoints for retrieving subscribers information using the GET method. For more refer to the [API-Documentation](./API-Documentation.md).

- `/subscribers`: Retrieve a list of all subscribers. Returns subscriber ID, name, subscribed channels and date.
- `/subscribers/names`: Obtain subscriber names along with the channels they are subscribed to.
- `/subscribers/id`: Access subscriber information based on their ID.

## Contribute 🤝
Contributions are welcome! If you'd like to contribute, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## Contributors ✨
- Abhishek Kumar [GitHub](https://github.com/abhi1o) | [LinkedIn](https://linkedin.com/in/abhi--)
- Aman Giri [GitHub](https://github.com/amangiri7) | [LinkedIn](https://www.linkedin.com/in/aman-giri-6b3a3b284/)
- Damini Gadpal [GitHub](https://github.com/Daminigadpal) | [LinkedIn](https://www.linkedin.com/in/damini-gadpal-01996716b)

## License ⚖
This project is Distributed under the [MIT License](https://chat.openai.com/c/LICENSE). See [LICENSE](./LICENCE) for more information.

## Contact 📧
If you have any questions or suggestions, feel free to reach out to us at [Gmail](https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLPhhCThjSQBxqqKCTksFHbgmPZGmrTXlskrtrXBgHxRqbmdRdzJJlNBtvTWsTLmjdVLbb).

## Acknowledgment 👍
We'd like to thank the open-source community and the creators of Node.js, Express, and MongoDB for their valuable contributions.




## Happy Learning ✨🎓

<p align="center">
<a href="https://github.com/Abhi1o/get_youtube_subscribers" title="GET youtube subscriber projects">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
    
</a>
</p>








