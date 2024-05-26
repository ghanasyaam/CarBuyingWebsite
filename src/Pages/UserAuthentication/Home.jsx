// import React from "react"
// import {useLocation, useNavigate} from 'react-router-dom';

// function Home (){
//     const location=useLocation()

//     return (
//         <div className="homepage">

//             <h1>Hello {location.state.id} and welcome to the home</h1>

//         </div>
//     )
// }

// export default Home
import React from "react";
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const userId = location.state?.id || 'Guest'; // Fallback to 'Guest' if no state is passed

    return (
        <div className="homepage">
            <h1>Hello {userId} and welcome to the home</h1>
        </div>
    );
}

export default Home;
