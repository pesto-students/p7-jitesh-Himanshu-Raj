class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) this.adjList.set(u, []);
    this.adjList.get(u).push(v);
  }

  findJudge(N, trust) {
    let inDegree = new Array(N + 1).fill(0);
    let outDegree = new Array(N + 1).fill(0);

    for (let i = 0; i < trust.length; i++) {
      let [a, b] = trust[i];
      inDegree[b]++;
      outDegree[a]++;
    }

    for (let i = 1; i <= N; i++) {
      if (inDegree[i] == N - 1 && outDegree[i] == 0) return i;
    }

    return -1;
  }
}

let graph = new Graph(2);
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.addEdge(2, 0);

console.log(
  graph.findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
