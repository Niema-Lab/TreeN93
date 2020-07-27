/*
file to hold my implementation of the Disjoint Set data structure
doesn't have full functionality, only the parts needed for this project
*/

class DisjointSet {

  /*
  constructor function
  creates empty data structures
  */
  constructor(){
    this.parent = new Map();
    this.numBelow = new Map();
    //TODO: maybe shoud add initial ?
  }

  /*
  function that adds a new element x to the disjoint set as a sentinel node
  */
  add(x){
    if (!this.contains(x)){
      this.parent.set(x, null);
      this.numBelow.set(x, 1);
    }
  }

  /*
  function that returns the sentinel node of the element x
  implements path compression along the search
  */
  find(x){
    if (!this.contains(x)){
      return null;
    }
    var explored = new Queue();
    var current = x;
    while (this.parent.get(current) != null){
      explored.enqueue(current);
      current = this.parent.get(current);
    }
    while (! explored.isEmpty()){
      this.parent.set(explored.dequeue(), current);
    }
    return current;
  }

  /*
  function that unions the sets containing x and y by union-by-size
  */
  union(x, y){
    if (this.contains(x) && this.contains(y)){
      var sx = this.find(x);
      var sy = this.find(y);
      if (sx == sy){
        return;
      }
      if (this.numBelow.get(sx) > this.numBelow.get(sy)){
        this.parent.set(sy, sx);
        this.numBelow.set(sx, this.numBelow.get(sx) + this.numBelow.get(sy) + 1)
      }
      else{
        this.parent.set(sx, sy);
        this.numBelow.set(sy, this.numBelow.get(sy) + this.numBelow.get(sx) + 1);
      }
    }
  }

  /*
  function that returns whether the element x is in the disjoint set
  */
  contains(x){
    return this.parent.has(x);
  }

  /*
  function that returns a list of the sets in this disjoint set
  */
  sets(){
    var outSets = new Map();
    for (var x of this.parent.keys()){
      var p = this.parent.get(x);
      if (p == null){
        p = x;
      }
      if (! outSets.has(p)){
        outSets.set(p, new Set());
      }
      outSets.get(p).add(x);
    }
    return outSets.values();
  }

}
