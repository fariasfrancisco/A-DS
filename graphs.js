class Node {
  constructor(id, children) {
    this.id = id;
    this.children = children;
  }
}

function hasPathDFS(source, destination, visited) {
  if (source.id === destination.id) return true;
  if (visited.has(source.id)) return false;

  visited.add(source.id);

  for (const child of source.children) {
    if (hasPathDFS(child, destination, visited)) return true;
  }

  return false;
}

function hasPathBFS(source, destination) {
  const nextToVisit = [source];
  const visited = new Set();

  while(nextToVisit.length > 0) {
    const node = nextToVisit.shift();

    if (node.id === destination.id) return true;
    if (visited.has(node.id)) return false;

    visited.add(node.id);

    for(const child of node.children) {
      nextToVisit.push(child);
    }
  }

  return false;
}
