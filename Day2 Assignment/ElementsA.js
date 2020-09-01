var arr=["Hello","My","Name","Is","Phani","Shankar"];
var Strings_With_Element="a";
console.log("The words with '"+Strings_With_Element+"' are: " );
arr.forEach(function(element){
    for(let i=0;i<element.length;i++){
        if(element[i]==Strings_With_Element){
           console.log(element+" ");
        }
    } 
})