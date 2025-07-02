import React, { useState } from 'react'; // Import useState hook for managing component state

// Main App component for the Quote Generator application
const App = () => {
  // State variable to store the topic entered by the user
  const [topic, setTopic] = useState('');
  // State variable to store the 3 quotes that will be displayed
  const [quotes, setQuotes] = useState([]);
  // State to manage any messages to the user (e.g., for a simple alert/modal)
  const [message, setMessage] = useState('');
  // State to control the visibility of the message modal
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  // Hardcoded array of motivational quotes.
  // In a real-world scenario, this might be loaded from a JSON file or an API.
  const allMotivationalQuotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Go confidently in the direction of your dreams! Live the life you've imagined. – Henry David Thoreau",
    "The mind is everything. What you think you become. – Buddha",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "The journey of a thousand miles begins with a single step. – Lao Tzu",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The only true wisdom is in knowing you know nothing. – Socrates",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. – Oprah Winfrey",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington"
  ];

  /**
   * Function to open a simple message modal with a given text.
   * This replaces browser's alert() for better UI control.
   * @param {string} msg - The message string to display in the modal.
   */
  const showMessage = (msg) => {
    setMessage(msg);
    setIsMessageModalOpen(true);
  };

  /**
   * Function to close the message modal and clear its content.
   */
  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
    setMessage('');
  };

  /**
   * Function to generate 3 random quotes from the allMotivationalQuotes array.
   * This is the core logic for Day 2.
   */
  const generateQuotes = () => {
    // Basic validation: if topic is empty, show a message
    if (topic.trim() === '') {
      showMessage("Please enter a topic to generate quotes.");
      return; // Stop the function execution
    }

    // Create a copy of the quotes array to avoid modifying the original
    const shuffledQuotes = [...allMotivationalQuotes];

    // Fisher-Yates (Knuth) shuffle algorithm to randomize the array
    for (let i = shuffledQuotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index from 0 to i
      [shuffledQuotes[i], shuffledQuotes[j]] = [shuffledQuotes[j], shuffledQuotes[i]]; // Swap elements
    }

    // Select the first 3 quotes from the shuffled array
    const selectedQuotes = shuffledQuotes.slice(0, 3);
    // Update the 'quotes' state, which will trigger a re-render of the component
    setQuotes(selectedQuotes);
  };

  return (
    // Main container for the entire application.
    // min-h-screen: Ensures it takes at least the full height of the viewport.
    // bg-gray-900: Dark background color.
    // text-gray-100: Light text color for contrast.
    // flex items-center justify-center: Centers content horizontally and vertically.
    // p-4: Padding on all sides for smaller screens.
    // font-inter: Applies the Inter font (loaded via index.html).
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4 font-inter">
      {/* Inner container for the form and quotes, acting as a card. */}
      {/* w-full: Takes full width on small screens. */}
      {/* max-w-md: Limits max width on larger screens for better readability. */}
      {/* bg-gray-800: Slightly lighter dark background for the card. */}
      {/* rounded-xl: Large rounded corners. */}
      {/* shadow-lg: Large shadow for depth. */}
      {/* p-6: Padding inside the card. */}
      {/* space-y-6: Adds vertical space between direct children. */}
      {/* md:p-8: More padding on medium screens and up. */}
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 space-y-6 md:p-8">
        {/* Application Title */}
        {/* text-3xl md:text-4xl: Responsive font size. */}
        {/* font-bold: Bold text. */}
        {/* text-center: Centers the text. */}
        {/* text-blue-400: Accent color for the title. */}
        {/* mb-6: Margin bottom. */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-6">
          Quote Generator
        </h1>

        {/* Input Form Section */}
        <div className="space-y-4">
          {/* Label for the topic input field */}
          <label htmlFor="topic-input" className="block text-sm font-medium text-gray-300">
            Enter Topic (e.g., Motivation, Success, Life):
          </label>
          {/* Input field for the topic */}
          {/* value={topic}: Binds the input's value to the 'topic' state. */}
          {/* onChange: Updates the 'topic' state as the user types. */}
          {/* Placeholder text. */}
          {/* Tailwind classes for ShadCN-like input styling: */}
          {/* flex h-10 w-full: Sets height and full width. */}
          {/* rounded-md: Rounded corners. */}
          {/* border border-gray-700: Border style. */}
          {/* bg-gray-900: Input background. */}
          {/* px-3 py-2: Padding inside input. */}
          {/* text-sm: Smaller text. */}
          {/* placeholder:text-gray-500: Placeholder color. */}
          {/* focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent: Focus styles. */}
          {/* text-gray-200: Input text color. */}
          <input
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Inspiration"
            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-gray-200"
          />
          {/* Button to trigger quote generation */}
          {/* onClick: Calls the generateQuotes function. */}
          {/* Tailwind classes for ShadCN-like button styling: */}
          {/* inline-flex items-center justify-center: For centering text/icons. */}
          {/* rounded-md: Rounded corners. */}
          {/* text-sm font-medium: Text styling. */}
          {/* transition-colors: Smooth color transitions on hover. */}
          {/* focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2: Focus styles. */}
          {/* ring-offset-gray-900: Ring offset color. */}
          {/* bg-blue-600 text-white hover:bg-blue-700: Button colors. */}
          {/* h-10 px-4 py-2 w-full: Sizing and padding. */}
          {/* shadow-md: Medium shadow. */}
          <button
            onClick={generateQuotes}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-gray-900 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full shadow-md"
          >
            Generate Quotes
          </button>
        </div>

        {/* Display Quotes Section */}
        {/* Conditionally renders this div ONLY if there are quotes in the 'quotes' array. */}
        {quotes.length > 0 && (
          <div className="space-y-4 mt-6">
            <h2 className="text-xl font-semibold text-gray-200 text-center">Your Quotes:</h2>
            {/* Map over the 'quotes' array to display each quote */}
            {quotes.map((quote, index) => (
              <div
                key={index} // Unique key for list items (important for React performance)
                // Tailwind classes for individual quote cards:
                // rounded-lg: Rounded corners.
                // border border-gray-700: Border style.
                // bg-gray-900: Background color.
                // p-4: Padding.
                // shadow-sm: Small shadow.
                className="rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm"
              >
                <p className="text-gray-300 italic text-center leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        )}

        {/* Message Modal (simple custom modal to replace alert()) */}
        {/* Conditionally renders the modal if isMessageModalOpen is true */}
        {isMessageModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl max-w-sm w-full space-y-4">
              <h3 className="text-lg font-semibold text-gray-100">Notification</h3>
              <p className="text-gray-300">{message}</p>
              <button
                onClick={closeMessageModal}
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-gray-900 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 shadow-md"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
