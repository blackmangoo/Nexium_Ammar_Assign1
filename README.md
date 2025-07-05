# 🚀 Quote Generator Web App

A dynamic, responsive web app that generates motivational quotes based on a user-provided topic. Powered by **Google's Gemini API**, it delivers intelligent, contextual quotes — offering a more engaging experience than static lists.

This project was developed as part of an internship, focusing on **modern web development** practices using **React**, **Tailwind CSS**, and **API integration**.

---

## ✨ Features

- 🔍 **Topic-Based Quote Generation**  
  Enter any topic (e.g., *success*, *happiness*, *innovation*) and get 3 unique quotes instantly.

- 🤖 **Powered by Gemini API**  
  Uses **Google's Gemini 2.0 Flash LLM** for intelligent quote generation.

- 📱 **Responsive UI**  
  Built with **Tailwind CSS** and optimized for all screen sizes — mobile, tablet, and desktop.

- 🧹 **Clear Quotes Button**  
  Easily reset the interface and input field with a single click.

- 🛡️ **Input Validation**  
  Ensures the user enters a valid topic before calling the API.

- ⏳ **Loading Indicator**  
  Displays feedback while waiting for quotes to load.

- 💬 **Custom Message Modal**  
  Friendly alerts without using native `alert()` popups.

---

## 🧰 Technologies Used

| Tech              | Purpose                                  |
|-------------------|------------------------------------------|
| **React**         | Frontend UI development                  |
| **Tailwind CSS**  | Utility-first CSS styling (like ShadCN)  |
| **Google Gemini** | AI-powered quote generation              |
| **Parcel**        | Zero-config bundler for dev/build        |
| **pnpm**          | Fast package manager                     |
| **Git & GitHub**  | Version control                          |
| **Vercel**        | Deployment platform                      |

---

## 🛠️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/blackmangoo/Nexium_Ammar_Assign1.git
cd Nexium_Ammar_Assign1
2. Install Dependencies
This project uses pnpm. Install it globally if you haven't:

bash
Copy
Edit
npm install -g pnpm
Then install project dependencies:

bash
Copy
Edit
pnpm install
3. Set Up Gemini API Key
Get your key from Google AI Studio

In the project root, create a .env file and add:

env
Copy
Edit
PARCEL_GEMINI_API_KEY=YOUR_ACTUAL_GEMINI_API_KEY_HERE
⚠️ Note: .env is included in .gitignore for security.

4. Start the Development Server
bash
Copy
Edit
pnpm start
Visit http://localhost:1234 in your browser.

🌐 Deployment
This project is ready for deployment on platforms like Vercel.

🔗 Live Demo: Quote Generator Live App
(Replace the # with your deployed URL)

📁 Project Structure
csharp
Copy
Edit
Nexium_Ammar_Assign1/
├── public/
│   └── index.html         # HTML entry
├── src/
│   ├── App.jsx            # Main logic & UI
│   └── index.jsx          # React root
├── .env                   # API key (local only)
├── .gitignore             # Ignored files
├── package.json           # Metadata & scripts
├── pnpm-lock.yaml         # Lock file
└── README.md              # You're reading it!