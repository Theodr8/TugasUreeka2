import React, {useState, useEffect} from "react";
import { apiURL } from "./api";
import SearchInput from "./searchInput";
import Filterregion from "./Filterregion";
import { Link} from "react-router-dom"

const Allcountries = () => {

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const getAllCountries = async () =>{
        try{
            const res = await fetch(`${apiURL}/all`);

            if(!res.ok) throw new Error ('ada yang error');
            
            const data = await res.json();

            console.log(data);
            // console.log("tes");

            setCountries (data);

            setIsLoading(false);

        } catch (error){
            setIsLoading(false);
            setError(error.message);

        }
    }

    
    const getCountryByName = async(countryName)=>{
        try{
            const res = await fetch (`${apiURL}/name/${countryName}`);

            if (!res.ok) throw new Error('cant find country');
            const data = await res.json();
            setCountries(data);

            setIsLoading(false);
        }catch (error){
            setIsLoading(false);
            setError(error.message);
        }
    }
    const getCountryByRegion = async(regionName)=>{
        try{
            const res = await fetch (`${apiURL}/region/${regionName}`);

            if (!res.ok) throw new Error('cannot get region');
            const data = await res.json();
            setCountries(data);

            setIsLoading(false);
        }catch (error){
            setIsLoading(false);
            setError(false);
        }
    }
    

    useEffect  (()=>{
        getAllCountries();
    },[])
 
    return ( 
    <div className="allcountrywrap">
        <div className="countrytop">
            <div className="search">
                <SearchInput onSearch = {getCountryByName}/>
            </div>
            <div className="filter">
                <Filterregion onSelect = {getCountryByRegion}/>
            </div>
        </div>
        <div className="countrybottom">
        {isLoading && !error && <h4>loading.....</h4>}
        {error && !isLoading && <h4>{error}</h4>}
        {
            countries?.map(country=>(
                <Link to={`/country/${country.name.common}`}>
                <div className="countrycard">
                    <div className="bendera">
                        <img src={country.flags.png} alt="" />
                    </div>
                    <div className="nama">
                        <h3>{country.name.common}</h3>
                        <h6>Wilayah : {country.region}</h6>
                        <h6>Ibu kota : {country.capital}</h6>
                    </div>
                </div>
                </Link>
            ))
        }

        </div>
    </div>
    );
};

export default Allcountries