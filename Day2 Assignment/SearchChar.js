let string1 = "Pyla Phani Shankar";
let Char_To_Search="P";
for(let i=0;i<string1.length;i++){
    if (Char_To_Search==string1[i]){
        console.log("The Character"+Char_To_Search+"is at index "+i);
    }
}

//or we can simply use index, 

console.log(string1.indexof("P"));