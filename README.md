# Task Tracking System

## Setup
1. Clone repo
2. Run `npm install`
3. Add MongoDB Atlas connection string in `db.js`
4. Run `node index.js`

## API Endpoints

### Auth
- `POST /api/auth/register` → Register user
- `POST /api/auth/login` → Login and get JWT

### Tasks
- `POST /api/tasks` → Create task
- `GET /api/tasks` → Get all tasks
- `GET /api/tasks/:id` → Get single task (with comments + attachments)
- `PUT /api/tasks/:id` → Update task
- `DELETE /api/tasks/:id` → Delete task
- `POST /api/tasks/:id/comment` → Add comment
- `POST /api/tasks/:id/attachment` → Upload attachment

### Teams
- `POST /api/teams` → Create team
- `POST /api/teams/:id/join` → Join team
- `POST /api/teams/:id/add-member` → Add member
