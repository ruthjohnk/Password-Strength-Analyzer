# 🔐 Password Strength Analyzer

A modern browser-based **Password Strength Analyzer** built to demonstrate basic cybersecurity concepts through an interactive web application.

The application evaluates password complexity in real time and provides instant security feedback while keeping password processing entirely **local in the user's browser**.

## 🌐 Live Demo

Coming soon — GitHub Pages deployment.

## ✨ Features

- 🔴 **Weak / Medium / Strong** password classification
- 📊 Real-time security score
- ✅ Live password requirement checking
- 🔤 Uppercase letter detection
- 🔡 Lowercase letter detection
- 🔢 Number detection
- 🔣 Special character detection
- 📏 8+ and 12+ character checks
- ⚠️ Detection of commonly used passwords
- 💡 Real-time security suggestions
- 👁️ Show/hide password functionality
- 🔒 Local browser-based password analysis
- 📱 Responsive cybersecurity-themed interface

## 🛡️ Common Password Detection

The analyzer checks the entered password against a locally stored list of commonly used passwords.

If a password is found in the list, the application displays a warning:

> ⚠️ Commonly Used Password

This helps demonstrate why password complexity alone is not enough. A password may satisfy several complexity requirements and still be unsafe if it is widely used.

## 🔐 Privacy

The password is processed directly inside the browser.

**The application does not send or store the entered password on a server.**

This project is designed as an educational demonstration of client-side password analysis.

## 🧠 How It Works

The analyzer evaluates the password against several conditions:

```text
                 PASSWORD
                     │
                     ▼
          ┌─────────────────────┐
          │   Password Input    │
          └──────────┬──────────┘
                     │
                     ▼
        ┌──────────────────────────┐
        │   Security Requirements  │
        └────────────┬─────────────┘
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   Length        Characters     Complexity
       │             │             │
       ▼             ▼             ▼
    8 / 12+      Uppercase      Number
                 Lowercase      Special
                     │
                     ▼
             ┌───────────────┐
             │ Common Check  │
             └───────┬───────┘
                     │
                     ▼
              SECURITY SCORE
                     │
                     ▼
           WEAK / MEDIUM / STRONG
```

## 📊 Security Scoring

The application evaluates six basic conditions:

| Requirement | Score |
|---|---:|
| 8+ characters | +1 |
| Uppercase letter | +1 |
| Lowercase letter | +1 |
| Number | +1 |
| Special character | +1 |
| 12+ characters | +1 |

### Strength Levels

| Score | Classification |
|---:|---|
| 0–2 | 🔴 Weak |
| 3–4 | 🟡 Medium |
| 5–6 | 🟢 Strong |

> **Note:** This scoring system is an educational simplification and should not be treated as a complete password-security or entropy assessment.

## 🛠️ Technologies Used

- **HTML5** — Website structure
- **CSS3** — UI design, glassmorphism and responsive layout
- **JavaScript** — Password analysis and real-time interaction
- **Regular Expressions** — Password requirement detection
- **GitHub** — Version control and project hosting

## 📁 Project Structure

```text
Password-Strength-Analyzer/
│
├── index.html
├── style.css
├── script.js
├── common-passwords.js
└── README.md
```

## 🚀 How to Run

### Option 1 — Run Locally

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`.
4. Enter a test password.
5. The analyzer will provide real-time feedback.

### Option 2 — GitHub Pages

The project can also be deployed using **GitHub Pages** and accessed directly through a web browser.

## 🎯 Learning Objectives

This project was created to practice:

- Client-side JavaScript
- DOM manipulation
- Regular expressions
- Event handling
- Password security concepts
- Common-password detection
- Responsive web design
- GitHub project management
- Basic cybersecurity application development

## 🔮 Future Improvements

Possible future versions could include:

- Password entropy estimation
- Estimated crack-time calculation
- Larger breach/common-password datasets
- Passphrase recommendations
- Password generator
- Accessibility improvements
- More advanced password-strength algorithms

## ⚠️ Disclaimer

This project is intended for **educational purposes**.

A password classified as "Strong" by this application is not automatically secure against every real-world attack. Password security depends on additional factors such as password uniqueness, length, breach exposure, storage practices, and authentication controls.

## 👩‍💻 Author

**RJK**

Cybersecurity student building practical projects to explore **defensive security, web development, and cybersecurity engineering**.

---

⭐ If you found this project useful, consider giving the repository a star!
