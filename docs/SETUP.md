# Setup Guide - Estoque

## Prerequisites
- Node.js 16 or higher
- PostgreSQL 12 or higher
- npm or yarn
- Git

## Installation Steps

### 1. Clone Repository
```bash
git clone https://github.com/katira-pr/Estoque.git
cd Estoque
```

### 2. Backend Setup

#### 2.1 Install dependencies
```bash
cd backend
npm install
```

#### 2.2 Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=estoque_db
DB_USER=estoque_user
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
PORT=5000
```

#### 2.3 Create database
```bash
# Using psql
psql -U postgres
CREATE DATABASE estoque_db;
CREATE USER estoque_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE estoque_db TO estoque_user;
```

#### 2.4 Run migrations
```bash
cd backend
npm run db:migrate
npm run db:seed
```

#### 2.5 Start backend server
```bash
npm run dev
```

### 3. Frontend Setup

#### 3.1 Install dependencies
```bash
cd ../frontend
npm install
```

#### 3.2 Configure environment variables
```bash
cp .env.example .env
```

Edit `.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

#### 3.3 Start frontend
```bash
npm start
```

### 4. Access Application
Open browser and navigate to:
```
http://localhost:3000
```

## Using Docker Compose

### Quick Start with Docker
```bash
# Build and start all services
docker-compose up -d

# Wait for services to be ready (approximately 30 seconds)

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000/api
# Database: localhost:5432
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

## Database Connection

### Connection String
```
postgresql://estoque_user:estoque_password@localhost:5432/estoque_db
```

### Using psql
```bash
psql -U estoque_user -d estoque_db -h localhost -p 5432
```

## Troubleshooting

### Port Already in Use
- Backend: Change `PORT` in `.env`
- Frontend: `PORT=3001 npm start`
- Database: Change `5432` in docker-compose.yml

### Database Connection Error
- Verify PostgreSQL is running
- Check credentials in `.env`
- Ensure database and user are created

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## First Login

Default admin credentials (after seeding):
```
Email: admin@estoque.com
Password: admin123
```

**Important:** Change these credentials immediately in production.
