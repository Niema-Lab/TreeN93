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
var noteDiv = document.createElement("div");
var elementsList = [titleDiv, document.createElement("hr"), buildDiv, document.createElement("hr"), vizDiv, document.createElement("hr"), noteDiv];
for (var element of elementsList){
  document.body.appendChild(element);
}

/*
add content to title div
*/
var titleP = document.createElement("p");
titleP.innerHTML = "Welcome to TreeN93<br><br>TreeN93 is a website for building \
and visualizing single-linkage hierarchical clustering trees of viral sequences \
based on pairwise distances between the sequences and a user-chosen clustering \
threshold<br>View the code at \
<a target='_blank' href='https://github.com/Moshiri-Lab/TreeN93'>\
https://github.com/Moshiri-Lab/TreeN93</a><br>";
titleDiv.appendChild(titleP);

/*
add content to build div
*/
var buildP = document.createElement("p");
buildP.innerHTML = "TreeN93 Build<br><br>A tool to build a tree from pairwise \
TN93 distances between leaf nodes, and to save the tree in the Newick file \
format<br>Use the site at \
<a target='_blank' href='https://moshiri-lab.github.io/TreeN93/Build/'>\
https://moshiri-lab.github.io/TreeN93/Build/</a><br>";
buildDiv.appendChild(buildP);

/*
add content to viz div
*/
var vizP = document.createElement("p");
vizP.innerHTML = "TreeN93 Viz<br><br>A tool to visualize clusters on the tree \
from a user-inputted distance threshold, and to find the minimum, threshold that \
yields the maximum number of clusters<br>Use the site at \
<a target='_blank' href='https://moshiri-lab.github.io/TreeN93/Viz/'>\
https://moshiri-lab.github.io/TreeN93/Viz/</a><br>";
vizDiv.appendChild(vizP);

/*
add content to note div
*/
var noteP = document.createElement("p");
noteP.innerHTML = "Note: All computations performed by TreeN93 are done in the user's \
browser. Thus, TreeN93's ability to operate on large data sets is limited by the \
available memory of the user's browser. If too large of a file is given as an \
input for TreeN93, the computations may fail and the desired results on the \
webpage may not appear. To perform clustering on larger data sets, download the \
Python code and run it locally <a target='_blank' href='https://github.com/Moshiri-Lab/TreeN93/tree/master/Python'>https://github.com/Moshiri-Lab/TreeN93/tree/master/Python</a>";
noteDiv.appendChild(noteP);

/*
add margins to everything
*/
for (var element of elementsList){
  element.style["margin-left"] = "10%";
  element.style["margin-right"] = "10%";
}
