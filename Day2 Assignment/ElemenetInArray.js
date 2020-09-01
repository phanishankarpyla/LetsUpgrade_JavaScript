var arr=["Hello","My","Name","Is","Phani","Shankar"];
var Str_I_Want="Phani";
arr.forEach(function(element){
   if(element==Str_I_Want){
       console.log("The Element You Want is "+Str_I_Want+"and its index in the array is "+arr.indexOf("Phani"));
   } 
})