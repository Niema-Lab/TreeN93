/*
file to hold my implementation of a node class for building the tree
*/

class TreeNode {

  /*
  constructor function
  */
  constructor(label, edgeLength){
    this.children = [];
    this.parent = null;
    this.label = label;
    this.edgeLength = edgeLength;
  }

  /*
  function to add a child node to this node
  */
  addChild(child){
    this.children.push(child);
    child.parent = this;
  }

  /*
  function to get whether the node is a leaf, based on number of children
  */
  isLeaf(){
    return (this.children.length == 0);
  }

  /*
  function to get newick string
  */
  getNewickString(){
    return this.getNewickStringHelper(this);
  }

  /*
  helper function for get newick string function
  uses recursion
  */
  getNewickStringHelper(node){
    var s = "";
    //add children
    if (node.children.length != 0){
      s += "(";
      for (var c of node.children){
        s += this.getNewickStringHelper(c);
        s += ",";
      }
      s = s.substring(0, s.length - 1); //remove extra comma
      s += ")";
    }
    //add this node
    if (node.label != null){
      s += node.label;
    }
    if (node.edgeLength != null){
      s += ":" + parseFloat(parseFloat(node.edgeLength).toFixed(10).toString());
    }
    return s;
  }

}
