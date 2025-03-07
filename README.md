# Vue Chatbot

A smart and interactive chatbot built using Vue.js. This chatbot provides automated responses and engages users in a conversational experience.

## 🚀 Features
- 🤖 AI-powered responses
- 🎨 User-friendly interface
- 📜 Vue.js framework
- ⚡ Fast and lightweight
- 🌍 Can be deployed easily on Surge or any static hosting service

## 🛠️ Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/)
- Vue CLI (if not installed, run `yarn global add @vue/cli`)


### Install Dependencies
```sh
yarn install
```

## 🔧 Usage

### Start Development Server
```sh
yarn serve
```
This will start the Vue development server. Open `http://localhost:1234` to see your chatbot in action.

### Build for Production
```sh
yarn build
```
This will generate optimized production files in the `dist/` directory.

## 🚀 Deployment

### Deploying to Surge
```sh
yarn global add surge  # Install Surge globally
cd dist                 # Navigate to the build folder
surge                    # Deploy to Surge
```
Follow the prompts and enter your preferred domain name.

If updating an existing deployment, run:
```sh
surge --domain your-project.surge.sh
```

## 📂 Project Structure
```
vue-chatbot/
├── src/
│   ├── components/  # Vue components (Chatbot, UI elements)
│   ├── assets/      # Images, styles, etc.
│   ├── App.vue      # Main app component
│   ├── main.js      # Vue entry file
├── public/          # Static files (index.html)
├── dist/            # Built files (after `yarn build`)
├── package.json     # Project dependencies
├── README.md        # This file
```

## 🤝 Contributing
Feel free to contribute to this project! Fork it and submit a pull request.

## 📜 License
This project is licensed under the MIT License.

---
Made with ❤️ using Vue.js!

