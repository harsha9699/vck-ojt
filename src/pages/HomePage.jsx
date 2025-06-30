import { Link } from "react-router-dom";

const HomePage = () =>{
    return( 
        
       <div className="page-container" style={{overflow:"auto"}}>
            <div className="hero-section">
            <img src="/Images/vck2.png" alt='vck2' className="hero-banner-image"/>
            <div className="hero-overlay-text">
                <h1 className="animate-fade-in-up">Welcome to Vivekanand College!</h1>
                <p>Your journey to excellence starts here.</p>
                <Link to="/admission" className="btn hero-btn">Apply Now!</Link>{""}
            </div>
        </div>
          <p><b>Vivekanand College</b> is a premier educational dedicated to fortering 
            academic excellence, innovation, and holistic development.
            Established in 1980, we have proudly served generations of students,
            empowering them to achieve their full potential.</p>
            
            <p>At Vivekanand College, we believe in a vibrant learning environment 
            that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, 
            and diverse student community create a unique ecosystem where curiosity thrives and 
            future leaders are shaped.
        
            <h2>Why Choose Vivekanand College?</h2>
            <hr/>
            <ul>
                <li><b>Legacy of Excellence:</b>Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
            </ul>
</p>
 
            <hr/>
           <div className="image-gallery">
            <img  src="/Images/DP2.jpeg" alt='VCK' />    
            <img src="/Images/vck1.jpg" alt="vck1"  />
            </div>
            <p>Explore our vibrant campus and state-of-the-art facilities 
                designed to enhance your learning experience and personal growth.</p>
                  
                 <div className="call-to-action">
                <p>Ready to Explore our courses?</p>
                <Link to="/courses" className="btn">Explore Courses</Link>{""}
      </div>
          
                 
        </div>
       
    )
}

export default HomePage;