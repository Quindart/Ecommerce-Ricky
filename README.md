


# Pet Food E-Commerce Platform

The Pet Food E-Commerce Platform is an online store dedicated to providing food and accessories for pets. With a user-friendly interface and modern features, the platform offers a seamless, secure, and optimized shopping experience for pet lovers.

![image](https://github.com/user-attachments/assets/e397049b-1514-4148-9b62-95681d172404)
![image](https://github.com/user-attachments/assets/bf85e3b8-dc31-4e10-a2b9-75c0dde2289a)
![image](https://github.com/user-attachments/assets/cd45c927-352a-417d-9fb3-a13f1c229f96)
![image](https://github.com/user-attachments/assets/6d6c16e9-0b01-4275-b3d3-ff1bce71c57f)
![image](https://github.com/user-attachments/assets/aaf5dc86-4922-4d14-85f3-6b07811f0d67)
![image](https://github.com/user-attachments/assets/c07e3904-63fc-4dea-864b-5df4bd2f9877)




## Key Features

- **VNPAY Payment Integration**: Supports fast and secure payments via VNPAY, including QR code, bank cards, and e-wallets.
- **Transaction Management**: Comprehensive system to track purchase history and payment statuses for users.
- **Category Optimization with Redis and Tree Pattern**:
  - Uses Redis to cache product categories, reducing database query times and improving performance.
  - Implements a Tree Pattern for hierarchical category design (e.g., Dog Food → Dry Food → Brand X), enabling efficient category management and retrieval.
- **Product Search and Filtering**:
  - Search products by keywords with fast and accurate results.
  - Filter products by price range, category, brand, or other criteria.
- **Cart Management**: Allows users to add, remove, or update product quantities in the cart, with real-time total order value display.
- **Responsive UI**: Optimized for both desktop and mobile devices, ensuring a smooth shopping experience.

## Technologies Used

- **Frontend**: ReactJS, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing products, transactions, and user data)
- **Cache**: Redis (for optimizing category queries and search)
- **Search**: Elasticsearch (for full-text search and advanced filtering)
- **Payment**: VNPAY API
- **Authentication**: JWT (JSON Web Token)
- **Hosting**: Vercel (frontend), Heroku (backend)

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Redis (local or Redis Cloud)
- Elasticsearch (optional, for advanced search capabilities)
- VNPAY Merchant account (for payment integration)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/username/pet-food-ecommerce.git
   cd pet-food-ecommerce
   ```

2. **Install dependencies**

   - Frontend:
     ```bash
     cd client
     npm install
     ```
   - Backend:
     ```bash
     cd server
     npm install
     ```

3. **Configure environment variables**

   - Create a `.env` file in the `server` directory with the following:
     ```
     MONGODB_URI=mongodb://localhost:27017/pet_food_ecommerce
     REDIS_URL=redis://localhost:6379
     ELASTICSEARCH_URL=http://localhost:9200
     VNPAY_TMN_CODE=your_vnpay_tmn_code
     VNPAY_HASH_SECRET=your_vnpay_hash_secret
     JWT_SECRET=your_jwt_secret
     ```
   - Create a `.env` file in the `client` directory with:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

4. **Start MongoDB and Redis**

   - Ensure MongoDB and Redis are running locally or use cloud services (MongoDB Atlas, Redis Cloud).
   - (Optional) Set up and run Elasticsearch for advanced search functionality.

5. **Configure VNPAY**

   - Register a VNPAY Merchant account to obtain `TMN_CODE` and `HASH_SECRET`.
   - Update these credentials in the server’s `.env` file.

6. **Run the application**

   - Backend:
     ```bash
     cd server
     npm start
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

   By default, the backend runs on `http://localhost:5000` and the frontend on `http://localhost:3000`.

7. **Test the application**

   - Open a browser and navigate to `http://localhost:3000`.
   - Register/login, add products to the cart, try searching/filtering products, and complete a payment via VNPAY.

## Usage Guide

1. **Search and Filter Products**:
   - Use the search bar to find products by name or description.
   - Apply filters for price range, category (e.g., cat food, accessories), or brand.

2. **Manage Cart**:
   - Add products to the cart from the product list or detail page.
   - Update quantities or remove items directly in the cart.

3. **Pay with VNPAY**:
   - At checkout, select VNPAY as the payment method.
   - Scan the QR code or enter card details to complete the transaction.

4. **View Transactions**:
   - Access transaction history in the user account section.
   - Check payment statuses (success, failed, or pending).

## Performance Optimization

- **Redis**: Product categories are cached in Redis to minimize database queries.
- **Tree Pattern**: Categories are structured hierarchically, enabling fast retrieval of sub-categories.
- **Elasticsearch**: Enhances search and filtering with full-text search and complex query support.

## Notes

- Ensure HTTPS is configured for production to support VNPAY and secure user data.
- Monitor Redis and Elasticsearch to maintain performance under high traffic.
- For production, register and verify an official VNPAY Merchant account.
- Commit all configuration files (except `.env`) when pushing to GitHub.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a Pull Request.

## License


This project is licensed under the [MIT License](LICENSE).
