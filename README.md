# Crypto Price Tracker

The following will contain information to run the Docusaurus documentation project. On the documentation page
you will find the setup guide for the Crypto Price Tracker application.

## Introduction
This guide provides instructions on setting up and running the Docusaurus-based documentation project. Follow these steps to install dependencies, configure the environment, and start the development server.

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setup Instructions

1. **Clone or Obtain the Project Folder**
   - Extract the zip folder or clone the project's github repository
     ```sh
     git clone [repo](https://github.com/gdneill/crypto-price-tracker.git)
     cd crpyto-price-tracker
     ```

2. **Install Dependencies**
   Run the following command in the project root directory:
   ```sh
   npm install
   ```

3. **Start the Development Server**
   To preview the documentation locally, run:
   ```sh
   npm run start
   ```
   The documentation site will be available at `http://localhost:3000/`.

## Troubleshooting
- If you encounter permission errors, try running the command with `sudo` (Linux/macOS).
- Ensure you are using a compatible Node.js version.
- Delete the `node_modules` folder and `package-lock.json/yarn.lock` and reinstall dependencies if issues persist:
  ```sh
  rm -rf node_modules package-lock.json yarn.lock
  npm install
  ```


