// Terra Chatbot Loader
(function() {
  // Create container for chatbot
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'terra-chatbot-container';
  document.body.appendChild(chatbotContainer);
  
  // Load Font Awesome
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
  }
  
  // Load CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = '/path/to/terra-chatbot.css'; // Update with your actual path
  document.head.appendChild(cssLink);
  
  // Load JS
  const script = document.createElement('script');
  script.src = '/path/to/terra-chatbot.js'; // Update with your actual path
  script.onload = function() {
    // Initialize chatbot after script is loaded
    if (typeof TerraChatbot !== 'undefined') {
      new TerraChatbot('terra-chatbot-container');
    } else {
      console.error('TerraChatbot is not defined. Ensure the script is loaded correctly.');
    }
  };
  document.body.appendChild(script);
})();