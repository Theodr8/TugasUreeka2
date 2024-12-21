import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import { apiURL } from "./api";
import { Link } from "react-router-dom";

const Countryinfo = () => {
    const [country, setCountry] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');
    const {countryName} = useParams();

    useEffect  (()=>{
    const getCountryByName = async()=>{
        try{
            const res = await fetch (`${apiURL}/name/${countryName}`);

            if (!res.ok) throw new Error('cant find country');
            const data = await res.json();
            setCountry(data);

            setIsLoading(false);
        }catch (error){
            setIsLoading(false);
            setError(error.message);
        };
    };
            getCountryByName();
        },[countryName])
    return(
        <div className="countryinfowrap">
            <button>
                <Link to='/'>Back</Link>
            </button>
            { isLoading && !error && <h4>Loading...</h4>}
            { error && !isLoading && {error}}
            {country?.map((country, index)=>(
                <div className="infocontainer">
                    <div className="infobendera">
                        <img src={country.flags.png} alt="" />
                    </div>
                    <div className="countryinfo">
                        <h3>{country.name.common}</h3>
                        <div className="info1">
                            <h5>Official Name : <span>{country.name.official}</span></h5>
                            <h5>Sub Region : <span>{country.subregion}</span></h5>
                            <h5>Population : {" "} <span>{new Intl.NumberFormat().format(country.population)}</span></h5>
                            <h5>Timezones : <span>{country.timezones}</span></h5>
                        </div>
                </div>
            </div>
                )
            )
            }
        </div>
        
    )
}
export default Countryinfo