/*
Adds elements to front page of TreeN93 site.
Descriptions of the project and what it can be used for.
And links to the different parts. 
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
titleP.innerHTML = "Welcome to TreeN93<br><br>";
titleP.innerHTML += "TreeN93 is a website for building and visualizing single";
titleP.innerHTML += "-linkage hierarchical clustering trees";
titleP.innerHTML += " of viral sequences based on pairwise distances between"
titleP.innerHTML += " the sequences and a user-chosen clustering threshold<br>";
titleP.innerHTML += "View the code at"
titleP.innerHTML += " <a target='_blank' href='https://github.com/Moshiri-Lab/TreeN93'>https://github.com/Moshiri-Lab/TreeN93</a><br>";
titleDiv.appendChild(titleP);

/*
add content to build div
*/
var buildP = document.createElement("p");
buildP.innerHTML = "TreeN93 Build<br><br>";
buildP.innerHTML += "A tool to build a tree from pairwise TN93 distances ";
buildP.innerHTML += "between leaf nodes, and to save the tree in the Newick file format<br>";
buildP.innerHTML += "Use the site at <a target='_blank' href='https://moshiri-lab.github.io/TreeN93/Build/'>https://moshiri-lab.github.io/TreeN93/Build/</a><br>";
buildDiv.appendChild(buildP);

/*
add content to viz div
*/
var vizP = document.createElement("p");
vizP.innerHTML = "TreeN93 Viz<br><br>";
vizP.innerHTML += "A tool to visualize clusters on the tree from a user-"
vizP.innerHTML += "inputted distance threshold, and to find the minimum";
vizP.innerHTML += " threshold that yields the maximum number of clusters<br>";
vizP.innerHTML += "Use the site at <a target='_blank' href='https://moshiri-lab.github.io/TreeN93/Viz/'>https://moshiri-lab.github.io/TreeN93/Viz/</a><br>";
vizDiv.appendChild(vizP);

/*
add margins to everything
*/
for (var element of elementsList){
  element.style["margin-left"] = "10%";
  element.style["margin-right"] = "10%";
}
