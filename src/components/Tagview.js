import { useEffect, useState } from "react";
import useChild from "../hooks/useChild";
import Tag from "./Tag";
import "./styles.css";

export default function Tagview() {
  const tree = {
    name: "root",
    children: [
      {
        name: "child1",
        children: [
          { name: "child1-child1", data: "c1-c1 Hello" },
          { name: "child1-child2", data: "c1-c2 JS" },
        ],
      },
      { name: "child2", data: "c2 World" },
    ],
  };

  const [data, setData] = useState(tree);
  const [showExport, setShowExport] = useState(false);

  const { insertNode, inputData, inputTagName } = useChild();
  const handleInsertNode = (name, item) => {
    const finalData = insertNode(data, name, item);
    setData(finalData);
  };

  const handleInputData = (name, item) => {
    const finalData = inputData(data, name, item);
    setData(finalData);
  };
  const handleTagInputData = (name, item) => {
    const finalData = inputTagName(data, name, item);
    setData(finalData);
  };

  return (
    <div style={{ marginRight: "2rem" }}>
      <Tag
        tag={data}
        handleInsertNode={handleInsertNode}
        handleInputData={handleInputData}
        handleTagInputData={handleTagInputData}
      />

      <div
        style={{
          margin: "2rem 2rem 5rem 2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          className="add-child-btn"
          onClick={() => setShowExport(!showExport)}
        >
          Export
        </button>
        {showExport && <p>{JSON.stringify(data)}</p>}
      </div>
    </div>
  );
}
