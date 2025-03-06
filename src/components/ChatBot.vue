<template>
    <div class="container my-5">
      <h2 class="text-center text-info">AI Chatbot</h2>
  
      <!-- Chat Box -->
      <div class="chat-box border p-3">
        <div v-for="(msg, index) in messages" :key="index" class="mb-2">
          <strong v-if="msg.sender === 'user'" class="text-primary">You: </strong>
          <strong v-else class="text-danger">Bot: </strong>
          <span>{{ msg.text }}</span>
        </div>
      </div>
  
      <!-- Input & Button Wrapper -->
      <div class="input-container">
        <input 
          v-model="userInput" 
          class="form-control" 
          placeholder="Ask me anything..." 
          @keyup.enter="sendMessage"
        />
        <button class="btn btn-success" @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        userInput: "",
        messages: [],
      };
    },
    methods: {
      async sendMessage() {
        if (this.userInput.trim() === "") return;
        this.messages.push({ sender: "user", text: this.userInput });
  
        try {
          console.log("API Key:", import.meta.env.PARCEL_OPENAI_API_KEY);
  
          const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: this.userInput }],
            },
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.PARCEL_OPENAI_API_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );
  
          const botReply = response.data.choices[0].message.content;
          this.messages.push({ sender: "bot", text: botReply });
        } catch (error) {
          console.error("OpenAI API Error:", error.response ? error.response.data : error.message);
          this.messages.push({ sender: "bot", text: "Sorry, I couldn't fetch a response." });
        }
  
        this.userInput = "";
      },
    },
  };
  </script>
  
  <style>
  .chat-box {
    height: 300px;
    overflow-y: scroll;
    border-radius: 5px;
    background: #f8f9fa;
  }
  .input-container {
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  }
  .input-container input {
    width: 60%; 
    max-width: 400px;
  }
  .input-container button {
    white-space: nowrap;
  }
  </style>
  