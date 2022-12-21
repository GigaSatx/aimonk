import { useEffect, useState } from "react";
import useChild from "../hooks/useChild";
import "./styles.css";

export default function Tag({ tag, handleInsertNode, handleInputData, handleTagInputData }) {
  const [openTag, setOpenTag] = useState(true);
  const [inputVal, setInputVal] = useState(tag.data)
  const [tagName, setTagName] = useState(tag.name)
  const [tagInputOpen, setTagInputOpen] = useState(false)

  const handleChange = (e) => {
    setInputVal(e.target.value)
  };
  const handleTagNameChange = (e) => {
    setTagName(e.target.value)
  }
  const handleInput = (e) => {
    if (e.keyCode === 13) {
      handleInputData(tag.name, inputVal)
    }
  }
  const handleTagInput = (e) => {
    if (e.keyCode === 13) {
      handleTagInputData(tag.name, tagName)
      setTagInputOpen(false)
    }
  }
  return (
    <>
      <div className="root">
        <header className="header">
          <div className="left-head">
            <button className="open-btn" onClick={() => setOpenTag(!openTag)}>
              {openTag ? ">" : "v"}
            </button>
            {tagInputOpen ?
              <p>
                <input value={tagName} onChange={(e) => handleTagNameChange(e)} onKeyDown={(e) => handleTagInput(e)} autoFocus />
              </p>
              : <p>{tagName}</p>}
          </div>
          <div>
            <button
              className="add-child-btn"
              onClick={() => setTagInputOpen(!tagInputOpen)}
            >
              Edit TagName
            </button>
            <button
              className="add-child-btn"
              onClick={() => handleInsertNode(tag.name, 'Enter Data')}
            >
              Add Child
            </button>
          </div>
        </header>
        <div className="tag-body">
          {tag.data &&
            <div className="data-cls">
              <span style={{ marginRight: "10px" }}>Data</span>
              <input value={inputVal} onChange={(e) => handleChange(e)} onKeyDown={(e) => handleInput(e)} autoFocus />
            </div>}
          <div style={{ display: openTag ? "none" : "block" }}>
            {tag.children &&
              tag.children.length > 0 &&
              tag.children.map((childtag, index) => (
                <Tag
                  key={index}
                  tag={childtag}
                  handleInsertNode={handleInsertNode}
                  handleInputData={handleInputData}
                  handleTagInputData={handleTagInputData}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
