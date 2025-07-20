import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Component/Common/Navbar";
import Sidebar from "./Component/Common/Sidebar";
import Footer from "./Component/Common/Footer";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import { ToastContainer } from "react-toastify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [modalType, setModalType] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const openLoginModal = () => setModalType("login");
  const openSignupModal = () => setModalType("signup");
  const closeModal = () => setModalType(null);
  const toggleModals = () => {
    setModalType((prev) => (prev === "login" ? "signup" : "login"));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const username = localStorage.getItem("username") || "User";

  return (
    <>
      <div className={`transition-filter duration-300}`}>
        <Navbar
          isAuthenticated={isAuthenticated}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
          handleLogout={handleLogout}
        />

        <div className="flex min-h-[calc(100vh-4rem)]">
          {isAuthenticated && (
            <Sidebar username={username} handleLogout={handleLogout} />
          )}

          <main className={`flex-1${isAuthenticated ? "ml-64" : ""}`}>
            <Outlet
              context={{
                isAuthenticated,
                setIsAuthenticated,
                openLoginModal,
                setModalType,
                openSignupModal,
              }}
            />
          </main>
        </div>

        <Footer />
      </div>

      {modalType === "login"  && !localStorage.getItem("token") && (
        <Login
          onClose={closeModal}
          setIsAuthenticated={setIsAuthenticated}
          toggleModals={toggleModals}
        />
      )}

      {modalType === "signup" && (
        <Signup
          onClose={closeModal}
          setIsAuthenticated={setIsAuthenticated}
          toggleModals={toggleModals}
        />
      )}

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
