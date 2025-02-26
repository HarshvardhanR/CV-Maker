// eslint-disable-next-line react/prop-types
export default function Header({ preview, handlePreview }) {
    return (
      <div className="headerDiv">
        <p className="previewName">Preview Mode</p>
        <button
          onClick={handlePreview}
          className={preview === "off" ? "toggleButtonRed" : "toggleButtonGreen"}
        >
          {preview}
        </button>
      </div>
    );
  }

  