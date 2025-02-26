import { useState } from "react"

import Header from "./components/Header"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"

export default function App(){

    const [preview, setPreview] = useState("off");

    function handlePreview() {
        setPreview((prevState) => (prevState === "off" ? "on" : "off"));
    }

    return (
        <>
            <div className="bg-div">
            </div>
            <div className="onbg-div">
                <Header  preview={preview} handlePreview={handlePreview}/>
                <Contact preview={preview}/>
                <div className="contentDiv">
                    <div className="expDiv">Experience</div>
                    <div className="expContentDiv">
                        <Experience preview={preview} />
                    </div>
                </div>
                <div className="contentDiv">
                    <div className="expDiv">Education</div>
                    <div className="expContentDiv">
                        <Education preview={preview} />
                    </div>
                </div>
                <div className="contentDiv">
                    <div className="expDiv">Skills</div>
                    <div className="expContentDiv">
                        <Skills preview={preview}/>
                    </div>
                </div>
            </div>
        </>
    )
}



