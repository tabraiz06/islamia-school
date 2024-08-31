import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPannel from "./Components/Admin/AdminPannel";
import NewAdmin from "./Components/Admin/NewAdmin";
import Counter from "./Components/Assign";

import Login from "./Components/Login/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ResultsPage from "./pages/ResultsPage";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import AdmissionForm from "./Components/AdmissionForm";
import AdminViewAdmissions from "./Components/AdminViewAdmissions ";
import Courses from "./Components/Courses";
import { contexApi } from "./Components/Context/ContexApi";
import ContactUs from "./Components/ContactUs";
import AdminContacts from "./Components/AdminContacts";
import Events from "./Components/Events";

function App() {
  const { token } = contexApi();

  return (
    <BrowserRouter>
      <div className="main h-screen">
        <div className="head min-h-[9vh]">
          <Header />
        </div>
        <div className="min-h-[96vh] mt-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/result" element={<ResultsPage />} />
            <Route
              path="/admin"
              element={token ? <AdminPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/admission"
              element={ <AdmissionForm /> }
            />
            <Route
              path="/contacts"
              element={token ? <AdminContacts /> : <Navigate to="/login" />}
            />
            <Route path="/admission/forms" element={token ?<AdminViewAdmissions /> : <Navigate to="/login" />} />
          </Routes>
        </div>

        <div className="foot min-h-[5vh] ">
          <Footer />
        </div>
      </div>

      {/* <Counter /> */}
      {/* <NewAdmin />
      <AdminPannel />
      <Login /> */}
      {/* <LandingPage /> */}
    </BrowserRouter>
  );
}

export default App;
