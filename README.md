# 🕉️ Vamanaa – AI-Powered Sanatana Dharma Learning Platform

## 🚀 Overview

Vamanaa is an AI-powered web application that enables users to explore the wisdom of **Bhagavad Gita**, **Ramayana**, and **Mahabharata** using Artificial Intelligence and Semantic Search.

The platform combines ancient scriptures with modern AI technologies to provide meaningful, contextual, and easy-to-understand answers. Instead of relying only on keyword searches, Vamanaa uses vector embeddings and Google's Gemini AI to retrieve relevant scriptures and generate intelligent responses.

The project is designed to preserve and promote the teachings of Sanatana Dharma through an interactive and user-friendly learning platform.

---

# ✨ Features

### 🔐 User Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- User Profile
- Logout

---

### 📖 Bhagavad Gita

- Browse all chapters
- Read verses
- Chapter-wise navigation
- AI-powered explanations
- Semantic Search
- Daily Sloka

---

### 🏹 Ramayana

- Browse all seven Kandas
- Read chapter-wise verses
- Kanda navigation
- Semantic Search
- AI explanations

---

### ⚔️ Mahabharata

- Explore important sections
- Story summaries
- AI-assisted learning
- Intelligent scripture search

---

### 🤖 AI Assistant

Ask questions like:

- What is Dharma?
- Explain Karma.
- Who is Lord Krishna?
- Why did Rama go to exile?
- What does Bhagavad Gita say about success?
- Explain Mahabharata in simple words.

The AI:

- Retrieves relevant scriptures
- Uses Gemini AI
- Maintains conversation history
- Provides contextual responses
- Explains verses in simple English

---

### 🧠 Semantic Search

Instead of keyword matching, the application uses:

- Sentence Transformers
- ChromaDB Vector Database
- Embedding-based Retrieval

This provides more accurate and meaningful search results.

---

### 💬 Chat History

- Stores previous AI conversations
- Retrieves earlier discussions
- Enables continuous conversations

---

### 👤 User Profile

- Displays username
- Displays email
- Logout functionality

---

### 📜 About Page

- Mission
- Vision
- Technologies Used
- Project Information

---

# 🛠 Technologies Used

## Frontend

- React.js
- React Router DOM
- Tailwind CSS
- JavaScript
- HTML5
- CSS3

---

## Backend

- FastAPI
- Python

---

## Artificial Intelligence

- Google Gemini AI
- Sentence Transformers
- Semantic Search

---

## Database

- ChromaDB (Vector Database)
- JSON Storage

---

## Authentication

- JWT
- Passlib
- BCrypt

---

## Libraries

- FastAPI
- Uvicorn
- Python-dotenv
- SentenceTransformers
- ChromaDB
- Google Generative AI
- Pydantic
- Passlib
- Python-Jose

---

# 📂 Project Structure

```
VAMANAA/

│

├── backend/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── utils/
│   ├── data/
│   ├── chroma_db/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
├── screenshots/
│
├── README.md
│
└── LICENSE
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/VAMANAA.git

cd VAMANAA
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv .venv
```

Activate Environment

Windows

```bash
.venv\Scripts\activate
```

Linux / Mac

```bash
source .venv/bin/activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Environment Variables

Create a file named

```
.env
```

Add

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# Run Backend

```bash
uvicorn app:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

Swagger API

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Go to frontend

```bash
cd frontend
```

Install Dependencies

```bash
npm install
```

Run React

```bash
npm start
```

Frontend runs at

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Authentication

```
POST /register
POST /login
GET /profile
```

---

## AI

```
POST /ask
```

---

## Bhagavad Gita

```
GET /gita
GET /gita/chapter/{id}
```

---

## Ramayana

```
GET /ramayana
GET /ramayana/{kanda}
GET /ramayana/{kanda}/{chapter}/{verse}
```

---

## Mahabharata

```
GET /mahabharata
```

---

## Chat History

```
GET /history
```

---

## Daily Sloka

```
GET /daily-sloka
```

---

# 📸 Screenshots

```
screenshots/

landing.png

home.png

login.png

register.png

gita.png

ramayana.png

mahabharata.png

ask-ai.png

profile.png

about.png
```

(Add screenshots after deployment.)

---

# 🚀 Deployment

## Backend

Deploy on **Render**

```
https://your-backend.onrender.com
```

---

## Frontend

Deploy on **Vercel**

```
https://your-app.vercel.app
```

---

# 🔮 Future Enhancements

- OCR for scripture scanning
- Voice-based AI assistant
- Sanskrit verse pronunciation
- Telugu translation
- Hindi translation
- Tamil translation
- Bookmark favourite verses
- Reading progress tracking
- Daily notifications
- Admin Dashboard
- Mobile Application
- Docker Deployment
- Kubernetes Deployment
- Cloud Storage
- Multi-Agent AI
- Personalized Recommendations

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Ashish**

B.Tech – Computer Science and Engineering (Artificial Intelligence & Machine Learning)

Malla Reddy College of Engineering & Technology

GitHub:

https://github.com/Yellanki-Ashish

---

# 🙏 Acknowledgements

- Bhagavad Gita
- Ramayana
- Mahabharata
- Google Gemini AI
- FastAPI
- React.js
- ChromaDB
- Sentence Transformers
- Tailwind CSS
- Open Source Community

---

# ⭐ Support

If you found this project useful,

⭐ Star this repository on GitHub.

It motivates future development and helps others discover the project.

---

## 📊 Project Statistics

| Feature | Status |
|----------|--------|
| User Authentication | ✅ |
| Bhagavad Gita Module | ✅ |
| Ramayana Module | ✅ |
| Mahabharata Module | ✅ |
| AI Assistant | ✅ |
| Semantic Search | ✅ |
| Chat History | ✅ |
| JWT Authentication | ✅ |
| Daily Sloka | ✅ |
| Responsive UI | ✅ |
| Profile Management | ✅ |

---

## ❤️ Vision

**"Bringing the timeless wisdom of Sanatana Dharma into the digital era through Artificial Intelligence."**