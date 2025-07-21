import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Import Tailwind CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Signup from "./Component/Auth/Signup.jsx";
import Login from "./Component/Auth/Login.jsx";
import FeaturePage from "./Pages/FeaturePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import Auth from "./Auth.jsx";
import Dashboard from "./Component/Layout/Dashboard.jsx";
import ExamInput from "./Component/Layout/ExamInput.jsx";
import Quiz from "./Component/Layout/Quiz.jsx";
import Tutorial from "./Component/Layout/Tutorial.jsx";
import Profile from "./Component/Layout/Profile.jsx";
import Courses from "./Component/Layout/Courses.jsx";
import Results from "./Component/Layout/Results.jsx";
import TutorialPage from "./Pages/TutorialPage.jsx";

// import PlanList from "./Component/Layout/PlanList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // contains Navbar + Footer
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "features", element: <FeaturePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "guide", element: <TutorialPage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },

      {
        path: "", // blank path, acts as wrapper for protected routes
        element: <Auth />, // this gets context from App Outlet!
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "exam", element: <ExamInput/> },
          { path: "quiz", element: <Quiz/> },
          { path: "tutorial", element: <Tutorial/> },
          { path: "profile", element: <Profile/> },
          { path: "courses", element: <Courses/> },
          { path: "results", element: <Results/> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
