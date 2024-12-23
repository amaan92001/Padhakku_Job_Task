# Padhakku Job Listing Web Application

This is a Job Listing Web Application for Padhakku Peek a Book Private Limited. The application allows users to view job opportunities, filter them by location, and view detailed job information dynamically.

---

## Deployed Links

- **Frontend**: [Padhakku Job Listing Web Application](https://padhakku-job-task.vercel.app)
- **Backend**: [Padhakku Backend API](https://padhakku-job-listing.onrender.com)

---

## Features

### Frontend Features:
- **Job Listing**: Displays a list of jobs on the left-hand side.
- **Dynamic Job Details**: Clicking on a job displays its details (e.g., Title, Location, Description) on the right-hand side.
- **Location Search**: Users can search for jobs by location, and the job list updates dynamically.

**Fields Displayed on the Frontend:**
- Job Title
- Location
- Description
- Employment Type
- Posted Date
- Source
- Experience Range

### Backend Features:
- **Data Source**: JSON data imported into a MongoDB database.
- **API Endpoints**:
  - Fetch all job data.
  - Filter jobs based on the location provided in the query.

---

## Tech Stack

### Frontend:
- **Framework**: React.js
- **Styling**: Tailwind CSS

### Backend:
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Language**: JavaScript (Node.js)

### Deployment:
- **Frontend**: Vercel
- **Backend**: Render

---

## Running the Project Locally

### Prerequisites
1. Node.js installed on your system.
2. MongoDB instance or cluster.

### Steps to Run Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/amaan92001/Padhakku_Job_Task.git
   cd Padhakku_Job_Task/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following content:
   ```env
   PORT=<Your Port>
   MongoUrl=<Your MongoDB Connection String>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Backend API will be running at `http://localhost:5000`.

### Steps to Run Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Frontend will be running at `http://localhost:3000`.

---

## Assumptions & Challenges
- **Assumptions**:
  - JSON data structure matches the MongoDB schema.
  - Deployment platforms (Vercel, Render) support the configurations without issues.

- **Challenges**:
  - Ensuring seamless dynamic updates between the job list and job details.
  - Implementing efficient pagination and filtering on the frontend.

---

## Future Improvements
- Add sorting options by Location.
- Enhance UI/UX for a more engaging user experience.

---

## Contact
**Amaan Patel**   
Visit us at: [Linkedin](https://www.linkedin.com/in/amaan-patel-a12b92275/)  
Reach us at: [amaanpatel500@gmail.com]

---

Made with ❤️ by Amaan Patel

