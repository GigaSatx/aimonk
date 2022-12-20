import { useState } from "react";
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

  const [data, setData] = useState(Array(tree));
  const addChild = (node) => {
    console.log("worling");
    setData(() => {
      return Array(node).concat([{ name: "Untitled", data: "new Data" }]);
    });
  };

  return (
    <div>
      {data.map((tag, index) => (
        <Tag key={index} tag={tag} addChild={addChild} />
      ))}
      {console.log(data)}
    </div>
  );
}
