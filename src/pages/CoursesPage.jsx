import React from "react";
import { Link } from "react-router-dom";


const CoursesPage = () =>{
    return(
    <div className="page-container" style={{overflow:"auto"}}>
       
          <h1 className="animate-fade-in-up">Our Academic Programs </h1>
          <p>Vivekanand college offers a comprehensive range of undergraduate and postgraduate
            <br/> programs designed to equip students with the knowledge and skills demanded by today's 
            <br/>dynamic global landscape. Our curriclum is regularly updated to reflect indistry tranda and academic advancements.
          </p>
          <h2><b>Discover Campus Life</b></h2>
          <div className="video-container">
            <video controls width="100%" height="auto" className="course-video">
              <source src="\Videoes\video1.mp4 "/>
            </video>
            <p className="video-caption">Get a glimpse of the vibrant academic and social life at vivekanand college</p>
          </div>
          <h2>Undergraduate Programs (UG) </h2>
          <ul>
           <b> <li>Bachelor of Science(B.Sc)</li></b>
              <ul>
                <li>Computer Science (3 Years)</li>
                <li>Information Technology (3 Years)</li>
                <li>Biotechnology (3 Years)</li>
              </ul>
           <b> <li>Bachlor of Commerce (B.Com)</li></b>  
               <ul>
                <li>Accounting & Finance (3 Years)</li>
                <li>Banking & Insurance (3 Years)</li>
                </ul> 
           <b> <li>Bachelor of Arts (3 Years)</li></b>
               <ul>
                <li>English Literature (3 Years)</li>
                <li>Psychology (3 Years)</li>
                </ul>   
          </ul>

          <h2>Postgraduate Programs (PG)</h2>
            <ul>
              <li>Master of Science(M.Sc)</li>
                <ul>
                  <li>Computer Science(2 Years)</li>
                  <li>Information Technology(2 Years)</li>
                </ul>
               <li>Master Of Commerce(M.Com)(2 Years)</li>
               <li>Master of Arts(M.A.)(2 Years)</li> 
            </ul>
            <h2>Program Details & Free Structure(Annual)</h2>
              <table className="admissions-table course-details-table" >
                <thead>
              <tr>
                <th>Program Type</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Annual Fee</th>
                <th>Eligiblity</th>
              </tr>
              </thead>
              <tbody>
              <tr >
                <td>UG</td>
                <td>B.C.S</td>
                <td>3 Years</td>
                <td>80,000 Rs.</td>
                <td>10+2 with PCM(50%)</td>
              </tr>
              <tr style={{backgroundColor:'#d'}}>
                <td>UG</td>
                <td>B.Com.Accounting&Finance</td>
                <td>3 Years</td>
                <td>75,000 Rs.</td>
                <td>10+2 commerce (50%)</td>
              </tr>
              <tr>
                <td>PG</td>
                <td>M.Sc.Information Technology</td>
                <td>2 Years</td>
                <td>85,000 Rs.</td>
                <td>B.Sc. IT/CS (50%)</td>
              </tr>
              </tbody>
            </table>

            <h2> Specialized & Vocational Courses</h2>
            <p>In addition to traditional degree programs, we offer various certificate and 
              diploma courses in areas like Digital Marketing, Web Development, Data Analytics,
               and Soft Skills Development, providing specialized training for career enhancement.</p>
              <div className="call-to-action">
              <p>Have questions about a specific course?</p>
              <Link to="/contact" className="btn">Inquire about courses</Link>
              </div>
    </div>
    )
}

export default CoursesPage;
