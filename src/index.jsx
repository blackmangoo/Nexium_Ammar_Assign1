import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App.jsx'; // Import our main App component

// Get the root DOM element where our React app will be rendered
const rootElement = document.getElementById('root');

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root
// React.StrictMode helps highlight potential problems in an application.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);