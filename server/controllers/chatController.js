exports.generateChatResponses = (req, res) => {
    const userInput = req.body.question;  // Extract user input
    // Placeholder response for now
    res.json({
      message: "Chatbot responses will appear here",
      input: userInput
    });
  };
  