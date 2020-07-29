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
  "The input should be in a CSV file, and can be formatted either as a list or as a matrix.<br>",
  "The Newick file can be saved and then uploaded in the ",
  "<a href='https://moshiri-lab.github.io/TreeN93/Viz'>TreeN93/Viz</a>",
  " clustering tool.<br><br>",
  "Choose an input file by clicking one of the 'Choose File' buttons.<br>",
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
many nested divs and paragraphs
*/
exampleDiv.style["display"] = "flex";
exampleDiv.style["align-items"] = "center";
var exampleSubDivs = [];
var labelTexts = ["Your Input", "&rArr;", "Newick String", "&rArr;", "Tree Visualization"];
for (var i = 0; i < 5; i ++){
  var div = document.createElement("div");
  div.style["margin"] = "10px";
  var p = document.createElement("p");
  p.innerHTML = labelTexts[i];
  div.appendChild(p);
  if (i % 2 != 0){ //arrow
    p.style["font-size"] = "40px";
  }
  exampleSubDivs[i] = div;
  exampleDiv.appendChild(div);
}
var exampleInputDivInner = document.createElement("div");
exampleInputDivInner.style["display"] = "flex";
exampleInputDivInner.style["align-items"] = "center";
var exampleInputParText = [
  "1,A,B<br>2,A,C<br>3,A,D<br>2,B,C<br>3,B,D<br>3,C,D<br>",
  "OR",
  ",A,B,C,D<br>A,0,1,2,3<br>B,1,0,2,3<br>C,2,2,0,3<br>D,3,3,3,0"
];
for (var i = 0; i < 3; i ++){
  var exampleInputPar = document.createElement("p");
  exampleInputPar.innerHTML = exampleInputParText[i];
  exampleInputPar.style["padding"] = "15px";
  exampleInputDivInner.appendChild(exampleInputPar);
}
exampleSubDivs[0].appendChild(exampleInputDivInner);
var exampleNewickLabel = document.createElement("p");
exampleNewickLabel.innerHTML = "Newick String";
var exampleNewickContent = document.createElement("p");
exampleNewickContent.innerHTML = "(((A:1,B:1)1:1,C:2)2:1,D:3)3";
exampleNewickContent.style["padding"] = "15px";
exampleSubDivs[2].appendChild(exampleNewickContent);
var exampleSVGContent = document.createElement("p");
exampleSVGContent.innerHTML = '<svg width="137.2" height="140" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs xmlns="http://www.w3.org/1999/xhtml"><style type="text/css"><![CDATA[.tree-selection-brush .node circle, .node ellipse, .node rect {fill: steelblue; stroke: black; stroke-width: 0.5px}.internal-node circle, .internal-node ellipse, .internal-node rect{fill: #CCC; stroke: black; stroke-width: 0.5px;}.node {font: 10px sans-serif;}.branch {fill: none; stroke: #999; stroke-width: 2px;}]]></style></defs><defs/><g transform="translate (22,0) "><g><rect x="0" width="115.2" y="0" height="140" style="visibility: hidden; "/><rect x="0" width="0" y="0" height="0"/><g transform="translate(0,0)" ><rect y="-3" width="0" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)" ><rect x="-3" width="6" height="0" style="visibility: hidden;"/></g><g transform="translate(0,0)" ><rect y="-3" width="0" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)"><rect x="-3" width="6" height="0" style="visibility: hidden;"/></g><g transform="translate(0,0)" style="display: none;"><rect x="-3" y="-3" width="6" height="6" /></g><g transform="translate(0,0)" ><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)" ><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g><g transform="translate(0,0)" style=" display: none;"><rect x="-3" y="-3" width="6" height="6" style="visibility: hidden;"/></g></g><path class="branch" d="M28.666666666666664,35V52.5H0" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M28.666666666666664,35V17.5H0" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M57.33333333333333,61.25V87.5H0" style="stroke: black;"><title>Length = 2</title></path><path class="branch" d="M57.33333333333333,61.25V35H28.666666666666664" style="stroke: black;"><title>Length = 1</title></path><path class="branch" d="M86,91.875V122.5H0" style="stroke: black;"><title>Length = 3</title></path><path class="branch" d="M86,91.875V61.25H57.33333333333333" style="stroke: black;"><title>Length = 1</title></path><g class="internal-node" transform="translate(86,91.875)"><circle r="3"/></g><g class="internal-node" transform="translate(57.33333206176758,61.25)"><circle r="3"/></g><g class="internal-node" transform="translate(28.66666603088379,35)"><circle r="3"/></g><g class="node" style="fill: black;" transform="translate(0,17.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">A</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,52.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">B</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,87.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">C</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g><g class="node" style="fill: black;" transform="translate(0,122.5)"><text dy="3.96" dx="3.96" transform="translate(-20,0)" text-anchor="start" style="opacity: 1; font-size: 12px;">D</text><line x1="0" x2="0" y1="0" y2="0" class="branch-tracer" transform="" style="opacity: 1;"/></g></g></svg>';
exampleSVGContent.style["padding"] = "15px";
exampleSubDivs[4].appendChild(exampleSVGContent);
for (var element of [exampleInputDivInner, exampleNewickContent, exampleSVGContent]){
  element.style["border-style"] = "solid";
  element.style["border-color"] = "black";
  element.style["border-width"] = "1px";
}

/*
add things to the user div
*/
var fileInputterList = document.createElement("INPUT");
var fileInputterMatrix = document.createElement("INPUT");
var inputListDiv = document.createElement("div");
var inputListLabel = document.createElement("p");
inputListLabel.innerHTML = "Distance List";
var inputMatrixDiv = document.createElement("div");
inputMatrixLabel = document.createElement("p");
inputMatrixLabel.innerHTML = "Distance Matrix";
var newickText = document.createElement("p");
userDiv.appendChild(document.createElement("hr"));
userDiv.appendChild(document.createElement("br"));
inputListDiv.appendChild(inputListLabel);
inputListDiv.appendChild(fileInputterList);
inputMatrixDiv.appendChild(inputMatrixLabel);
inputMatrixDiv.appendChild(fileInputterMatrix);
var inputsDiv = document.createElement("div");
inputsDiv.style["display"] = "flex";
inputsDiv.appendChild(inputListDiv);
inputsDiv.appendChild(inputMatrixDiv);
userDiv.appendChild(inputsDiv);
userDiv.appendChild(document.createElement("br"));
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
create a file input to upload the file with the distances as a list
*/
fileInputterList.setAttribute("type", "file");
fileInputterList.addEventListener("change", onFileSelectList);
function onFileSelectList(e){
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
      newickText.innerHTML = "Newick tree representation of the inputted distances list:<br>";
      newickText.innerHTML += treeNewick;
    }
  }
}

/*
create a file input to upload the file with the distances as a matrix
*/
fileInputterMatrix.setAttribute("type", "file");
fileInputterMatrix.addEventListener("change", onFileSelectMatrix);
function onFileSelectMatrix(e){
  var files = e.target.files;
  if (files.length == 1){
    var f = files[0];
    reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function(e){
      var distanceMatrix = [];
      var distanceList = [];
      var lines = reader.result.trim().split("\n");
      var firstLine = lines.shift();
      var firstLineParts = firstLine.split(",");
      firstLineParts.shift();
      for (var nodeName of firstLineParts){
        distanceMatrix.push([]);
      }
      for (var i = 0; i < lines.length; i ++){
        var l = lines[i].trim();
        var distances = l.split(",");
        distances.shift();
        distanceMatrix[i] = distances;
      }
      for (var i = 0; i < distanceMatrix.length; i ++){
        for (var j = i + 1; j < distanceMatrix.length; j ++){
          var d = distanceMatrix[i][j];
          var parts = [parseFloat(d), firstLineParts[i], firstLineParts[j]];
          distanceList.push(parts);
        }
      }
      console.log(distanceList);
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

/*
(((A:1.0000000000,B:1.0000000000)1:1.0000000000,C:2.0000000000)2:1.0000000000,D:3.0000000000)3
(((A:1.0000000000,B:1.0000000000)1:1.0000000000,C:2.0000000000)2:1.0000000000,D :3.0000000000)3
first one is from list, second is from matrix
why is matrix adding a space after D?
space goes away when file is saved ... why this happening?
this happens on a different file also
  last node name gets an extra space for some reason
*/
