import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Skills({preview}){

    const[toggle, setToggle] = useState(false);
    const[value, setValue] = useState("HTML - CSS - JavaScript - Figma - ReactJS - Webpack")

    function handleToggle(){
        setToggle(prevState => !prevState);
    }

    function handleChange(e){
        setValue(e.target.value);
    }

    return(
        <div className="skillDiv">
            {toggle?(
                <>
                <textarea onChange={handleChange}className="skillsInput" value={value} placeholder="enter your skills here"></textarea>
                {preview==="off" && (<button onClick={handleToggle}className="editSaveButton skillButton1">Save</button>)}
                </>
            ):(
                <>
                <p>{value}</p>
                {preview==="off" && (<button onClick={handleToggle} className="editButton skillButton"><i className="fa-solid fa-pen-to-square"></i></button>)}
                </>
            )}
        </div>
    )
}