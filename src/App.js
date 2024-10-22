import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your CSS styles
import DoctorRegistration from './Components/DoctorRegistration/DoctorRegistration';
import LoginForm from './Components/LoginForm/LoginForm';
import AppointmentBooking from './Components/AppointmentBooking/AppointmentBooking';
import AdminLoginForm from './Components/AdminLoginForm/AdminLoginForm';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import PatientLoginForm from './Components/PatientLoginForm/PatientLoginForm';
import SearchDoctor from './Components/SearchDoctor/SearchDoctor';
import ViewSpecialization from './Components/ViewSpecialization/ViewSpecialization';
import AddSpecialization from './Components/AddSpecialization/AddSpecialization';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import DoctorList from './Components/DoctorList/DoctorList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import AppointmentReport from './Components/AppointmentReport/AppointmentReport';
import LandingPage from './Components/LandingPage/LandingPage';
import UpdateWebsitePage from './Components/UpdateWebsitePage/UpdateWebsitePage';
import BookYourSlot from './Components/BookYourSlot/BookYourSlot';
import PatientRegistration from './Components/PatientRegistration/PatientRegistration';
import DoctorAppointmentDashboard from './Components/DoctorAppointmentDashboard/DoctorAppointmentDashboard';
import PatientDashboard from './Components/PatientDashboard/PatientDashboard';
import AdminRegistration from './Components/AdminRegistration/AdminRegistration';

const App = () => {
  // State to hold the specializations
  const [specializations, setSpecializations] = useState([
    { id: 1, name: 'Cardiology' },
    { id: 2, name: 'Neurology' },
    { id: 3, name: 'Pediatrics' },
  ]);

  // Function to handle adding specializations
  const handleAddSpecialization = (name) => {
    const newSpec = { id: specializations.length + 1, name }; // Generate a new ID
    setSpecializations([...specializations, newSpec]); // Update state
  };

  return (
    <Router>
      <div>
        <Header />
   
        <div className="app-container">
          <Routes>       
            <Route path="/" element={<LandingPage />} />
            <Route path="/doctor-registration" element={<DoctorRegistration />} />
            <Route path="/admin-registration" element={<AdminRegistration />} />
            <Route path="/doctor-appointment-dashboard" element={<DoctorAppointmentDashboard />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/patient-registration" element={<PatientRegistration/>} />
            <Route path="/patient-logIn" element={<PatientLoginForm/>} />
            <Route path="/book-your-slot" element={<BookYourSlot />} />
            <Route path="/book-appointment" element={<AppointmentBooking />} />
            <Route path="/admin-login" element={<AdminLoginForm />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/patient-login" element={<PatientLoginForm />} />
            <Route path="/search-doctor" element={<SearchDoctor />} />
            <Route path="/doctor-list" element={<DoctorList />} />
            <Route path="/update-website" element={<UpdateWebsitePage />} />
            <Route path="/appointment-report" element={<AppointmentReport />} />
            <Route path="/view-specialization" element={<ViewSpecialization specializations={specializations} setSpecializations={setSpecializations} />} />
            <Route path="/add-specialization" element={<AddSpecialization onAddSpecialization={handleAddSpecialization} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
