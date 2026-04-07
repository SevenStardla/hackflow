# Hackflow 🚀

**Lightweight Hackathon Platform**

Hackflow is a lightweight hackathon platform designed to simplify team formation, project submission, and leaderboard management during hackathons.

It provides a simple and intuitive interface where participants can create teams, submit project links, and view submissions in a leaderboard.

---

# 🌐 Live Demo

**Demo URL**

https://hackflow-seven.vercel.app

**Project Video**

[https://youtube.com/your-video-link](https://www.youtube.com/watch?v=TDYYms59nds)

---

# 📌 Key Features

### Hackathon Browsing

Users can explore available hackathons and view detailed information such as schedule, evaluation criteria, and prizes.

### Team Creation

Participants can create teams and introduce their project ideas while specifying roles they are looking for.

### Project Submission

Teams can submit their project by providing links to:

* Project Plan
* Website
* PDF Presentation

Each team can update their submission if needed.

### Leaderboard

All submissions are automatically aggregated and displayed in a leaderboard showing:

* Team name
* Project links
* Submission time

---

# 🏗 System Architecture

The platform is built with a simple client-side architecture.

Core data models:

## Hackathon

```
{
  slug: string
  title: string
  status: "upcoming" | "ongoing" | "ended"
  tags: string[]
}
```

## Team

```
{
  id: string
  hackathonSlug: string
  name: string
  intro: string
  lookingFor: string[]
  contact: string
  createdAt: string
}
```

## Submission

```
{
  teamId: string
  hackathonSlug: string
  plan: string
  web: string
  pdf: string
  submittedAt: string
}
```

---

# ⚙️ Tech Stack

Frontend

* Next.js (App Router)
* TypeScript
* TailwindCSS

Storage

* LocalStorage (MVP persistence)

Deployment

* Vercel

---

# 🧠 Core Implementation Details

### URL-based Tab Navigation

Tabs are controlled using URL query parameters.

Example:

```
/hackathons/aimers-8-model-lite?tab=teams
```

This approach provides:

* shareable tab links
* browser back button support
* no hydration mismatch from React state

---

### Leaderboard Aggregation

The leaderboard dynamically combines:

```
submissions + teams
```

Team names are resolved using the team ID stored in each submission.

If a team is deleted, the leaderboard gracefully falls back to **"Unknown"**.

---

### Hydration Handling

Since the application uses `localStorage`, data loading is handled carefully to avoid hydration mismatch issues in Next.js.

Strategies used include:

* client-side loading
* URL-driven UI state
* avoiding server/client rendering differences

---

# 🔄 User Flow

```
Hackathon List
      ↓
Hackathon Detail Page
      ↓
Teams Tab
      ↓
Create Team (/camp)
      ↓
Submit Project
      ↓
Leaderboard
```

---

# 📦 MVP Scope

Current version focuses on a minimal hackathon workflow:

* hackathon browsing
* team creation
* project submission
* leaderboard visualization

Future versions may include:

* authentication (GitHub / Google)
* database integration
* real-time leaderboard updates
* improved team recruitment system

---

# 📸 Demo Screens

Hackathon List
Team Creation
Submission System
Leaderboard

---

# 👨‍💻 Author

Built as a hackathon MVP project using Next.js and modern frontend architecture.

---

# ⭐ Summary

Hackflow demonstrates how a hackathon platform can be built quickly with a lightweight architecture while still supporting key features such as team formation, project submission, and leaderboard aggregation.
