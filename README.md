# Campus Notification System (AffordMed Evaluation Project)

This project is a campus notification platform developed as part of the AffordMed Campus Hiring Evaluation. It includes backend logic for priority computation and a React frontend for displaying notifications in a structured UI.

---

## 📌 Repository Structure

```
RA2311003020475/
│
├── priority_inbox.js
├── notification_system_design.md
├── logging_middleware/
├── notification_app_be/
├── notification_app_fe/
├── screenshots/
│   ├── stage1_output.png
│   ├── priority_ui.png
│   ├── all_notifications.png
│   └── filter_ui.png
```

---

## 🚀 Features

### 🧠 Stage 1: Priority Inbox (Backend Logic)

- Fetch notifications from secured API
- JWT authentication using `/auth`
- Priority-based sorting:
  - Placement > Result > Event
- Secondary sorting by timestamp (latest first)
- Extract Top 10 notifications efficiently

---

### 🎨 Stage 2: Frontend (React App)

- Built using React (Vite)
- Two main views:
  - Priority Inbox
  - All Notifications
- Filtering by type:
  - Placement
  - Result
  - Event
- Read / Unread distinction
- Clean card-based responsive UI

---

## 🧠 Priority Algorithm

```
Placement → 3
Result    → 2
Event     → 1
```

Sorting logic:
1. Higher priority first
2. If equal → latest timestamp first

---

## 🔐 Authentication Flow

1. Register using client credentials
2. Get JWT token from `/auth`
3. Use token in API requests:

```
Authorization: Bearer <access_token>
```

---

## 🛠️ Tech Stack

### Backend
- Node.js
- JavaScript (ES6)

### Frontend
- React (Vite)
- Axios
- JavaScript
- CSS

---

## ▶️ How to Run

### Clone Repo

```bash
git clone <repo-link>
cd RA2311003020475
```

---

### Run Stage 1

```bash
node priority_inbox.js
```

---

### Run Frontend

```bash
cd notification_app_fe
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📊 System Design

Detailed explanation is available in:

```
notification_system_design.md
```

Includes:
- API flow
- Priority algorithm
- Sorting approach
- Scalability improvements
- Architecture design

---

## ⚠️ Notes

- API is protected (JWT required)
- No mock data used
- All data fetched live from API
- Screenshots must be from actual execution

---

## 👨‍💻 Author

AffordMed Campus Hiring Evaluation Submission  
Roll Number: RA2311003020475
