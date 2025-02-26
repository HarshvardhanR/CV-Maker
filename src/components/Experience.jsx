import { useState } from "react";

let arr = [
  {
    id: 0,
    company: "Company",
    position: "Position",
    startDate: "[Month] [Year]",
    endDate: "[Month] [Year]",
    jobDesc:
      "Some stuff about the work that you have done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don't make it too long, keep it short but meaningful. Maximum 10 lines?",
    isEditing: false, 
  },
  {
    id: 1,
    company: "Company",
    position: "Position",
    startDate: "[Month] [Year]",
    endDate: "[Month] [Year]",
    jobDesc:
      "Some stuff about the work that you have done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don't make it too long, keep it short but meaningful. Maximum 10 lines?",
    isEditing: false,
  },
];

// eslint-disable-next-line react/prop-types
export default function Experience({preview}) {
  const [expArray, setExpArray] = useState(arr);

  function handleChange(e, id) {
    const { name, value } = e.target;
    setExpArray((prevState) =>
      prevState.map((el) =>
        el.id === id ? { ...el, [name]: value } : el
      )
    );
  }

  function handleClick(id) {
    setExpArray((prevState) =>
      prevState.map((el) =>
        el.id === id ? { ...el, isEditing: !el.isEditing } : el
      )
    );
  }

  function handleDelete(id) {
    setExpArray((prevState) => prevState.filter((el) => el.id !== id));
  }

  function handleAddition() {
    setExpArray((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        company: "Company",
        position: "Position",
        startDate: "[Month] [Year]",
        endDate: "[Month] [Year]",
        jobDesc:
          "Some stuff about the work that you have done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don't make it too long, keep it short but meaningful. Maximum 10 lines?",
        isEditing: false, 
      },
    ]);
  }

  return (
    <>
      {expArray.map((el) => (
        <div className="expParent" key={el.id}>
          <div className="jobInfoDiv">
            {el.isEditing ? (
              <>
                <div>
                  <input
                    className="fieldInput"
                    value={el.company}
                    name="company"
                    onChange={(e) => handleChange(e, el.id)}
                  />{" "}
                  -{" "}
                  <input
                    className="fieldInput"
                    value={el.position}
                    name="position"
                    onChange={(e) => handleChange(e, el.id)}
                  />
                </div>
                <div>
                  <input
                    className="fieldInput"
                    value={el.startDate}
                    name="startDate"
                    onChange={(e) => handleChange(e, el.id)}
                  />{" "}
                  -{" "}
                  <input
                    className="fieldInput"
                    value={el.endDate}
                    name="endDate"
                    onChange={(e) => handleChange(e, el.id)}
                  />
                </div>
                <textarea
                  className="jobDescText"
                  value={el.jobDesc}
                  name="jobDesc"
                  onChange={(e) => handleChange(e, el.id)}
                />
              </>
            ) : (
              <>
                <div className="flexer">
                  <p className="editfieldInput1">{el.company}</p>
                  <p className="editfieldInput1"> | </p>
                  <p className="editfieldInput1">{el.position}</p>
                </div>
                <div className="flexer">
                  <p className="editfieldInput2">{el.startDate}</p>
                  <p className="editfieldInput2"> - </p>
                  <p className="editfieldInput2">{el.endDate}</p>
                </div>
                <p>{el.jobDesc}</p>
              </>
            )}
          </div>
          <div className="trashDiv">
          {preview === "off" && ( // Hide buttons when preview is "on"
            <>
              <button
                onClick={() => handleDelete(el.id)} // Pass id to delete
                className="editButton"
              >
              <i className="fa-solid fa-trash"></i>
              </button>

              <button
                onClick={() => handleClick(el.id)}
                className={el.isEditing ? "editSaveButton" : "editButton"}
              >
              {el.isEditing ? "Save" : <i className="fa-solid fa-pen-to-square"></i>}
              </button>
            </>
          )}

          </div>
        </div>
      ))}
      {preview==="off" && (<button onClick={handleAddition} className="addButton">
        Add
      </button>)}
    </>
  );
}
