import React, {useState} from "react";

const searchInput = ({onSearch}) => {
    const [input, setInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSearch (input);
    } ;

    return (
    <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder="search country"
         value={input}
          onChange={(e) => setInput(e.target.value)}/>
    </form>
    );
};

export default searchInput;