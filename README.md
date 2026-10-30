
# ExpenseFlow — Expense Tracker

ExpenseFlow is a full-stack expense-tracking web application that helps users manage expenses, track budgets, analyze spending patterns, and organize recurring payments.

## Features

- Interactive dashboard with spending summaries and charts
- Add, view, edit, search, filter, and delete expenses
- Categorize expenses and add tags
- Monthly budgets with overspending alerts
- Recurring expense management
- Spending analytics and insights
- Export expenses to CSV and PDF
- User authentication and authorization
- Light mode, dark mode, and system theme
- Activity feed and expense history

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Recharts
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT and bcrypt
- **Containerization:** Docker and Docker Compose

## Prerequisites

Install the following:

- [Git](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Make sure Docker Desktop is running before starting the application.

Verify the installations:

```bash
git --version
docker --version
docker compose version
docker info
```

## Run the Application Using Docker

### 1. Clone the Repository

```bash
git clone https://github.com/sarvani-701/expense-tracker.git
cd expense-tracker
```

### 2. Build and Start the Application

```bash
docker compose up --build
```

This command builds the required images and starts the frontend, backend, and MongoDB containers.

The first build may take several minutes. Keep the terminal open while the application is running.

### 3. Access the Application

Once the containers are running, open the following URLs:

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5001 |
| MongoDB | localhost:27017 |

### 4. Load Demo Data

Open a second terminal in the project directory and run:

```bash
docker compose exec server npm run seed
```

The seed script creates demo users, sample expenses, category budgets, recurring expense templates, and activity records.

Avoid running the seed command repeatedly unless you intend to reset or regenerate the demo data.

### 5. Sign In

Use the demo credentials configured in the seed script:

```text
Email: demo@expense.app
Password: demo123
```

If you change the demo user's name or credentials in the seed script, make sure the database account and login credentials remain consistent.

## Useful Docker Commands

### Check Running Containers

```bash
docker compose ps
```

### Run the Application in the Background

```bash
docker compose up --build -d
```

### View Backend Logs

```bash
docker compose logs --tail=80 server
```

### View Frontend Logs

```bash
docker compose logs --tail=80 client
```

### Stop the Application

```bash
docker compose down
```

### Stop Containers and Delete Database Volume

**Warning:** This removes the associated Docker volumes and may permanently delete your stored MongoDB data.

```bash
docker compose down -v
```

## Troubleshooting

### Docker Is Not Running

Open Docker Desktop and wait for the Docker engine to start.

### Port Already in Use

If port `3000` or `5001` is occupied, stop the conflicting application or update the port mappings in `docker-compose.yml`.

### Login Returns Unauthorized

- Confirm that the seed command completed successfully.
- Use the credentials configured in the seed script.
- Check the backend logs for authentication errors.

### Website Cannot Connect to the Backend

Check the container status:

```bash
docker compose ps
```

Inspect the backend logs:

```bash
docker compose logs --tail=80 server
```

## Project Structure

```text
expense-tracker/
├── client/                 # React and TypeScript frontend
├── server/                 # Node.js and Express backend
│   ├── models/              # MongoDB/Mongoose models
│   ├── routes/              # API routes
│   ├── middleware/          # Authentication and authorization
│   └── utils/               # Utilities and seed script
├── docker-compose.yml       # Docker service configuration
├── package.json             # Project scripts and dependencies
└── README.md                # Project documentation
```

## Author

**Sarvani Mikkilineni**

- GitHub: [@sarvani-701](https://github.com/sarvani-701)
- LinkedIn: [sarvani-mikkilineni-b80969340](https://www.linkedin.com/in/sarvani-mikkilineni-b80969340/)

## License

MIT
