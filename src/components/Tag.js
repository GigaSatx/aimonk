import { useEffect, useState } from "react";
import useChild from "../hooks/useChild";
import "./styles.css";

export default function Tag({ tag, handleInsertNode }) {
  const [openTag, setOpenTag] = useState(true);
  //   const [nodeObj, setNodeObj] = useState(tag);

  //   const handleNode = (node) => {
  //     console.log(node, "node");
  //     const copy = { ...node };
  //     delete copy.data;
  //     setNodeObj(() => {
  //       if (copy.children) {
  //         return copy.children.concat({
  //           name: "Untitled",
  //           data: "new Data",
  //         });
  //       } else {
  //         return {
  //           ...copy,
  //           children: [
  //             {
  //               name: "Untitled",
  //               data: "new Data",
  //             },
  //           ],
  //         };
  //       }
  //     });
  //   };

  const handleChange = () => {};
  return (
    <>
      <div className="root">
        <header className="header">
          <div className="left-head">
            <button className="open-btn" onClick={() => setOpenTag(!openTag)}>
              {openTag ? ">" : "v"}
            </button>
            <p>{tag.name}</p>
          </div>
          <button
            className="add-child-btn"
            onClick={() => handleInsertNode(tag.name, "child name")}
          >
            Add Child
          </button>
        </header>
        <div className="data-cls">
          <span style={{ marginRight: "10px" }}>Data</span>
          <input value={tag.data} onChange={handleChange} />
        </div>
        <div style={{ display: openTag ? "none" : "block" }}>
          {tag.children &&
            tag.children.length > 0 &&
            tag.children.map((childtag, index) => (
              <Tag
                key={index}
                tag={childtag}
                handleInsertNode={handleInsertNode}
              />
            ))}
        </div>
      </div>
    </>
  );
}
