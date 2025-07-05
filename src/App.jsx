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
  // State to indicate if quotes are currently being generated (for loading indicator)
  const [loading, setLoading] = useState(false);

  //API Key for local development.
  const GEMINI_API_KEY = "AIzaSyCO6g21wMI3cGqFXQU0Wgt4nlSjbFpmIt4"; // i have used my gemeni api key for testing, you can use yours

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
   * NEW FUNCTION: Clears the displayed quotes and the topic input.
   */
  const clearQuotes = () => {
    setQuotes([]); // Clear the quotes array
    setTopic('');   // Clear the topic input
  };

  /**
   * Function to generate 3 quotes using the Gemini API based on the entered topic.
   * This function is now asynchronous as it makes an API call.
   */
  const generateQuotes = async () => {
    // Enhanced Input Validation: Check for empty or too short topic
    if (topic.trim() === '') {
      showMessage("Please enter a topic to generate quotes.");
      return;
    }
    if (topic.trim().length < 3) { // Minimum length validation
        showMessage("Please enter a topic with at least 3 characters.");
        return;
    }

    setLoading(true); // Set loading state to true when generation starts
    setQuotes([]); // Clear any previously displayed quotes

    try {
      // Construct the prompt for the Gemini LLM
      const prompt = `Generate 3 short, motivational quotes about the topic: "${topic}". Each quote should be on a new line and attributed to a well-known figure if possible.`;

      // Prepare chat history for the Gemini API payload
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });

      const payload = { contents: chatHistory };
      // Use the API key from the constant
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

      // Make the API call to Gemini
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Check if the response was successful (status code 2xx)
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Gemini API error response:", errorData);
        showMessage(`API Error: ${errorData.error?.message || 'Something went wrong with the API request.'}`);
        return; // Exit if response is not OK
      }

      // Parse the JSON response from the API
      const result = await response.json();

      // Check if the response contains valid candidates and content
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const generatedText = result.candidates[0].content.parts[0].text;
        // Split the generated text by newline to get individual quotes
        const newQuotes = generatedText.split('\n').filter(q => q.trim() !== '');
        if (newQuotes.length === 0) {
            showMessage("The AI generated an empty response for this topic. Please try a different topic.");
        } else {
            setQuotes(newQuotes); // Update the quotes state with generated quotes
        }
      } else {
        // Handle cases where the API response structure is unexpected
        showMessage("Failed to generate quotes. The AI response was unexpected.");
        console.error("Gemini API response structure unexpected:", result);
      }
    } catch (error) {
      // Catch any errors during the fetch operation (e.g., network issues)
      showMessage("An error occurred while generating quotes. Please check your connection or try again.");
      console.error("Error calling Gemini API:", error);
    } finally {
      setLoading(false); // Always set loading to false after the operation completes or fails
    }
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
        <div className="space-y-4"> {/* Increased space-y for better separation */}
          {/* Label for the topic input field */}
          <label htmlFor="topic-input" className="block text-sm font-medium text-gray-300">
            Enter Topic (e.g., Motivation, Success, Life):
          </label>
          {/* Input field for the topic */}
          <input
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Inspiration"
            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-gray-200"
            disabled={loading} // Disable input when loading
          />
          {/* Buttons container for better layout */}
          <div className="flex flex-col sm:flex-row gap-3"> {/* Use flexbox for buttons, responsive */}
            <button
              onClick={generateQuotes}
              className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-gray-900 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 shadow-md"
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Generating...' : 'Generate Quotes ✨'} {/* Change button text based on loading state */}
            </button>
            {/* NEW: Clear Quotes Button */}
            <button
              onClick={clearQuotes}
              className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-gray-900 bg-gray-600 text-white hover:bg-gray-700 h-10 px-4 py-2 shadow-md"
              disabled={loading} // Disable button when loading
            >
              Clear Quotes 🗑️
            </button>
          </div>
        </div>

        {/* Display Quotes Section */}
        {/* Conditionally renders loading message or quotes */}
        {loading && (
          <div className="text-center text-gray-400 mt-6">
            Generating quotes, please wait...
          </div>
        )}

        {!loading && quotes.length > 0 && (
          <div className="space-y-4 mt-6">
            <h2 className="text-xl font-semibold text-gray-200 text-center">Your Generated Quotes:</h2>
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
