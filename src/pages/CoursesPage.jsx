import Header from "../components/Header/Header";

const CoursesPage = () =>{
    return(
    <div>
        <Header/>
          <h1>Undergraduate Programs (UG) </h1>
          <ul>
            <li>Bachelor of Science(B.Sc)</li>
              <ul>
                <li>Computer Science (3 Years)</li>
                <li>Information Technology (3 Years)</li>
                <li>Biotechnology (3 Years)</li>
              </ul>
            <li>Bachlor of Commerce (B.Com)</li>  
               <ul>
                <li>Accounting & Finance (3 Years)</li>
                <li>Banking & Insurance (3 Years)</li>
                </ul> 
             <li>Bachelor of Arts (3 Years)</li>
               <ul>
                <li>English Literature (3 Years)</li>
                <li>Psychology (3 Years)</li>
                </ul>   
          </ul>

    </div>
    )
}

export default CoursesPage;
