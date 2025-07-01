import React from 'react'; // Always import React when writing JSX
import React, {useState} from 'react';
// Define our main App functional component
const App = () => {
  return (
    // A simple div to contain our content, styled with Tailwind CSS
    // min-h-screen makes it take full viewport height
    // bg-gray-900 sets a dark background
    // text-gray-100 sets light text color
    // flex, items-center, justify-center centers the content on the page
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
      {/* Our main heading for the application */}
      {/* text-4xl sets the font size, font-bold makes it bold, text-blue-400 sets the color */}
      <h1 className="text-4xl font-bold text-blue-400">
        Welcome to Quote Generator!
      </h1>
    </div>
  );
};

// Export the App component so it can be imported and rendered by index.jsx
export default App;