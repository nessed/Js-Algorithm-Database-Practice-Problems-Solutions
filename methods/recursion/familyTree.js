const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};
function printChildrenRecursive(t) {
    if (t.children.length === 0) {
      return;
    }
    for (let i = 0; i < t.children.length; i++) {
      const child = t.children[i];
      console.log(child.name);
      printChildrenRecursive(child);
    }
  }
printChildrenRecursive(tree);
