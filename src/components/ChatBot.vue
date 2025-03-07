<template>
    <div class="container my-5">
      <h2 class="text-center text-info">AI Chatbot</h2>
  
      <!-- Chat Box -->
      <div class="chat-box border p-3">
        <div v-for="(msg, index) in messages" :key="index" class="mb-2">
          <strong v-if="msg.sender === 'user'" class="text-primary">You: </strong>
          <strong v-else class="text-danger">Bot: </strong>
          <span v-if="!msg.image">{{ msg.text }}</span>
          <img v-if="msg.image" :src="msg.image" alt="Requested Image" class="chat-image" />
        </div>
      </div>
  
      <!-- Centered Input & Button -->
      <div class="input-wrapper">
        <button class="mic-button" @click="startSpeechRecognition">
          🎤
        </button>
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
  
          if (this.userInput.toLowerCase().includes("buy a car")) {
            const imageUrl = await this.fetchCarImage(this.userInput);
            this.messages.push({ sender: "bot", text: botReply, image: imageUrl });
          } else {
            this.messages.push({ sender: "bot", text: botReply });
          }
        } catch (error) {
          console.error("OpenAI API Error:", error);
          this.messages.push({ sender: "bot", text: "Sorry, I couldn't fetch a response." });
        }
  
        this.userInput = "";
      },
  
      async fetchCarImage(query) {
        try {
          const unsplashResponse = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
              query: query,
              client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
              per_page: 1,
            },
          });
  
          return unsplashResponse.data.results[0]?.urls.small || "";
        } catch (error) {
          console.error("Unsplash API Error:", error);
          return "";
        }
      },
  
      startSpeechRecognition() {
        if (!("webkitSpeechRecognition" in window)) {
          alert("Speech recognition not supported in this browser.");
          return;
        }
  
        const recognition = new webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
  
        recognition.onresult = (event) => {
          this.userInput = event.results[0][0].transcript;
        };
  
        recognition.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
        };
  
        recognition.start();
      },
    },
  };
  </script>
  
  <style>
  .chat-box {
  height: 300px;
  overflow-y: auto;
  border-radius: 5px;
  background: #f8f9fa;
  padding: 15px;
  margin-bottom: 100px; 
}

.input-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 50px; 
  left: 0;
  right: 0;
  width: 100%;
  padding: 15px;
  background: transparent;
}
  
  .input-wrapper input {
    width: 50%;
    max-width: 400px;
  }
  
  .mic-button {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  .chat-image {
    display: block;
    max-width: 100%;
    height: auto;
    margin-top: 5px;
    border-radius: 5px;
  }
  
  @media (max-width: 768px) {
    .input-wrapper {
      bottom: 10px;
    }
  
    .input-wrapper input {
      width: 80%;
    }
  
    .input-wrapper button {
      white-space: nowrap;
    }
  }
  </style>
  