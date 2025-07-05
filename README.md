#Quote Generator Web AppThis is a dynamic web application that generates motivational quotes based on a user-provided topic. It leverages the power of Google's Gemini API to provide unique and relevant quotes, offering a more interactive experience than static quote lists.This project was developed as part of an internship assignment, focusing on modern web development practices including React, Tailwind CSS, and API integration.✨ FeaturesTopic-Based Quote Generation: Users can input any topic (e.g., "success", "happiness", "innovation"), and the app will generate 3 motivational quotes related to that topic.Powered by Gemini API: Utilizes Google's Gemini 2.0 Flash Large Language Model for intelligent quote generation.Responsive UI: Designed with Tailwind CSS to look great and be fully functional across various devices (mobile, tablet, desktop).Clear Quotes Functionality: A dedicated button to easily clear the displayed quotes and input field.Input Validation: Basic validation to ensure a valid topic is entered before generating quotes.Loading Indicator: Provides user feedback while quotes are being generated.Custom Message Modal: Displays user-friendly notifications without relying on browser alert()s.🚀 Technologies UsedReact: A JavaScript library for building user interfaces.Tailwind CSS: A utility-first CSS framework for rapid UI development, mimicking ShadCN UI components.Google Gemini API: For generating dynamic, topic-specific quotes.Parcel: A zero-configuration web application bundler used for local development and production builds.Git & GitHub: For version control and collaborative development.Vercel: For seamless deployment of the web application.🛠️ How to Run LocallyFollow these steps to set up and run the project on your local machine:Clone the Repository:git clone https://github.com/blackmangoo/Nexium_Ammar_Assign1.git
cd Nexium_Ammar_Assign1
Install Dependencies:This project uses pnpm as its package manager. If you don't have pnpm installed, you can install it globally:npm install -g pnpm
Then, install the project dependencies:pnpm install
Set Up Gemini API Key:Obtain a Gemini API key from Google AI Studio.In the root of your project directory, create a new file named .env.Add your API key to this file in the following format (replace YOUR_ACTUAL_GEMINI_API_KEY_HERE with your key):PARCEL_GEMINI_API_KEY=YOUR_ACTUAL_GEMINI_API_KEY_HERE
Important: The .env file is included in .gitignore to prevent your API key from being committed to public repositories.Start the Development Server:pnpm start
The application will typically open in your browser at http://localhost:1234.🌐 DeploymentThis application is designed for easy deployment to platforms like Vercel.Live Demo:Quote Generator Live App📄 Project StructureNexium_Ammar_Assign1/
├── public/
│   └── index.html         # Main HTML entry point
├── src/
│   ├── App.jsx            # Main React component with app logic and UI
│   └── index.jsx          # React app entry point (renders App.jsx)
├── .env                   # Environment variables (e.g., API key - LOCAL ONLY)
├── .gitignore             # Specifies files/folders to ignore in Git
├── package.json           # Project metadata and scripts
├── pnpm-lock.yaml         # pnpm lock file for consistent dependencies
└── README.md              # Project documentation (this file)
