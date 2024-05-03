const flowers= ["Rose","Lotus","Lily","Sunflower","Tulip","Marigold","jasmine","white-Lotus","water-lily","Pansy"];
let text="";
for(let i=0;i<flowers.length;i++){
    text+= flowers[i]+"<br>";
}
document.getElementById("flowers").innerHTML = text