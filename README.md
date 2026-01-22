# 📰 Fake News Detection System (2026 Edition)

A hybrid AI-powered web application that detects misinformation using a combination of **Local Machine Learning** (Logistic Regression) and **Real-Time Search Grounding** via Google Gemini.

## 🚀 Overview
This project provides a two-layered verification process:
1.  [cite_start]**Pattern Recognition:** A local model trained on historical data to identify common linguistic patterns of fake news[cite: 1, 2].
2.  [cite_start]**Live Verification:** Integration with the Gemini 2.0/3.0 API to cross-reference news with real-time Google Search and YouTube data.

## 🛠️ Tech Stack
* [cite_start]**Language:** Python [cite: 1, 3]
* [cite_start]**ML Libraries:** Scikit-learn, Pandas, NumPy, NLTK [cite: 3]
* [cite_start]**AI Engine:** Google GenAI (Gemini 2026 Stable) [cite: 1, 3]
* **Frontend:** Streamlit / Flask (Prototype Mode)

## 📁 Project Structure
* [cite_start]`trainmodel.py`: Preprocesses the dataset and trains the Logistic Regression model.
* [cite_start]`preprocessing.py`: Handles NLTK-based text cleaning, stemming, and stopword removal.
* `prototype.py`: The main web dashboard for user interaction.
* [cite_start]`news.csv`: The training dataset containing labeled news articles[cite: 2].
* [cite_start]`predict.py`: Core logic for generating predictions from the saved model.
graph TD
    A[User Input: Paste News Text] --> B{Preprocessing Layer}
    B -->|Clean & Stem| C[Feature Extraction: TF-IDF]
    
    subgraph Hybrid Detection Engine
    C --> D[Local ML: Logistic Regression]
    A --> E[Real-time AI: Gemini 2.5/3]
    E --> F[Google Search Grounding]
    end
    
    D --> G[Local Verdict: REAL/FAKE]
    F --> H[Live Verification Report]
    
    G & H --> I[Final Dashboard Output]
   
