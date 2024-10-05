# Task Management App

A React-based task management application with features for adding, updating, and filtering tasks.

## Features

- Add new tasks
- Update task status
- Filter tasks by status
- Design using Ant Design components

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (preferably the latest LTS version)
- npm (comes with Node.js) or yarn

## Installation

1. Clone the repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Install the dependencies by running:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variable to the `.env` file:

   ```bash
   REACT_APP_API_URL=your_api_url_here
   ```

   Replace `your_api_url_here` with the actual URL of your backend API.

## Running the Application

1. To start the development server, run:

   ```bash
   npm start
   ```

   or with yarn:

   ```bash
   yarn start
   ```

2. The application should now be running on `http://localhost:3000` (or another port if 3000 is already in use).

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run lint:fix`: Runs ESLint and automatically fixes issues where possible.
- `npm run format`: Runs Prettier to format the code.

## Project Structure

- `src/app/index.tsx`: The main App component
- `src/app/containers/Tasks/index.tsx`: The Tasks component, which is the main feature of the application
- `src/app/services/task.ts`: Contains API calls for task-related operations
- `src/utils/`: Utility functions for requests and URL handling
- `src/styles/theme.ts`: Defines the theme for the application

## Technologies Used

- React
- TypeScript
- Ant Design (antd)
- React Router
- ahooks

## Notes

- Make sure your backend API is running and accessible at the URL you specified in the `.env` file before starting the application.
- This project uses React with TypeScript.
-
