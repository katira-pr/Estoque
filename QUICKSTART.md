## 🚀 Quick Start Guide

### Prerequisites
- Node.js v16+
- PostgreSQL 12+
- Docker & Docker Compose (optional)

### Option 1: Docker Compose (Recommended)

```bash
# Clone repository
git clone https://github.com/katira-pr/Estoque.git
cd Estoque

# Start all services
docker-compose up -d

# Wait ~30 seconds for services to initialize

# Access application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Database: localhost:5432
```

### Option 2: Manual Installation

#### 1. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Run migrations and seeds
npm run db:migrate
npm run db:seed

# Start server
npm run dev
```

#### 2. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start development server
npm start
```

### Demo Credentials

After seeding, use these credentials:

```
Email: admin@estoque.com
Password: admin123

Other test accounts:
- manager@estoque.com (Manager role)
- user@estoque.com (User role)
```

### Database

The database includes demo data with:
- 3 user accounts (admin, manager, user)
- 4 product categories (ABC classification)
- 5 sample products for testing

### Troubleshooting

**Port already in use:**
```bash
# Change backend port in .env
PORT=5001

# Change frontend port
PORT=3001 npm start
```

**Database connection error:**
```bash
# Check PostgreSQL is running
psql -U postgres

# Verify credentials in .env match your PostgreSQL setup
```

**Node modules issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

**Next Steps:**
- Implement Dashboard KPIs
- Build Inventory Management UI
- Add Purchase Order features
- Create Consumption Reports
