/*
Adds elements to front page of TreeN93 site.
Descriptions of the project and what it can be used for.
*/

/*
create divs and add them to page
*/
var titleDiv = document.createElement("div");
var buildDiv = document.createElement("div");
var vizDiv = document.createElement("div");
var elementsList = [titleDiv, document.createElement("hr"), buildDiv, document.createElement("hr"), vizDiv];
for (var element of elementsList){
  document.body.appendChild(element);
}

/*
add content to title div
*/
var titleP = document.createElement("p");
titleP.innerHTML = "Welcome to TreeN93<br>";
titleP.innerHTML += "TreeN93 is a website for building and visualizing single-linkage hierarchical clustering trees";
titleP.innerHTML += " of viral sequences based on pairwise distances between the sequences and a chosen clustering threshold<br>";
titleP.innerHTML += "View the code at <a href='https://github.com/Moshiri-Lab/TreeN93/tree/master'>https://github.com/Moshiri-Lab/TreeN93/tree/master</a><br>";
titleDiv.appendChild(titleP);

/*
add content to build div
*/
var buildP = document.createElement("p");
buildP.innerHTML = "TreeN93 Build<br>";
buildP.innerHTML += "A tool to build a tree from pairwise TN93 distances ";
buildP.innerHTML += "between leaf nodes, and to save the tree in the Newick file format<br>";
buildP.innerHTML += "Use the site at <a href='https://moshiri-lab.github.io/TreeN93/Build/'>https://moshiri-lab.github.io/TreeN93/Build/</a><br>";
buildDiv.appendChild(buildP);

/*
add content to viz div
*/
var vizP = document.createElement("p");
vizP.innerHTML = "TreeN93 Viz<br>";
vizP.innerHTML += "A tool to visualize clusters on the tree from a user-inputted distance threshold";
vizP.innerHTML += ", and to find the minimum threshold that yields the maximum number of clusters<br>";
vizP.innerHTML += "Use the site at <a href='https://moshiri-lab.github.io/TreeN93/Viz/'>https://moshiri-lab.github.io/TreeN93/Viz/</a><br>";
vizDiv.appendChild(vizP);

/*
add margins to everything
*/
for (var element of elementsList){
  element.style["margin-left"] = "10%";
  element.style["margin-right"] = "10%";
}
