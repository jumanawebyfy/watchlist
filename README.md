#  Personal Watchlist Tracker

A sleek, lightweight, full-CRUD (Create, Read, Update, Delete) web application built to help users organize and track their favorite Movies and TV Shows. This project showcases declarative state management, DOM manipulation, and browser-based persistent storage using pure vanilla JavaScript.

##  Live Demo
🔗 **https://watchlist-eight-gold.vercel.app/**

---

##  Features

- **Create (Add Items):** Seamlessly add new titles to the list while categorizing them as either a "Movie" or "TV Show."
- **Read (Dynamic Rendering):** Instantly displays your saved list on load, complete with individual content type badges.
- **Update (Toggle Status):** Toggle items between "Watched" and "Unwatch" states with visual line-through styling feedback.
- **Delete (Remove Items):** Instantly remove any title from your tracking list with single-click precision.
- **Filter Navigation:** Dynamically filter your view between "All," "Movies," or "TV Shows" without modifying the underlying data.
- **Persistent Memory:** Integrated browser local storage ensures your personalized list is saved even after closing or refreshing the tab.

---

##  Tech Stack & Methods Used

- **Frontend Structure:** HTML5
- **Styling & Layout:** CSS3 (Custom variables, responsive layout containers, and cross-out effects)
- **Application Logic:** JavaScript (ES6+)
- **Built-in JS Tools & Methods Used:**
  - `document.getElementById()`, `document.createElement()`, `.appendChild()` for dynamic DOM updates.
  - `.addEventListener()` for click event listening.
  - `JSON.stringify()` and `JSON.parse()` to safely convert data arrays.
  - `localStorage.setItem()` and `localStorage.getItem()` for browser persistence.
  - High-order array methods: `.forEach()`, `.map()`, and `.filter()` for clean data flow.

---

##  Project Structure

```text
├── index.html       # Application layout and input containers
├── style.css        # Responsive styling and active/completed states
├── script.js       # Core application brain & state management
└── README.md        # Documentation
