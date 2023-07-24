/* Place your JavaScript in this file */
/*document.getElement[ById("findmydocs").innerHTML = "hello javascript";*/
function findmydocs(){
  var x = document.getElementById("img");  
  document.getElementById("findmydocs").innerText= "DOWNLOAD MY DOCS";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

 
