# 🗺️ SafeRoute: Smart Safety Navigation System

**SafeRoute** is a decoupled full-stack application designed to provide users with real-time safety visualizations of urban areas. By utilizing a custom **Weighted Scoring Algorithm**, the system evaluates environmental factors to generate a hyper-local safety score, helping users make informed decisions about their travel routes.

---

## 🚀 Key Features
* **Interactive Map Overlay:** Integration with Leaflet.js for dynamic visualization of Kolkata's safety zones.
* **Weighted Safety Algorithm:** A backend logic engine that calculates scores based on:
    * **50% Lighting Levels** (Street illumination)
    * **30% Police Proximity** (Emergency response availability)
    * **20% Crime History** (Historical data trends)
* **Decoupled Architecture:** Separate React frontend and Spring Boot backend for independent scalability.
* **RESTful API:** Clean API endpoints for data exchange via JSON.

---

## 🛠️ Tech Stack

### **Frontend**
* **React.js**: Functional components and Hooks (`useState`, `useEffect`).
* **Leaflet.js**: Open-source JavaScript library for interactive maps.
* **React-Leaflet**: React components for Leaflet maps.
* **CSS3**: Custom styling for responsive UI overlays.

### **Backend**
* **Java (JDK 17/21)**: Core programming language.
* **Spring Boot**: REST API development and dependency injection.
* **Maven**: Project management and build automation.

### **Data & Deployment**
* **GitHub**: Version control.
* **Vercel**: Cloud hosting for the React frontend.
* **Postman**: API testing and documentation.

---

## 📂 Project Structure
```text
SafeRoute/
├── saferoute-ui/           # React Frontend
│   ├── src/
│   │   ├── App.js         # Main logic & API Fetch
│   │   └── App.css        # Map & UI styling
│   └── public/            # index.html (Leaflet CDN)
└── saferoute-backend/      # Spring Boot Backend
    ├── src/main/java/
    │   └── com.nida.saferoute/
    │       ├── SafetyController.java  # REST Endpoints
    │       └── SafetyService.java     # Weighted Algorithm Logic
    └── pom.xml             # Maven Dependencies

## ⚙️ Future Roadmap
Database Integration: Migration to MongoDB Geospatial (2dsphere indexing) for coordinate-based searching.

Live GPS Tracking: Capturing real-time user location via the browser's Geolocation API.

Community Reporting: Allowing users to "crowdsource" safety updates (e.g., reporting a broken streetlight).
<img width="912" height="810" alt="Screenshot 2026-04-07 211456" src="https://github.com/user-attachments/assets/20d626a2-a88c-422b-8bf4-8e31868e74da" />
