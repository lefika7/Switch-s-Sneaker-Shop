function addReview(){
 
let name = document.getElementById("name").value;
let review = document.getElementById("review").value;
 
if(name === "" || review === ""){
alert("Please fill in all fields");
return;
}
 
let reviewBox = document.createElement("div");
reviewBox.className = "review";
 
reviewBox.innerHTML = "<h4>" + name + "</h4><p>" + review + "</p>";
 
document.getElementById("review-container").appendChild(reviewBox);
 
document.getElementById("name").value = "";
document.getElementById("review").value = "";
 
}
 