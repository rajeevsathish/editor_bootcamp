# Collection Editor Setup

This guide will tell you how to run collection editor locally on your system. Follow the instructions below to get started.

## Prerequisites
Before cloning and running the project, make sure you have the following software installed on your machine:

- `` Node.js v16 or greater``

- ``Yarn``

- ``Angular CLI``

After installing Node.js, open a terminal and run the following command to install the Angular CLI globally:
```
npm install -g @angular/cli@14
```
---

## Clone the Repository
To clone the repository, open a terminal and run the following command:
```
git clone https://github.com/rajeevsathish/editor_bootcamp.git
```
---
## Install Dependencies
Navigate to the project's root directory by running the following command:
```
cd editor_bootcamp
```

Then, install the project dependencies by running:
```
yarn install
```
---

## Configuration of the Token
Configure the token for the application to run by following the below instructions
- Open ``server.js``
- Set the value of ``API_AUTH_TOKEN`` in the following format
    ```
    const API_AUTH_TOKEN = "<API token provided>";
    ```
---
## Run the Project

- Run the server
    ```
    node server
    ```

- To run the frontend  project, use the command:

    ```
    ng serve
    ```
After executing this command, the application will be compiled, and a local development server will be started. You can access the project by opening a web browser and navigating to http://localhost:4200/.

---
