/*
GENERAL DESCRIPTION GOES HERE OF THIS ENTIRE THING
*/

/*
variables to be used throughout
*/
var treeNewick = null;

/*
create divs on the page
*/
var introDiv = document.createElement("div");
var exampleDiv = document.createElement("div");
var userDiv = document.createElement("div");
var divsList = [introDiv, exampleDiv, userDiv];
for (var div of divsList){
  document.body.appendChild(div);
}

/*
add text to the intro div
*/
var introPar = document.createElement("p");
introPar.innerHTML = "This tool is used to create Newick formatted representations of clustering trees";
introPar.innerHTML += " from the pairwise distances between the leaves.<br>";
introPar.innerHTML += "The input should be in a .csv file where the first column is distance, and the second and third columns are the names of the leaf nodes.<br>";
introPar.innerHTML += "Choose an input file by clicking the 'Choose File' button.<br>";
introPar.innerHTML += "See the example below for formatting:";
introDiv.appendChild(introPar);

/*
add things to the example div
*/
var exampleInput = document.createElement("p");
exampleInput.innerHTML = "1,A,B<br>2,A,C<br>3,A,D<br>2,B,C<br>3,C,D<br>";
var exampleNewick = document.createElement("p")
exampleNewick.innerHTML = "(((A:1,B:1)1:1,C:2)2:1,D:3)3";
var exampleSVG = document.createElement("p");
exampleSVG.innerHTML = '<svg id="tree_display" width="137.2" height="140" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs xmlns="http://www.w3.org/1999/xhtml"><style type="text/css"><![CDATA[.tree-selection-brush .extent {fill-opacity: .05; stroke: #fff; shape-rendering: crispEdges;}.tree-scale-bar text {font: sans-serif;}.tree-scale-bar line, .tree-scale-bar path {fill: none; stroke: #000; shape-rendering: crispEdges;}.node circle, .node ellipse, .node rect {fill: steelblue; stroke: black; stroke-width: 0.5px}.internal-node circle, .internal-node ellipse, .internal-node rect{fill: #CCC; stroke: black; stroke-width: 0.5px;}.node {font: 10px sans-serif;}.node-selected {fill: #f00 !important;}.node-collapsed circle, .node-collapsed ellipse, .node-collapsed rect {fill: black !important;}.node-tagged {fill: #00f;}.branch {fill: none; stroke: #999; stroke-width: 2px;}.clade {fill: #1f77b4; stroke: #444; stroke-width: 2px; opacity: 0.5;}.branch-selected {stroke: #f00 !important; stroke-width: 3px}.branch-tagged {stroke: #00f; stroke-dasharray: 10,5; stroke-width: 2px;}.branch-tracer {stroke: #bbb; stroke-dasharray: 3,4; stroke-width: 1px;}.branch-multiple {stroke-dasharray: 5, 5, 1, 5; stroke-width: 3px;}.tree-widget {}]]></style></defs><defs/><g class="phylotree-container" transform="translate (22,0) "><g class="tree-selection-brush" style="pointer-events: all; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><rect class="background" x="0" width="115.19999999999999" y="0" height="140" style="visibility: hidden; cursor: crosshair;"/><rect class="extent" x="0" width="0" y="0" height="0" style="cursor: move;"/><g class="resize n" transform="translate(0,0)" style="cursor: ns-resize; display: none;"><rect y="-3" width="0" height="6" style="visibility: hidden;"/></g><g class="resize e" transform="translate(0,0)" style="cursor: ew-resize; display: none;"><rect x="-3" width="6" height="0" style="visibility: hidden;"/></g><g class="resize s" transform="translate(0,0)" style="cursor: ns-resize; display: none;"><rect y="-3" width="0" height="6" style="visibility: hidden;"/></g><g class="resize w" transform="translate(0,0)" style="cursor: ew-resize; display: none;"><rect x="-3" width="6" height="0" style="visibility: hidden;"/></g><g class="resize nw" transform="translate(0,0)" style="cursor: nwse-resize; display: none;"><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g><g class="resize ne" transform="translate(0,0)" style="cursor: nesw-resize; display: none;"><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g><g class="resize se" transform="translate(0,0)" style="cursor: nwse-resize; display: none;"><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g><g class="resize sw" transform="translate(0,0)" style="cursor: nesw-resize; display: none;"><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g></g><path class="branch" d="M28.666666666666664,35V52.5H0" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M28.666666666666664,35V17.5H0" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M57.33333333333333,61.25V87.5H0" style="stroke: black;"><title>Length = 2</title></path><path class="branch" d="M57.33333333333333,61.25V35H28.666666666666664" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M86,91.875V122.5H0" style="stroke: black;"><title>Length = 3</title></path><path class="branch" d="M86,91.875V61.25H57.33333333333333" style="stroke: black;"><title>Length = 1</title></path><g class="internal-node" transform="translate(86,91.875)"><circle r="3"/></g><g class="internal-node" transform="translate(57.33333206176758,61.25)"><circle r="3"/></g><g class="internal-node" transform="translate(28.66666603088379,35)"><circle r="3"/></g><g class="node" style="fill: black;" transform="translate(0,17.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">A</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,52.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">B</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,87.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">C</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,122.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">D</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g></g></svg>';
exampleDiv.appendChild(exampleInput);
exampleDiv.appendChild(exampleNewick);
exampleDiv.appendChild(exampleSVG);

/*
add things to the user div
*/
var fileInputter = document.createElement("INPUT");
var newickText = document.createElement("p");
userDiv.appendChild(fileInputter);
userDiv.appendChild(newickText);

/*
function to create tree from input pairwise distances
input distances are lists [distance number, first node name, second node name]
*/
function distToTree(distanceList, missing){
  distanceList.sort(compareDistanceObject);
  //TODO: check that missing is larger than the largest distance value
  var rootDict = new Map();
  var ds = new DisjointSet();
  for (var l of distanceList){
    var d = l[0];
    var u = l[1];
    var v = l[2];
    if (!ds.contains(u)){
      ds.add(u);
      rootDict.set(u, new TreeNode(u, null));
    }
    if (!ds.contains(v)){
      ds.add(v);
      rootDict.set(v, new TreeNode(v, null));
    }
    var su = ds.find(u);
    var sv = ds.find(v);
    if (su != sv){
      var ru = rootDict.get(su);
      rootDict.delete(su);
      var rv = rootDict.get(sv);
      rootDict.delete(sv);
      ds.union(su, sv);
      var p = new TreeNode(d, null);
      p.addChild(ru);
      p.addChild(rv);
      rootDict.set(ds.find(su), p);
      if (ru.isLeaf()){
        ru.edgeLength = d;
      }
      else{
        ru.edgeLength = d - ru.label;
      }
      if (rv.isLeaf()){
        rv.edgeLength = d;
      }
      else{
        rv.edgeLength = d - rv.label;
      }
    }
  }
  if (rootDict.size > 1){
    var topRoot = new TreeNode(missing, null);
    for (var r of rootDict.values()){
      topRoot.addChild(r);
      r.edgeLength = missing - r.label;
    }
    return [topRoot];
  }
  for (var r of rootDict.values()){
    return r;
  }
}

/*
function to compare two distance list objects
used to sort the distance list in the distToTree function
*/
function compareDistanceObject(a, b){
  var da = a[0];
  var db = b[0];
  var comparison = 0;
  if (da > db){
    comparison = 1;
  }
  if (da < db){
    comparison = -1;
  }
  return comparison;
}

/*
create a file input to upload the file with the distances
*/
fileInputter.setAttribute("type", "file");
fileInputter.addEventListener("change", onFileSelect);
function onFileSelect(e){
  var files = e.target.files;
  if (files.length == 1){
    var f = files[0];
    reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function(e){
      var distanceList = [];
      var lines = reader.result.trim().split("\n");
      for (var l of lines){
        l = l.trim();
        var parts = l.split(",");
        var actualParts = [parseFloat(parts[0]), parts[1], parts[2]];
        distanceList.push(actualParts);
      }
      var root = distToTree(distanceList, 100);
      var l = [];
      displayTreeString(root, 0, l);
      treeNewick = root.getNewickString();
      newickText.innerHTML = treeNewick;
    }
  }
}

/*
function to display the tree sort of
mostly just used for testing purposes
*/
function displayTreeString(root, indent, stringList){
  var s = "";
  for (var i = 0; i < indent; i ++){
    s += "-";
  }
  s += root.label;
  stringList.push(s);
  for (var c of root.children){
    displayTreeString(c, indent + 1, stringList);
  }
}
