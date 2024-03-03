# Workouts API

This Node.js application provides an API for managing workouts. It follows the clean architecture principles introduced by Bob Martin and serves as a demonstration of how to implement such architecture in a Node.js project.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/workouts-api.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd workouts-api
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

1. **Create a `.env` file in the root directory of the project.**

2. **Define the `NODE_ENV` variable in the `.env` file and set it to either `development` or `production`. For example:**

   ```
   NODE_ENV=development
   ```

   This environment variable controls the application's runtime environment.

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Access the API endpoints using a tool like `curl`, `Postman`, or integrate it into your frontend application.**

## Project Structure

The project follows the clean architecture principles proposed by Bob Martin. Here's a brief overview of the project structure:

- `src/`: Contains the application source code.
  - `controllers/`: Controllers responsible for handling HTTP requests and responses.
  - `middlewares/`: Middleware functions.
  - `models/`: Data models representing domain entities.
  - `routes/`: Route definitions for mapping endpoints to controller actions.
  - `services/`: Business logic and application services.
  - `utils/`: Utility functions and helpers.
- `config/`: Configuration files.
- `app.js`: Entry point of the application.
- `.env`: Environment variables.

## Contributing

Contributions are welcome! If you have suggestions for improvements, or if you encounter any issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).