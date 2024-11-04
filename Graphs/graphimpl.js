class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacenctList = {};
  }

  addVertex(node) {
    this.adjacenctList[node] = [];
    this.numberOfNodes += 1;
  }

  addEdge(node1, node2) {
    this.adjacenctList[node1].push(node2);
    this.adjacenctList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacenctList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacenctList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + " --> " + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
// Answer
// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5
