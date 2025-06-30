import { Route, BrowserRouter as  Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AdmissionPage from "./pages/AdmissionPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"
function App  () {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Harsha Ravindra Patil"
          studentPhotoUrl="/Images/ad.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    
    <Router>  
      <div className="main-layout" style={{backgroundColor:'#52d2d2'}} >
         <Header/>
          <div className="content">
           <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/admission" element={<AdmissionPage/>}/>
              <Route path="/courses" element={<CoursesPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/notfound" element={<NotFoundPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
           </Routes>
         </div>
         <Footer/>
         <ChatbotComponent/>
      </div>
    </Router>
    </>
    
  );
}

export default App;