// components/Chatbot.tsx

import { useState, useEffect, useRef } from "react";
import { FaComments } from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm here to help you navigate my portfolio. What would you like to know?" },
  ]);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const messageInput = (e.target as HTMLFormElement).elements.namedItem("message") as HTMLInputElement;
    const newMessage = messageInput.value.trim();

    if (newMessage) {
      setMessages([...messages, { sender: "user", text: newMessage }]);
      messageInput.value = ""; // Clear the input field

      try {
        // Send the user's message to the backend API
        const response = await fetch('http://127.0.0.1:8000/api/chat/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: newMessage }),
          });
          

        const data = await response.json();

        // Add the bot's response to the messages
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: data.message },
        ]);
      } catch (error) {
        // Handle any errors
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, something went wrong. Please try again." },
        ]);
      }
    }
  };

  // Scroll to the bottom of the messages area whenever a new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Chat Icon Button */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <FaComments size={24} />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 mt-2 w-96 h-[30rem] rounded-lg shadow-lg flex flex-col ">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Chat with Me</h3>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto mb-4 p-2 space-y-2 scroll scroll-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-xs text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  }`}
                  style={{
                    alignSelf:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="flex items-center">
            <input
              type="text"
              name="message"
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 text-sm"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <IoSend size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
