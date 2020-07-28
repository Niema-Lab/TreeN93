/*
GENERAL DESCRIPTION GOES HERE OF THIS ENTIRE THING
*/

/*
variables to be used throughout
*/
var treeNewick = "";

/*
create divs on the page
*/
var titleDiv = document.createElement("div");
var introDiv = document.createElement("div");
var exampleDiv = document.createElement("div");
var userDiv = document.createElement("div");
var divsList = [titleDiv, introDiv, exampleDiv, userDiv];
for (var div of divsList){
  document.body.appendChild(div);
}

/*
add text to the title div
*/
var titlePar = document.createElement("p");
titlePar.innerHTML = "TreeN93 Build - A Tool for Building Newick Trees from Pairwise Distances";
titlePar.style["font-size"] = "20px";
titleDiv.appendChild(titlePar);

/*
add text to the intro div
*/
var introPar = document.createElement("p");
var introParStrings = [
  "This tool is used to create Newick formatted representations of clustering trees",
  " from the TN93 pairwise distances between the leaves.<br>",
  "The input should be in a .csv file where the first column is distance, ",
  "and the second and third columns are the names of the leaf nodes separated by that distance.<br>",
  "The Newick file can be saved and then uploaded in the ",
  "<a href='https://moshiri-lab.github.io/TreeN93/Viz'>TreeN93/Viz</a>",
  " clustering tool.<br><br>",
  "Choose an input file by clicking the 'Choose File' button.<br>",
  "Save the Newick tree by copying the text from this page, ",
  "or by clicking the 'Save Newick File' button.<br><br>",
  "See the example below for formatting:"
];
introPar.innerHTML = "";
for (var string of introParStrings){
  introPar.innerHTML += string;
}
introDiv.appendChild(introPar);

/*
add things to the example div
also, format the example div like a flexbox
*/
exampleDiv.style["display"] = "flex";
exampleDiv.style["align-items"] = "center";
var exampleInputDiv = document.createElement("div");
var arrow1Div = document.createElement("div");
var exampleNewickDiv = document.createElement("div");
var arrow2Div = document.createElement("div");
var exampleSVGDiv = document.createElement("div");
for (var div of [exampleInputDiv, arrow1Div, exampleNewickDiv, arrow2Div, exampleSVGDiv]){
  div.style["margin"] = "10px";
  exampleDiv.appendChild(div);
}
var realDivs = [exampleInputDiv, exampleNewickDiv, exampleSVGDiv];
var divLabels = ["Your Input", "Newick String", "Tree Visualization"];
var divContents = [
  "1,A,B<br>2,A,C<br>3,A,D<br>2,B,C<br>3,C,D<br>",
  "(((A:1,B:1)1:1,C:2)2:1,D:3)3",
  '<svg width="137.2" height="140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs xmlns="http://www.w3.org/1999/xhtml"><style type="text/css"><![CDATA[.tree-selection-brush .node circle, .node ellipse, .node rect {fill: steelblue; stroke: black; stroke-width: 0.5px}.internal-node circle, .internal-node ellipse, .internal-node rect{fill: #CCC; stroke: black; stroke-width: 0.5px;}.node {font: 10px sans-serif;}.branch {fill: none; stroke: #999; stroke-width: 2px;}]]></style></defs><defs/><g transform="translate (22,0) "><g><rect x="0" width="115.2" y="0" height="140" style="visibility: hidden; "/><rect x="0" width="0" y="0" height="0"/><g transform="translate(0,0)" ><rect y="-3" width="0" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)" ><rect x="-3" width="6" height="0" style="visibility: hidden;"/></g><g transform="translate(0,0)" ><rect y="-3" width="0" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)"><rect x="-3" width="6" height="0" style="visibility: hidden;"/></g><g transform="translate(0,0)" style="display: none;"><rect x="-3" y="-3" width="6" height="6" /></g><g transform="translate(0,0)" ><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)" ><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)" style=" display: none;"><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g></g><path class="branch" d="M28.666666666666664,35V52.5H0" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M28.666666666666664,35V17.5H0" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M57.33333333333333,61.25V87.5H0" style="stroke: black;"><title>Length = 2</title></path><path class="branch" d="M57.33333333333333,61.25V35H28.666666666666664" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M86,91.875V122.5H0" style="stroke: black;"><title>Length = 3</title></path><path class="branch" d="M86,91.875V61.25H57.33333333333333" style="stroke: black;"><title>Length = 1</title></path><g class="internal-node" transform="translate(86,91.875)"><circle r="3"/></g><g class="internal-node" transform="translate(57.33333206176758,61.25)"><circle r="3"/></g><g class="internal-node" transform="translate(28.66666603088379,35)"><circle r="3"/></g><g class="node" style="fill: black;" transform="translate(0,17.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">A</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,52.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">B</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,87.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">C</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,122.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">D</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g></g></svg>'
];
for (var i = 0; i < 3; i ++){
  var label = document.createElement("p");
  label.innerHTML = divLabels[i];
  var content = document.createElement("p");
  content.innerHTML = divContents[i];
  content.style["padding"] = "15px";
  content.style["border-style"] = "solid";
  content.style["border-color"] = "black";
  content.style["border-width"] = "1px";
  realDivs[i].appendChild(label);
  realDivs[i].appendChild(content);
}
for (arrowDiv of [arrow1Div, arrow2Div]){
  var content = document.createElement("p");
  content.innerHTML = "&rArr;";
  content.style["font-size"] = "40px";
  arrowDiv.appendChild(content);
}

/*
add things to the user div
*/
var fileInputter = document.createElement("INPUT");
var newickText = document.createElement("p");
userDiv.appendChild(document.createElement("hr"));
userDiv.appendChild(document.createElement("br"));
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
      newickText.innerHTML = "Newick tree representation of the inputted distances matrix:<br>";
      newickText.innerHTML += treeNewick;
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

/*
create button to allow user to save the newick tree in a file
*/
var saveNewickButton = document.createElement("button");
saveNewickButton.innerHTML = "Save Newick File";
saveNewickButton.addEventListener("click", function(){
  var link = document.createElement("a");
  link.href="data:text/txt," + encodeURIComponent(treeNewick);
  link.download = "tree.nwk";
  link.click();
});
userDiv.appendChild(saveNewickButton);
