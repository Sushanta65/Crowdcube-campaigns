# Crowdfunding Application  

### 🌟 **Project Overview**  
This is a crowdfunding platform designed to help users raise funds for their projects and causes. The application features a user-friendly interface, secure payment methods, and easy project management tools.  

**Live Link:** [Visit Crowdfunding Application]([https://your-live-link.com](https://crowdcube-bfdbf.web.app/)])  
**Technology Stack:** React, Node.js, Express, MongoDB, Tailwind CSS  

---

### 🖼️ **Screenshot**  
![Crowdfunding Application Screenshot]([https://via.placeholder.com/800x400](https://i.ibb.co.com/gJJ1x4F/crowdcube.png)])  
(*Replace the placeholder image link with an actual screenshot of your app*)  

---

### 🚀 **Main Technologies Used**  
- **Frontend:** React, Tailwind CSS, DaisyUI  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** Firebase Authentication  
- **Payment Integration:** Stripe  

---

### ✨ **Main Features**  
- User registration and login (secure authentication).  
- Create, view, and manage fundraising campaigns.  
- Integrated payment gateway for donations.  
- Campaign progress tracking with real-time updates.  
- Responsive design for seamless use across devices.  

---

### 📦 **Dependencies**  

#### Frontend Dependencies:  
- `react`  
- `react-dom`  
- `react-router-dom`  
- `tailwindcss`  
- `daisyui`  
- `axios`  

#### Backend Dependencies:  
- `express`  
- `mongoose`  
- `dotenv`  
- `cors`  
- `stripe`  
- `jsonwebtoken`  
- `bcryptjs`  

---

### 🛠️ **How to Run the Project Locally**  

#### Step 1: Clone the Repository  
```bash
git clone https://github.com/your-username/crowdfunding-app.git

```
#### Step 2: Navigate to the Project Directory  
After cloning the repository, move into the project directory:  
```bash
cd crowdfunding-app

```
Step 3: Install Dependencies
Frontend Dependencies
Navigate to the frontend folder and install the required packages:

```bash
Copy code
cd frontend
npm install

```
Backend Dependencies
Navigate to the backend folder and install the required packages:

```bash
bash
Copy code
cd ../backend
npm install

```
Step 4: Set Up Environment Variables
Navigate to the backend directory:
```bash
bash
Copy code
cd backend
```
Create a .env file in the backend directory and add the following environment variables:
```bash
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Replace the placeholders (your_mongodb_connection_string, your_jwt_secret, and your_stripe_secret_key) with your actual configuration values.

```
Step 5: Start the Servers
Start the Backend Server
Ensure you are inside the backend folder:
```bash
Copy code
cd backend
```
Start the backend server using the following command:
```bash
Copy code
npm start
```
Start the Frontend Development Server
Open a new terminal window.
Navigate to the frontend folder:
```bash
Copy code
cd crowdfunding-app/frontend
```
Start the frontend server using the following command:
```bash
Copy code
npm start
```

Step 6: Access the Application
Once both the backend and frontend servers are running, open your browser and visit:

Copy code
http://localhost:3000
This will load the application locally on your machine.

