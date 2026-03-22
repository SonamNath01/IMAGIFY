# IMAGIFY

AI-powered text-to-image generation with credit-based access control.

IMAGIFY lets users sign up, log in, and generate images from text prompts. Each user has a credit balance that decreases with every generation. The repo is split into a React frontend and a Node.js/Express backend.

## Project Structure

```text
IMAGIFY/
|-- client/   # React frontend (Vite)
|-- server/   # Express backend
`-- README.md
```

## Features

- JWT-based user registration and login
- Text-to-image generation via Hugging Face Inference API
- Credit system to track and deduct usage
- Download generated images
- Responsive UI with React and Tailwind CSS

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, React Toastify
- Backend: Node.js, Express, JWT, bcrypt
- Database: MongoDB Atlas with Mongoose
- AI Provider: Hugging Face Inference API

## Environment Variables

Create these files locally:

`client/.env`

```env
VITE_BACKEND_URL="http://localhost:4000"
```

`server/.env`

```env
MONGODB_URL="your_mongodb_atlas_connection_string"
JWT_SECRET="your_jwt_secret"
HF_TOKEN="your_hugging_face_token"
```

Do not commit `.env` files to GitHub.

## Setup

Install dependencies:

```bash
cd client
npm install

cd ../server
npm install
```

Run the app:

```bash
# Backend
cd server
npm start

# Frontend
cd ../client
npm run dev
```

## API Endpoints

- `POST /api/user/register`
- `POST /api/user/login`
- `GET /api/user/credits`
- `POST /api/image/generate-image`

Protected routes require a valid JWT token in the request headers.
