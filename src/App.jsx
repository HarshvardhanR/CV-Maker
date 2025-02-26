import Header from "./components/Header"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"

export default function App(){
    return (
        <>
            <div className="bg-div">
            </div>
            <div className="onbg-div">
                <Header />
                <Contact />
                <div className="contentDiv">
                    <div className="expDiv">Experience</div>
                    <div className="expContentDiv">
                        <Experience />
                    </div>
                </div>
                <div className="contentDiv">
                    <div className="expDiv">Education</div>
                    <div className="expContentDiv">
                        <Education />
                    </div>
                </div>
                <div className="contentDiv">
                    <div className="expDiv">Skills</div>
                    <div className="expContentDiv">
                        <Skills />
                    </div>
                </div>
            </div>
        </>
    )
}



