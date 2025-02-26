import { useState } from "react"

export default function Education(){
    let demoEducation = [
        {
            id:0,
            school : "School",
            course : "Course",
            start : "[Month] [Year]",
            end : "[Month] [Year]",
            onEdit : false
        },
        {
            id:1,
            school : "School",
            course : "Course",
            start : "[Month] [Year]",
            end : "[Month] [Year]",
            onEdit : false
        }
    ]
    
    const[edArray, setEdArray] = useState(demoEducation);

    function handleDelete(e, id){
        setEdArray(prevState => prevState.filter((el) => el.id!==id))
    }

    function handleChange(e, id){
        const {name, value} = e.target;
        setEdArray(prevState => prevState.map(el =>
            el.id===id ? {...el, [name]:value}: el
        ))
    }

    function handleToggle(e, id){
        setEdArray(prevState => prevState.map(el =>
            el.id===id ? {...el, onEdit:!el.onEdit}: el
        ))
    }

    function handleAddition() {
        setEdArray((prevState) => [
          ...prevState,
          {
            id: prevState.length,
            school : "School",
            course : "Course",
            start : "[Month] [Year]",
            end : "[Month] [Year]",
            onEdit : false
          },
        ]);
      }
    return (
        <>
            {edArray.map((element) => (
                <div className="schoolParent" key={element.id}>
                    {element.onEdit ? (
                        <>
                        <div>
                            <div className>
                                <input onChange={(e) => handleChange(e, element.id)}className= "fieldInput" value={element.school} placeholder="enter your school" name="school"/>{" "} - {" "}<input onChange={(e) => handleChange(e, element.id)} className= "fieldInput" value={element.course} placeholder="enter your course"name="course"/>
                            </div>
                            <div className>
                                <input onChange={(e) => handleChange(e, element.id)} className= "fieldInput" value={element.start} placeholder="enter start date" name="start"/> {" "} - {" "} <input onChange={(e) => handleChange(e, element.id)} className= "fieldInput" value={element.end} placeholder="enter end date"name="end"/>
                            </div>
                        </div>
                        <div className="schoolRightDiv">
                            <button onClick={(e) => handleDelete(e, element.id)} className="editButton"><i className="fa-solid fa-trash"></i></button>
                            <button onClick={(e) => handleToggle(e, element.id)}className="editSaveButton">Save</button>
                        </div>
                        </>
                    ) : (
                        <>
                        <div>
                            <div className="schoolDiv schooler">
                                <p className="editfieldInput1">{element.school}</p><p className="editfieldInput1">|</p><p className="editfieldInput1">{element.course}</p>
                            </div>
                            <div className="schoolDiv">
                                <p className="editfieldInput2">{element.start}</p><p className="editfieldInput2">-</p><p className="editfieldInput2">{element.end}</p>
                            </div>
                        </div>
                        <div className="schoolRightDiv1">
                            <button onClick={(e) => handleDelete(e, element.id)} className="editButton"><i className="fa-solid fa-trash"></i></button>
                            <button onClick={(e) => handleToggle(e, element.id)} className="editButton"><i className="fa-solid fa-pen-to-square"></i></button>
                        </div>
                        </>
                    )}
                </div>
            ))}
            <button onClick={handleAddition} className="addButton">Add</button>
        </>
    );
    
}

