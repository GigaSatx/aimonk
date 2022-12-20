import { useEffect, useState } from "react";
import "./styles.css";

export default function Tag({ tag, addChild }) {
  const [openTag, setOpenTag] = useState(true);
  const [node, setNode] = useState(tag);

  const handleNode = (node) => {
    console.log(node, "node");
    setNode(() => {
      const copy = { ...node };
      delete copy.data;
      return Array(node).concat([
        { ...copy, children: [{ name: "Untitled", data: "new Data" }] },
      ]);
    });
  };

  const handleChange = () => {};
  return (
    <>
      <div className="root">
        <header className="header">
          <div className="left-head">
            <button className="open-btn">{openTag ? "v" : ">"}</button>
            <p>{tag.name}</p>
          </div>
          <button className="add-child-btn" onClick={() => addChild(node)}>
            Add Child
          </button>
        </header>
        <div className="data-cls">
          <span style={{ marginRight: "10px" }}>Data</span>
          <input value={tag.data} onChange={handleChange} />
        </div>

        {tag.children &&
          tag.children.length > 0 &&
          tag.children.map((childtag, index) => (
            <Tag key={index} tag={childtag} addChild={handleNode} />
          ))}
      </div>
    </>
  );
}
