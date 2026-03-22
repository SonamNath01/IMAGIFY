IMAGIFY 🎨

AI-powered text-to-image generation with credit-based access control.

IMAGIFY lets users sign up, log in, and generate images from text prompts. Each user has a credit balance that decreases with every generation. Built with a React frontend and a Node.js/Express backend.

✨ Features

🔐 JWT-based user registration and login
🖼️ Text-to-image generation via Hugging Face Inference API
💳 Credit system — track and deduct credits per generation
⬇️ Download generated images directly
📱 Responsive UI with React and Tailwind CSS


🛠️ Tech Stack
LayerToolsFrontendReact, Vite, Tailwind CSS, Framer Motion, React ToastifyBackendNode.js, Express, JWT, bcryptDatabaseMongoDB Atlas (Mongoose)AI ProviderHugging Face Inference API

📁 Project Structure
IMAGIFY/
├── client/       # React frontend (Vite)
├── server/       # Express backend
└── README.md

⚙️ Setup & Installation
1. Clone the repo
bashgit clone https://github.com/your-username/imagify.git
cd imagify
2. Configure environment variables
client/.env
envVITE_BACKEND_URL="http://localhost:4000"
server/.env
envMONGODB_URL="your_mongodb_atlas_connection_string"
JWT_SECRET="your_jwt_secret"
HF_TOKEN="your_hugging_face_token"

⚠️ Never commit .env files to GitHub. Add them to .gitignore.

3. Install dependencies
bash# Frontend
cd client && npm install

# Backend
cd ../server && npm install
4. Run the app
bash# Start backend (http://localhost:4000)
cd server && npm start

# Start frontend (http://localhost:5173)
cd client && npm run dev

🔌 API Endpoints
Auth
MethodEndpointDescriptionPOST/api/user/registerRegister a new userPOST/api/user/loginLogin and get JWT tokenGET/api/user/creditsGet current credit balance
Image
MethodEndpointDescriptionPOST/api/image/generate-imageGenerate image from prompt (auth required)

All protected routes require a valid JWT in the request headers.


🐛 Key Challenges & Fixes
This project required debugging across all layers simultaneously:

MongoDB — Fixed connection handling so the server exits clearly on DB failure
Auth — Corrected JWT secret usage across auth middleware and user controllers
Image Route — Fixed req.user.id extraction from middleware (was incorrectly reading from request body)
Credits — Fixed balance deduction and update logic post-generation
AI Provider — Replaced the original provider with Hugging Face; added content-type validation to confirm the response is actually an image
Stale Processes — Resolved issues caused by old backend instances serving outdated code


🚀 Future Improvements

 Payment integration for purchasing credits
 Image generation history per user
 Prompt templates and saved prompts
 Loading skeletons and better progress feedback
 Unit and integration tests


👤 Author
Sonam Nath — GitHub