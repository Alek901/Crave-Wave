Crave Wave - Food Delivery Platform
===================================

Project Overview
----------------

Crave Wave is an online food delivery platform connecting customers (Cravers) with delivery drivers (Wavers).

Core Features
-------------

### User Management

-   Account creation and authentication
-   Secure login with session persistence
-   Two user roles: Cravers (customers) and Wavers (drivers)

### Customer Features (Cravers)

-   Browse food menu with images
-   Shopping cart management
-   Place orders for delivery/pickup
-   Track order status
-   Optional: Customize meals (ingredients, combo options)
-   View order history and pricing
-   Contact support

### Driver Features (Wavers)

-   View pending delivery orders
-   Mark orders as delivered
-   Manage delivery queue

Technical Requirements
----------------------

### Frontend

-   React-based UI
-   Polished, eye-friendly design
-   Responsive and intuitive interface
-   Interactive user experience

### Backend

-   Node.js with Express.js
-   GraphQL API
-   JWT authentication
-   MongoDB with Mongoose ODM
-   Environment variable protection

### Development Requirements

-   GitHub Actions integration
-   Render deployment
-   Database operations:
    -   Create (Add items/users)
    -   Read (Fetch orders/menu)
    -   Update (Modify orders)
    -   Delete (Remove cart items)

### API Features

-   GraphQL queries and mutations
-   Protected endpoints
-   User session management

Goals for Future Development
--------------------
- Add or remove ingredients from food
- Turn a selection into a combo meal
- Add the Wavers functionality
