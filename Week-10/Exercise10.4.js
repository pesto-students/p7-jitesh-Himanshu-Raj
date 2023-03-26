class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) this.adjList.set(u, []);
    this.adjList.get(u).push(v);
  }

  pathExists(start, end) {
    let visited = new Set();
    let queue = [start];
    while (queue.length > 0) {
      let curr = queue.shift();
      if (curr == end) return true;
      visited.add(curr);
      let neighbors = this.adjList.get(curr) || [];
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (!visited.has(neighbor)) queue.push(neighbor);
      }
    }
    return false;
  }
}

let graph = new Graph(3);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);

console.log(graph.pathExists(0, 2));
