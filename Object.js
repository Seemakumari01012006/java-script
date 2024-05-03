 //creating object
 obj={
    name: "Seema", roll:54,class:"bca",
    name1:"Sapna",roll1:12,class1:"bca",
    name2:"Neha", roll2:2,  class2:"5",
    name3:"Dheeraj",roll3: 24, Class3:"7",
    name4:"Roushan",roll4: 34, Class4:"8"
};
//access through id
document.getElementById("demo").innerHTML=
"Name: "+obj.name+", Roll:  "+obj.roll+", Class: "+obj.class+
"<br/> Name: "+obj.name1+ ", Roll: "+obj.roll1+ ", Class: "+obj.class1+
"<br/> Name: "+obj.name2+ ", Roll:" +obj.roll2+ ", Class: "+obj.class2+
"<br/> Name: "+obj.name3+", Roll:" +obj.roll3+ ", Class:"+obj.Class3+
"<br/> Name:" +obj.name4+", Roll:" +obj.roll4+" , Class:"+obj.Class4;