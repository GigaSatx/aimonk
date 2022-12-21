const useChild = () => {
  const insertNode = function (tree, name, item) {
    if (tree.name === name) {
      console.log(tree, name, item, "working");

      const copy = { ...tree };
      delete copy.data;
      if (copy.children) {
        tree.children = copy.children.concat({
          name: "Untitled",
          data: "new Data",
        });
        return tree;
      } else {
        // return {
        //   ...copy,
        //   children: [
        //     {
        //       name: "Untitled",
        //       data: "new Data",
        //     },
        //   ],
        // };
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

  const deleteNode = () => {}; // Do it Yourself

  const renameNode = () => {}; // Do it Yourself

  return { insertNode, deleteNode, renameNode };
};

export default useChild;
