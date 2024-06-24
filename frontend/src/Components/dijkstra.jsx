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

// function dijkstra(graph, startNode) {
//     const distances = {};
//     const visited = {};
//     const pq = new PriorityQueue();
    
//     // Initialize distances and priority queue
//     for (let node in graph) {
//       if (node === startNode) {
//         distances[node] = 0;
//         pq.enqueue(node, 0);
//       } else {
//         distances[node] = Infinity;
//         pq.enqueue(node, Infinity);
//       }
//       visited[node] = false;
//     }
  
//     while (!pq.isEmpty()) {
//       let minNode = pq.dequeue().element;
      
//       if (!graph[minNode] || !Array.isArray(graph[minNode])) {
//         console.error(`Invalid graph structure at node: ${minNode}`, graph[minNode]);
//         continue;
//       }
      
//       let neighbors = graph[minNode];
//       for (let neighbor in neighbors) {
//         let edgeWeight = neighbors[neighbor];
//         let alt = distances[minNode] + edgeWeight;
        
//         if (alt < distances[neighbor]) {
//           distances[neighbor] = alt;
//           pq.enqueue(neighbor, alt);
//         }
//       }
      
//       visited[minNode] = true;
//     }
  
//     return distances;
//   }
//   export default dijkstra;


function dijkstra(graph, start, end) {
  // Initialize distances and predecessors
  const distances = {};
  const prev = {};
  const visited = {};
  const pq = new PriorityQueue(); // Assuming you have a priority queue implementation

  // Initialize the start node distance to 0
  distances[start] = 0;
  pq.enqueue(start, 0);

  for (let node in graph) {
      if (node !== start) {
          distances[node] = Infinity;
      }
      prev[node] = null;
  }

  while (!pq.isEmpty()) {
      const { element: node } = pq.dequeue();
      visited[node] = true;

      if (node === end) {
          break;
      }

      for (let neighbor in graph[node]) {
          if (!visited[neighbor]) {
              const newDist = distances[node] + graph[node][neighbor].cost;
              if (newDist < distances[neighbor]) {
                  distances[neighbor] = newDist;
                  prev[neighbor] = { node, line: graph[node][neighbor].line };
                  pq.enqueue(neighbor, newDist);
              }
          }
      }
  }

  if (distances[end] === Infinity) {
      return null;
  }

  // Build the path and fare
  const path = [];
  let curr = end;
  const interchanges = [];
  const lines = [];
  let lastLine = null;

  while (curr) {
      path.push(curr);
      if (prev[curr]) {
          const { node, line } = prev[curr];
          if (line !== lastLine) {
              if (lastLine !== null) {
                  interchanges.push(curr);
              }
              lastLine = line;
          }
          lines.push(line);
      }
      curr = prev[curr] && prev[curr].node;
  }

  return { path: path.reverse(), cost: distances[end], interchanges: interchanges.reverse(), lines: lines.reverse() };
}

export default dijkstra;

