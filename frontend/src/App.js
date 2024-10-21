import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:5000/api/chat/generate', { question });
      setResponse(result.data.message);  // Assuming backend returns { message: "response" }
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Failed to get a response');
    }
  };

  return (
    <div className="App">
      <h1>Multibot Insights</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..."
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;

