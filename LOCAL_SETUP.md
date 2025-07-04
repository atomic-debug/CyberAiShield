# CyberAiShield Local Development Setup

## 🚀 Quick Start

Your project is now **90% ready** to run locally! Follow these steps to complete the setup:

### 1. Database Setup (Choose One Option)

#### Option A: Neon Database (Recommended - Free & Easy)
1. Go to [Neon Console](https://console.neon.tech)
2. Create a free account
3. Create a new project
4. Copy the connection string from the dashboard
5. Update `.env` file with your connection string:
   ```bash
   DATABASE_URL="postgresql://username:password@hostname/database?sslmode=require"
   ```

#### Option B: Supabase Database (Alternative Free Option)
1. Go to [Supabase](https://supabase.com)
2. Create a free account and new project
3. Go to Settings > Database
4. Copy the connection string
5. Update `.env` file:
   ```bash
   DATABASE_URL="postgresql://postgres:[password]@[host]:5432/postgres"
   ```

#### Option C: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database: `createdb cyberaishield`
3. Update `.env` file:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/cyberaishield"
   ```

### 2. Environment Configuration

Update the `.env` file with your actual values:
```bash
# Required: Replace with your actual database URL
DATABASE_URL="your_actual_database_connection_string"

# Optional: Generate a secure session secret for production
SESSION_SECRET="your-super-secret-session-key-change-this-in-production"

# Optional: Add OpenAI API key if using AI features
# OPENAI_API_KEY="your-openai-api-key"
```

### 3. Initialize Database

Run the database migration to create all tables:
```bash
npm run db:push
```

### 4. Start the Application

Start the development server:
```bash
npm run dev
```

The application will be available at: **http://localhost:5000**

## ✅ Verification Steps

1. **Check server startup**: You should see "serving on port 5000" in the console
2. **Test frontend**: Visit http://localhost:5000 - you should see the landing page
3. **Test database**: Try registering a new user to verify database connectivity
4. **Check API**: Visit http://localhost:5000/api/auth/user (should return 401 if not logged in)

## 🛠️ Development Workflow

- **Frontend development**: Files in `client/src/` with hot reloading
- **Backend development**: Files in `server/` with automatic restart
- **Database changes**: Update `shared/schema.ts` and run `npm run db:push`
- **Build for production**: `npm run build`

## 🐛 Troubleshooting

### Database Connection Issues
- Verify your `DATABASE_URL` is correct
- Check if the database server is running
- Ensure the database exists and you have proper permissions

### Port Already in Use
- Change the `PORT` in `.env` file to a different port (e.g., `PORT=3000`)
- Or kill the process using port 5000: `lsof -ti:5000 | xargs kill -9`

### TypeScript Errors
- Run `npm run check` to see compilation errors
- Most common issues are missing type definitions or import paths

### Module Not Found Errors
- Run `npm install` to ensure all dependencies are installed
- Check if you're missing any environment variables

## 📁 Project Structure

```
CyberAiShield/
├── client/          # React frontend (Vite + TypeScript)
├── server/          # Express backend (Node.js + TypeScript)
├── shared/          # Shared types and database schema
├── .env             # Environment variables (you created this)
├── package.json     # Dependencies and scripts
└── LOCAL_SETUP.md   # This setup guide
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Apply database schema changes

## 🎯 Next Steps

Once running locally, you can:
1. Explore the codebase and make changes
2. Test the authentication system (register/login)
3. Try the AI chat functionality
4. Customize the UI and add features
5. Deploy to production when ready

## 📞 Need Help?

If you encounter any issues:
1. Check this troubleshooting section
2. Verify all environment variables are set correctly
3. Ensure your database is accessible
4. Check the console for error messages

**Status**: ✅ Dependencies installed, ✅ TypeScript configured, ✅ Environment template created
**Remaining**: Set up database connection and run `npm run db:push`