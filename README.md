# 🔍 AI Summarizer Chrome Extension

**AI Summarizer** is a lightweight and intuitive Chrome extension that generates instant summaries of any webpage you're browsing. It allows you to choose between **bullet points**, **short**, and **detailed** summaries — all powered by AI.



## 🚀 Features

- 🧠 Summarizes **any active webpage** you're on
- 📌 Offers multiple summary types:
  - Bullet Points
  - Short Summary
  - Detailed Summary
- 🪄 Easy-to-use popup interface
- 🔐 Secure: You use your own Gemini API key



## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/janvi-t11/AI_Summarizer.git
   cd AI_Summarizer
   ```
2. **Install the extension locally:**

   * Go to `chrome://extensions/`
   * Enable **Developer mode**
   * Click **Load unpacked**
   * Select the project folder


## 🛠️ How to Use

1. Click the extension icon in your Chrome toolbar.
2. Paste your **Gemini API Key** (Get one from [Google AI Studio](https://makersuite.google.com/app/apikey)).
3. Choose the type of summary you want.
4. View the summary instantly for the active tab.



## 🔑 Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create and copy your API key
4. Paste it in the extension settings



## 📁 Project Structure


AI_Summarizer/
│
├── manifest.json       # Chrome extension config
├── background.js       # Runs in the background
├── content.js          # Communicates with webpage
├── popup.html          # UI for popup
├── popup.js            # Popup logic
├── options.html        # API key input UI
├── options.js          # API key storage logic
└── icon.png            # Extension icon


## 📌 Todo / Future Features

* 🔄 Auto-detect article content
* 🌐 Support for multiple languages
* 💬 Voice summary option
