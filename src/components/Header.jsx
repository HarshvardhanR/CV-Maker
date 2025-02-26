import { useState } from "react"

export default function Header(){

    const[preview, setPreview] = useState("off")

    function handlePreview(){
        setPreview(prevState => prevState==="off" ? "on" : "off");
    }
    return(
        <div className="headerDiv">
            <p className="previewName">Preview Mode</p>      
            <button onClick={handlePreview} className={preview==="off" ? "toggleButtonRed" : "toggleButtonGreen" }>{preview}</button>
        </div>
    )
}