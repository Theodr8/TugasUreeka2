import React from "react"
import {Link} from "react-router-dom"
import gambar from "../assets/benderaeug.png"


const About = () =>{
    
    return (
    // <div>tes</div>
    <div className="countryinfowrap">
    <button>
        <Link to='/'>Back</Link>
    </button>
    <div className="infocontainer">
        <div className="infobendera1">
            <img src= {gambar} alt="" />
        </div>
        <div className="countryinfo">
            <h3>FULAND</h3>
            <div className="info1">
                <h5>Official Name : <span>Republic of Fuland</span></h5>
                <h5>Sub Region : <span>asia</span></h5>
                <h5>Population :  <span>242,234</span></h5>
                <h5>Timezones : <span>UTC +7:00</span></h5>
                <h5>Reason for wanting this : <span>
                    {/* <ul>   */}
                        <li>Cheap or free education for all</li>
                        <li>Build a lot of library in cities</li>
                        <li>Full of diversity and unity</li>
                        <li>Etc...</li>
                    {/* </ul> */}
                    </span></h5>
            </div>
            </div>
</div>
</div>
);
};

export default About;