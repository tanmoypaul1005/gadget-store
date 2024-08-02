# Gadget Store BD

Welcome to Gadget Store BD, your one-stop shop for the latest gadgets and electronics!

[Live Site](https://gadget-storebd.vercel.app)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Browse a wide selection of gadgets and electronics
- Search for products by name or category
- View detailed product information and reviews
- Add products to your cart and checkout
- User authentication and profile management
- Admin dashboard for managing products and orders

## Technologies Used
- **Frontend**: React, Next.js, Tailwind CSS
- **State Management**: Zustand, Redux, Redux-Toolkit
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Authentication**: Passport.js
- **Deployment**: Vercel

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/gadget-store-bd.git
    ```
2. Navigate to the project directory:
    ```bash
    cd gadget-store-bd
    ```
3. Install dependencies for both client and server:
    ```bash
    # For client
    cd client
    npm install

    # For server
    cd ../server
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the `server` directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Usage
1. Start the development server:
    ```bash
    # In the server directory
    npm run dev
    ```
2. Start the client:
    ```bash
    # In the client directory
    npm run dev
    ```
3. Open your browser and go to `http://localhost:3000`.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and write tests for new features.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, feel free to reach out:

- **Email**: [tlanmoy@example.com](mailto:tlanmoy@example.com)
- **GitHub**: [yourusername](https://github.com/yourusername)

Happy shopping at Gadget Store BD!


