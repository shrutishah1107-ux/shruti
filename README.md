# Shruti Shah - Personal Portfolio Website

A modern, responsive, and professional personal portfolio website for **Shruti Shah**, a Second-Year Artificial Intelligence & Machine Learning (AIML) Engineering student at **RCPIT (R. C. Patel Institute of Technology)** aspiring to become an **AI/ML Engineer**.

---

## 🚀 How to Run the Website

### Method 1: Direct in Your Browser (Instant)
1. Open File Explorer and navigate to:
   `C:\Users\shrut\.gemini\antigravity\scratch\portfolio`
2. Double-click **`index.html`** to open it immediately in any browser (Chrome, Edge, Firefox, Brave, Safari).

### Method 2: Via Local Web Server (Optional)
If you want to run a local server:
1. Open PowerShell in the project directory:
   ```powershell
   cd "C:\Users\shrut\.gemini\antigravity\scratch\portfolio"
   python -m http.server 5500
   ```
2. Open your browser and navigate to:
   `http://localhost:5500`

---

## 📁 File Structure

```
portfolio/
├── index.html       # Semantic HTML5 markup with all sections & editable placeholders
├── styles.css       # Dark mode theme (black background + purple & blue accents)
├── script.js        # Responsive mobile menu, scrollspy, contact validation & resume modal
└── README.md        # Documentation and running instructions
```

---

## 🎨 Design & Content Highlights

- **Dark Theme with Purple & Blue Glow**: Deep pure black background (`#06080e`) with electric blue and purple radial glow accents.
- **Hero Section**:
  - Greeting: *"Hi, I'm Shruti Shah"*
  - Subtitle: *"Aspiring AI/ML Engineer"*
  - Badge: *"Second-Year AIML Student • RCPIT"*
- **Clean About Me & Visual Profile Card**:
  - Replaced the previous Python code block with an abstract AI neural network graphic, glowing student avatar, and focus badges.
  - Zero Python source code displayed as web content.
- **Accurate, Non-Exaggerated Skills**:
  - Python (Beginner / Core Fundamentals)
  - HTML5 & CSS3 (Foundational / Responsive Layouts)
  - JavaScript (Beginner / DOM Interactivity)
  - AI & Machine Learning Fundamentals (Academic Coursework)
  - Frameworks & Tools: Streamlit, SQLite, Git & GitHub, VS Code
- **Featured Project**:
  - **Smart Village Resource Sharing Portal**: Built using **Python**, **Streamlit**, and **SQLite**. Detailed highlights on resource listings, relational database integration, and community impact.
- **Education Section**:
  - B.Tech in Artificial Intelligence and Machine Learning (AIML)
  - R. C. Patel Institute of Technology (RCPIT), Shirpur
  - Second Year (2024 - Present)
  - Key Coursework: Data Structures & Algorithms, OOP with Python, AI Fundamentals, DBMS, Mathematics.
- **Editable Contact Placeholders**:
  - Direct Email: `your.email@example.com`
  - LinkedIn: `https://linkedin.com/in/your-profile`
  - GitHub: `https://github.com/your-username`
  - Working contact form with real-time validation and toast notification.
- **Downloadable Resume**:
  - Includes a dedicated resume button in the navbar, hero, and modal.
  - Simply drop your `resume.pdf` into this folder (`C:\Users\shrut\.gemini\antigravity\scratch\portfolio\resume.pdf`) and it downloads automatically!

---

## 🖼️ How to Add Your Profile Photo

Your portfolio includes a vector avatar graphic (`profile.svg`) by default.
To display your own real picture:
1. Copy your photo to this folder:
   `C:\Users\shrut\.gemini\antigravity\scratch\portfolio\`
2. Name the file **`profile.jpg`** (or `profile.png`).
3. Refresh your browser — your photo will automatically display with the glowing animated border!

---

## ✏️ Quick Customization Checklist

In [`index.html`](index.html), search for `EDIT HERE` comments to customize:
1. **Profile Photo**: Place your `profile.jpg` in this folder.
2. **GitHub Profile**: Search `your-username` and replace with your GitHub handle.
3. **LinkedIn Profile**: Search `your-profile` and replace with your LinkedIn URL.
4. **Email**: Search `your.email@example.com` and replace with your actual email.
5. **Resume**: Place your file as `resume.pdf` in this folder.
