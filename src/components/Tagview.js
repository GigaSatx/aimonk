import { useEffect, useState } from "react";
import useChild from "../hooks/useChild";
import Tag from "./Tag";

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
  const { insertNode } = useChild();
  const handleInsertNode = (name, item) => {
    const finalData = insertNode(data, name, item);
    setData(finalData);
  };

  return (
    <div>
      <Tag tag={data} handleInsertNode={handleInsertNode} />
      {console.log(data)}
    </div>
  );
}
