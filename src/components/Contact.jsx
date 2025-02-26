import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Contact({preview}) {
    const [formData, setFormData] = useState({
        name: "Your Name",
        description: "I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text.",
        email: "your-email.com",
        link: "your-portfolio.com",
        phoneNo: "567-234-6758"
    });

    const [isEditing, setEditing] = useState(false);

    function handleEditingStatus(){
        setEditing(prev => !prev);
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            {isEditing ? (
                <>
                <div className = "nameSection">
                    <input 
                        className="input"
                        name="name" 
                        placeholder="Input your name" 
                        value={formData.name} 
                        onChange={handleChange}
                    />
                    {preview === "off" && (<button onClick={handleEditingStatus} className="editSaveButton">Save</button>)}     
                </div>
            
                <textarea 
                    className= "desc-input"
                    name="description"
                    placeholder="Enter description here" 
                    value={formData.description} 
                    onChange={handleChange}
                ></textarea>
            
                <div className="emailSection">
                    <input 
                        className="email-input" 
                        name="link"
                        placeholder="Enter link" 
                        value={formData.link} 
                        onChange={handleChange}
                    />
                    <input 
                        className="email-input" 
                        name="email"
                        placeholder="Enter email" 
                        value={formData.email} 
                        onChange={handleChange}
                    />
                    <input 
                        className="email-input" 
                        name="phoneNo"
                        placeholder="Enter phone number" 
                        value={formData.phoneNo} 
                        onChange={handleChange}
                    />
                </div>
                </>
            ):(
                <>
                    <div className = "nameSection">
                        <p>{formData.name}</p> 
                        {preview==="off" && (<button className="editButton" onClick={handleEditingStatus}><i className="fa-solid fa-pen-to-square"></i></button>)}    
                    </div>
                    <p className="editDescInput">
                        {formData.description}
                    </p>
                    <div className="editEmailSection">
                        <p className="editemailInput">{formData.link}</p>
                        <p className="editemailInput">{formData.email}</p>
                        <p className="editemailInput">{formData.phoneNo}</p>
                    </div>
                </>

            )}
        </div>
    );
}

