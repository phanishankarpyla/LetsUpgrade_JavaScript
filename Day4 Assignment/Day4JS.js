
// Question-1

const image=document.getElementById("img");
const realimage = image.src;    
function button1(){
    image.src= realimage ;
}

function button2(){
    image.src="https://cdn.ndtv.com/tech/gadgets/google_earth_screenshot_ndtv.jpg";
}

function button3(){
    image.src="https://www.businessinsider.in/thumb/msid-73772202,width-600,resizemode-4,imgsize-330331/tech/apps/news/google-earth-will-now-let-you-explore-space-from-your-smartphone-but-it-still-pales-in-comparison-to-the-web-browser/googleearth.jpg";
}

// Question-2

function text(){
    const txt=document.getElementsByClassName("text");
    txt[1].value=txt[0].value;
}

//Question-3

let Candidate=[{name:"Phani",age:"22",country:"India",hobbies:["Books","Scripts","Gaming"]}
,{name:"Shankar",age:"19",country:"Canada",hobbies:["Networks","Coding","Youtube"]}
,{name:"Pyla",age:"40",country:"Brazil",hobbies:["News","Riding","Movies"]}
,{name:"Alekhya",age:"23",country:"India",hobbies:["Books","Youtube","TV"]}];

console.log("All objects:");
Candidate.forEach(function(obj){
    console.log(obj);
});

//Question-4
console.log("");
console.log("Objects with age less than 30");
Candidate.forEach(function(obj){
    if(obj.age<30){
        console.log(obj);
}});
console.log("");
console.log("Objects with country as India");
Candidate.forEach(function(obj){
    if(obj.country=="India"){
        console.log(obj);
}});
