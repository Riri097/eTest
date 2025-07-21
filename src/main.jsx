import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
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
import Support from "./Component/Layout/Support.jsx";
import Settings from "./Component/Layout/Settings.jsx";
import TutorialPage from "./Pages/TutorialPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "features", element: <FeaturePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "guide", element: <TutorialPage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },

      {
        path: "",
        element: <Auth />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "exam", element: <ExamInput/> },
          { path: "quiz", element: <Quiz/> },
          { path: "tutorial", element: <Tutorial/> },
          { path: "profile", element: <Profile/> },
          { path: "courses", element: <Courses/> },
          { path: "results", element: <Results/> },
          { path: "support", element: <Support/> },
          { path: "settings", element: <Settings/> },
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
