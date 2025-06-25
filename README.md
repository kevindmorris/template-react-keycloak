# 🚀 Template React Keycloak App

A full-stack application template using:

- **React + Vite** (TypeScript)
- **Keycloak** for authentication and user management
- **PostgreSQL** as Keycloak’s database
- **NGINX** for static hosting and reverse proxying
- **Docker** for containerization

## 📦 Features

- 🔐 Authentication and user management with Keycloak
- 📃 Realm import support
- 📊 Admin dashboard via Portainer
- 🧑‍💻 Frontend built with React, Vite, and TypeScript
- 📦 Dockerized with multi-stage builds

## 🛠 Prerequisites

- [Docker](https://docs.docker.com/get-docker/) & Docker Compose installed

## 🧪 Getting Started

### 1. 📁 Project Structure

```
├── Dockerfile             # Multi-stage build for frontend
├── docker-compose.yml     # Defines the full stack
├── nginx/
│   └── nginx.conf         # NGINX reverse proxy and routing
├── realm-export.json      # Keycloak realm config
├── src/                   # React frontend source
└── ...
```

### 2. 🚀 Spin Up the Stack

```bash
docker compose up --build -d
```

This will:

- Build and run the React UI
- Start Keycloak with the template realm (from `realm-export.json`)
- Set up PostgreSQL for Keycloak persistence
- Start Portainer for managing containers

### 3. 🔐 Access Keycloak Admin Console

📍 URL: http://localhost:8080

**Login credentials:**

- Username: `admin`
- Password: `admin`

After login, navigate to http://localhost:8080/admin to manage users and realms.

### 4. 🌐 Access the Frontend App

📍 URL: http://localhost:3000

You can:

- Register new users (if allowed by the realm config)
- Log in with Keycloak

### 5. ⚙️ Manage with Portainer

📍 URL: http://localhost:9000

### 6. 🧪 Run in Dev Mode

**Install dependencies**:

```bash
npm install
```

**Start the dev server**:

```bash
npm run dev
```

**Access the app**:

📍 http://localhost:5173

**Keycloak must still be running via Docker Compose**:

```
docker compose up keycloak postgres
```

### 🧼 Useful Commands

| Command                        | Description                                   |
| ------------------------------ | --------------------------------------------- |
| `docker compose up --build -d` | Start all services in the background          |
| `docker compose down -v`       | Stop and remove containers, networks, volumes |
| `docker logs keycloak`         | View logs for the Keycloak container          |
| `docker ps`                    | List running containers                       |

### 🧾 Realm Import Note

Ensure realm-export.json contains the correct configuration. It is imported only on first startup.

To force re-import:

```bash
docker compose down -v
docker compose up --build -d
```
