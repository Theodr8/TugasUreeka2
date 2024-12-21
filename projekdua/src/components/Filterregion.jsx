import React from "react";

const Filterregion = ({onSelect}) =>{
    const selectHandler = (e) =>{
        const regionName = e.target.value;
        onSelect (regionName);
    }
    return (
    <select onChange = {selectHandler}>
        <option classname="option">Filter by region</option>
        <option classname="option"value= "Africa">Africa</option>
        <option classname="option"value= "America">America</option>
        <option classname="option" value= "Asia">Asia</option>
        <option classname="option"value= "Europe">Europe</option>
        <option classname="option"value= "Oceania">Oceania</option>
    </select>
    );
};
export default Filterregion;