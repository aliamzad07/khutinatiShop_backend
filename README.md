# KhutinatiShop Backend API

Complete backend API for KhutinatiShop e-commerce website built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **User Management**: Registration, login, profile management, password reset
- **Product Management**: Full CRUD with categories, search, filter, and pagination
- **Cart System**: Complete shopping cart functionality
- **Order Management**: Place orders, track status, cancel orders
- **Review System**: Product reviews with verified purchase badges
- **Category Management**: Hierarchical category structure
- **Coupon System**: Discount coupons with validation
- **Admin Dashboard**: Analytics, sales reports, order management
- **Security**: Helmet, CORS, rate limiting, input validation

## 📦 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Encryption**: bcryptjs
- **Validation**: express-validator
- **Security**: Helmet, CORS, express-rate-limit

## 📁 Project Structure

```
KhutinatiShop_backend/
├── src/
│   ├── config/
│   │   └── database.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js        # Authentication logic
│   │   ├── productController.js     # Product operations
│   │   ├── cartController.js        # Cart management
│   │   ├── orderController.js       # Order operations
│   │   └── adminController.js       # Admin operations
│   ├── models/
│   │   ├── User.js                  # User schema
│   │   ├── Product.js               # Product schema
│   │   ├── Category.js              # Category schema
│   │   ├── Cart.js                  # Cart schema
│   │   ├── Order.js                 # Order schema
│   │   ├── Review.js                # Review schema
│   │   └── Coupon.js                # Coupon schema
│   ├── routes/
│   │   ├── authRoutes.js            # Auth endpoints
│   │   ├── productRoutes.js         # Product endpoints
│   │   ├── cartRoutes.js            # Cart endpoints
│   │   ├── orderRoutes.js           # Order endpoints
│   │   ├── adminRoutes.js           # Admin endpoints
│   │   ├── userRoutes.js            # User management
│   │   ├── categoryRoutes.js        # Category endpoints
│   │   ├── reviewRoutes.js          # Review endpoints
│   │   └── couponRoutes.js          # Coupon endpoints
│   ├── middleware/
│   │   ├── auth.js                  # JWT auth & authorization
│   │   └── validation.js            # Request validation
│   ├── utils/
│   │   └── generateToken.js         # JWT token generator
│   └── server.js                    # App entry point
├── .gitignore
├── env.example
├── package.json
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create `.env` file**
   ```bash
   cp env.example .env
   ```

   Update `.env` with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/khutinatishop
   JWT_SECRET=your_super_secret_jwt_key_change_this
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:3000
   ```

3. **Start MongoDB** (if running locally)
   ```bash
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

4. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Verify server is running**
   
   Navigate to `http://localhost:5000` - you should see:
   ```json
   {
     "success": true,
     "message": "Welcome to KhutinatiShop API",
     "version": "1.0.0"
   }
   ```

## 📡 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/register` | Public | Register new user |
| POST | `/login` | Public | Login user |
| POST | `/logout` | Private | Logout user |
| POST | `/forgot-password` | Public | Request password reset |
| PUT | `/reset-password/:resetToken` | Public | Reset password with token |
| GET | `/me` | Private | Get current user |
| PUT | `/updateprofile` | Private | Update profile |
| PUT | `/updatepassword` | Private | Update password |

### Products (`/api/products`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/` | Public | Get all products (with filters) |
| GET | `/featured` | Public | Get featured products |
| GET | `/category/:categoryId` | Public | Get products by category |
| GET | `/:id` | Public | Get product details |
| POST | `/` | Admin | Add new product |
| PUT | `/:id` | Admin | Update product |
| DELETE | `/:id` | Admin | Delete product |

### Cart (`/api/cart`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/` | Private | Get user cart |
| POST | `/` | Private | Add item to cart |
| PUT | `/:itemId` | Private | Update cart item quantity |
| DELETE | `/:itemId` | Private | Remove item from cart |
| DELETE | `/` | Private | Clear cart |

### Orders (`/api/orders`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/` | Private | Place new order |
| GET | `/` | Private | Get user's orders |
| GET | `/:id` | Private | Get order details |
| PUT | `/:id/cancel` | Private | Cancel order |
| PUT | `/:id/pay` | Private | Update order to paid |

### Admin (`/api/admin`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/orders` | Admin | Get all orders |
| PUT | `/orders/:id` | Admin | Update order status |
| GET | `/analytics` | Admin | Get dashboard analytics |
| GET | `/sales-report` | Admin | Get sales report |

### Categories (`/api/categories`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/` | Public | Get all categories |
| GET | `/:id` | Public | Get single category |
| POST | `/` | Admin | Create category |
| PUT | `/:id` | Admin | Update category |
| DELETE | `/:id` | Admin | Delete category |

### Reviews (`/api/reviews`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/product/:productId` | Public | Get product reviews |
| GET | `/my-reviews` | Private | Get user's reviews |
| POST | `/` | Private | Create review |
| PUT | `/:id` | Private | Update review |
| DELETE | `/:id` | Private/Admin | Delete review |

### Coupons (`/api/coupons`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/` | Admin | Get all coupons |
| POST | `/validate` | Private | Validate coupon code |
| POST | `/` | Admin | Create coupon |
| PUT | `/:id` | Admin | Update coupon |
| DELETE | `/:id` | Admin | Delete coupon |

### Users (`/api/users`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/` | Admin | Get all users |
| GET | `/:id` | Admin | Get user by ID |
| PUT | `/:id` | Admin | Update user |
| DELETE | `/:id` | Admin | Delete user |
| PUT | `/:id/role` | Admin | Update user role |

## 📝 Request Examples

### 1. Register User

```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

### 2. Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

# Response includes token
{
  "success": true,
  "message": "Login successful",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 3. Add Product to Cart

```bash
POST /api/cart
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "productId": "product_id_here",
  "quantity": 2
}
```

### 4. Place Order

```bash
POST /api/orders
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "orderItems": [
    {
      "product": "product_id",
      "name": "Product Name",
      "quantity": 2,
      "image": "image_url",
      "price": 99.99
    }
  ],
  "shippingAddress": {
    "fullName": "John Doe",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "paymentMethod": "card",
  "itemsPrice": 199.98,
  "taxPrice": 19.99,
  "shippingPrice": 10.00,
  "totalPrice": 229.97
}
```

### 5. Create Product Review

```bash
POST /api/reviews
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "product": "product_id",
  "rating": 5,
  "title": "Great product!",
  "comment": "This product exceeded my expectations."
}
```

### 6. Validate Coupon

```bash
POST /api/coupons/validate
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "code": "SAVE20",
  "cartTotal": 100
}

# Response
{
  "success": true,
  "message": "Coupon is valid",
  "data": {
    "code": "SAVE20",
    "discountAmount": "20.00",
    "finalAmount": "80.00"
  }
}
```

### 7. Get Dashboard Analytics (Admin)

```bash
GET /api/admin/analytics
Authorization: Bearer <admin_jwt_token>

# Response includes comprehensive analytics
{
  "success": true,
  "data": {
    "users": {
      "total": 150,
      "newThisMonth": 25
    },
    "products": {
      "total": 200,
      "active": 180,
      "outOfStock": 15
    },
    "orders": {
      "total": 500,
      "pending": 20,
      "processing": 35,
      "shipped": 50,
      "delivered": 380,
      "cancelled": 15
    },
    "revenue": {
      "total": "125000.00",
      "average": "250.00",
      "monthly": [...]
    },
    "topProducts": [...],
    "recentOrders": [...]
  }
}
```

## 🗄️ Database Models

### User
- name, email, password (hashed)
- phone, role (user/admin)
- avatar, address
- isVerified, resetPasswordToken
- timestamps

### Product
- name, description, price, discountPrice
- category (ref to Category)
- brand, images, stock, SKU
- ratings (average, count)
- specifications, tags
- isFeatured, isActive, soldCount
- timestamps

### Category
- name, slug, description
- image, parent (for subcategories)
- isActive, order
- timestamps

### Cart
- user (ref to User)
- items (array with product, quantity, price)
- totalPrice, totalItems
- timestamps

### Order
- user (ref to User)
- orderItems (array)
- shippingAddress
- paymentMethod, paymentResult
- prices (items, tax, shipping, total)
- isPaid, paidAt, isDelivered, deliveredAt
- orderStatus (pending, processing, shipped, delivered, cancelled)
- timestamps

### Review
- user (ref to User)
- product (ref to Product)
- rating, title, comment
- images, isVerifiedPurchase
- helpfulCount, isApproved
- timestamps

### Coupon
- code, description
- discountType (percentage/fixed)
- discountValue, minPurchaseAmount
- maxDiscountAmount, usageLimit, usedCount
- validFrom, validUntil, isActive
- applicableCategories, applicableProducts
- timestamps

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs with salt rounds
- **Helmet**: Security headers protection
- **CORS**: Configured for frontend origin
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: express-validator for all inputs
- **Role-Based Access**: User and Admin roles
- **Password Reset**: Secure token-based reset flow

## 🧪 Testing the API

You can use tools like:
- **Postman**: Import endpoints and test
- **Thunder Client**: VS Code extension
- **cURL**: Command line testing
- **Insomnia**: API testing client

Example with cURL:
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment mode | development |
| MONGODB_URI | MongoDB connection | mongodb://localhost:27017/khutinatishop |
| JWT_SECRET | JWT secret key | - |
| JWT_EXPIRE | JWT expiration | 7d |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:3000 |

## 🚦 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message here",
  "errors": [ ... ]  // validation errors if any
}
```

### Paginated Response
```json
{
  "success": true,
  "count": 10,
  "total": 100,
  "page": 1,
  "pages": 10,
  "data": [ ... ]
}
```

## 📊 Order Status Flow

```
pending → processing → shipped → delivered
   ↓
cancelled (can be cancelled before shipped)
```

## 🛣️ Product Query Parameters

```
GET /api/products?category=id&minPrice=10&maxPrice=100&sort=-price&page=1&limit=10&search=keyword
```

Supported filters:
- `category`: Filter by category ID
- `minPrice` / `maxPrice`: Price range
- `isFeatured`: true/false
- `sort`: Sort by field (prefix with - for descending)
- `page` / `limit`: Pagination
- `search`: Full-text search

## 🎯 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications (Nodemailer)
- [ ] Image upload to cloud (Cloudinary)
- [ ] WebSocket for real-time updates
- [ ] Unit and integration tests
- [ ] API documentation with Swagger
- [ ] Caching with Redis
- [ ] Logging with Winston
- [ ] Order tracking system
- [ ] Wishlist functionality
- [ ] Product comparison
- [ ] Advanced analytics

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Ensure MongoDB is running
mongod --version

# Check connection string in .env
MONGODB_URI=mongodb://localhost:27017/khutinatishop
```

### Port Already in Use
```bash
# Kill process on port 5000 (macOS/Linux)
lsof -ti:5000 | xargs kill -9

# Or change PORT in .env
PORT=5001
```

### JWT Errors
- Ensure JWT_SECRET is set in .env
- Check token format: `Bearer <token>`
- Verify token hasn't expired

## 📄 License

ISC

## 👨‍💻 Development

```bash
# Install dependencies
npm install

# Run in development mode with nodemon
npm run dev

# Run in production mode
npm start
```

## 📞 Support

For issues and questions, please create an issue in the repository or contact support.

---

**Happy Coding! 🚀**
