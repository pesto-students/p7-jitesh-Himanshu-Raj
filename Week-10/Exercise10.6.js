class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  allPathsSourceTarget(graph) {
    let result = [];
    let path = [];
    dfs(0, graph.length - 1);
    return result;

    function dfs(curr, target) {
      path.push(curr);
      if (curr == target) {
        result.push([...path]);
      } else {
        for (let next of graph[curr]) {
          dfs(next, target);
        }
      }
      path.pop();
    }
  }
}

let graph = new Graph(4);

console.log(graph.allPathsSourceTarget([[1, 2], [3], [3], []]));
