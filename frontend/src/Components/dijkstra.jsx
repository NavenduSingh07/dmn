// // dijkstra.js
// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }

//     enqueue(element) {
//         this.values.push(element);
//         this.sort();
//     }

//     dequeue() {
//         return this.values.shift();
//     }

//     isEmpty() {
//         return this.values.length === 0;
//     }

//     sort() {
//         this.values.sort((a, b) => a[1] - b[1]);
//     }
// }

// const dijkstra = (graph, startNode, endNode) => {
//     let distances = {};
//     let prev = {};
//     let pq = new PriorityQueue();

//     distances[startNode] = 0;

//     for (let node in graph) {
//         if (node !== startNode) distances[node] = Infinity;
//         prev[node] = null;
//     }

//     pq.enqueue([startNode, 0]);

//     while (!pq.isEmpty()) {
//         let [currentNode, currentDistance] = pq.dequeue();

//         for (let neighbor in graph[currentNode]) {
//             let distance = graph[currentNode][neighbor];
//             let newDistance = currentDistance + distance;

//             if (newDistance < distances[neighbor]) {
//                 distances[neighbor] = newDistance;
//                 prev[neighbor] = currentNode;
//                 pq.enqueue([neighbor, newDistance]);
//             }
//         }
//     }

//     let path = [];
//     let currentNode = endNode;
//     while (currentNode !== null) {
//         path.push(currentNode);
//         currentNode = prev[currentNode];
//     }
//     path.reverse();

//     return { path, distance: distances[endNode] };
// };

// export default dijkstra;



// dijkstra.jsx

function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const pq = new PriorityQueue();
    
    // Initialize distances and priority queue
    for (let node in graph) {
      if (node === startNode) {
        distances[node] = 0;
        pq.enqueue(node, 0);
      } else {
        distances[node] = Infinity;
        pq.enqueue(node, Infinity);
      }
      visited[node] = false;
    }
  
    while (!pq.isEmpty()) {
      let minNode = pq.dequeue().element;
      
      if (!graph[minNode] || !Array.isArray(graph[minNode])) {
        console.error(`Invalid graph structure at node: ${minNode}`, graph[minNode]);
        continue;
      }
      
      let neighbors = graph[minNode];
      for (let neighbor in neighbors) {
        let edgeWeight = neighbors[neighbor];
        let alt = distances[minNode] + edgeWeight;
        
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          pq.enqueue(neighbor, alt);
        }
      }
      
      visited[minNode] = true;
    }
  
    return distances;
  }
  export default dijkstra;