const useChild = () => {
  const insertNode = function (tree, name, item) {
    if (tree.name === name) {
      const copy = { ...tree };
      delete copy.data;
      if (copy.children) {
        console.log(tree, 'working')
        return {...copy ,children : copy.children.concat({
          name: "Untitled",
          data: item,
        })};
      } else {
        return {
          ...copy,
          children: [
            {
              name: "Untitled",
              data: item,
            },
          ],
        };
      }
    }
    let latestNode = [];
    if (tree.children) {
      latestNode = tree.children.map((ob) => {
        return insertNode(ob, name, item);
      });
    } else {
      tree.children = [];
      latestNode = tree.children.map((ob) => {
        return insertNode(ob, name, item);
      });
    }
    return { ...tree, children: latestNode };
  };


  const inputData = (tree, name, item) => {
    if (tree.name === name) {
      if (tree.data) {
        tree.data = item
      }
    }
    let latestNode = [];
    if (tree.children) {
      latestNode = tree.children.map((ob) => {
        return inputData(ob, name, item);
      });
    } else {
      tree.children = [];
      latestNode = tree.children.map((ob) => {
        return inputData(ob, name, item);
      });
    }
    return { ...tree, children: latestNode };
  };
  const inputTagName = (tree, name, item) => {
    if (tree.name === name) {
      if (tree.name) {
        tree.name = item
      }
    }
    let latestNode = [];
    if (tree.children) {
      latestNode = tree.children.map((ob) => {
        return inputData(ob, name, item);
      });
    } else {
      tree.children = [];
      latestNode = tree.children.map((ob) => {
        return inputData(ob, name, item);
      });
    }
    return { ...tree, children: latestNode };
  };

  return { insertNode, inputData, inputTagName };
};

export default useChild;
