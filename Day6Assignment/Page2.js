display();
function display(ele=undefined){
    let obj="";
    if(ele==undefined){
        ele=JSON.parse(localStorage.getItem('bus'));
    }    
    // console.log(paste);
    ele.forEach(function(data){
        let cur=`<tr>
        <td>${data.Name}</td>
        <td>${data.Src}</td>
        <td>${data.Dest}</td>
        <td>${data.Num}</td>
        <td>${data.Cap}</td>
        </tr>`;
        obj+=cur;
        
    });
    document.getElementById("tdata").innerHTML=obj;
}
    // console.log(obj);

let dat=JSON.parse(localStorage.getItem('bus'));

function add(eve){
    eve.preventDefault();
    // console.log(dat);
    
    let name=document.getElementById("name").value;
    let source=document.getElementById("source").value;
    let destination=document.getElementById("destination").value;
    let number=document.getElementById("number").value;
    let capacity=document.getElementById("capacity").value;
    let newobj={Name:`${name}`,Src:`${source}`,Dest:`${destination}`,Num:`${number}`,Cap:`${capacity}`};
    // console.log(newobj);
    if(dat[0]==null){
        dat=[newobj];
        // console.log(dat);
    }
    else{
        dat=JSON.parse(localStorage.getItem('bus'));
        dat.push(newobj);
        // console.log(dat);
    }
   
    // console.log(dat);
    localStorage.setItem('bus',JSON.stringify(dat));
    display();
    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("capacity").value="";
}

function search(){
    // console.log(dat);
    let SearchValue=document.getElementsByClassName("search")[0].value;
    let SearchValue1=document.getElementsByClassName("search")[0].value;
    let newdata = dat.filter(function (name) {
        return (
            name.Src.toUpperCase().indexOf(SearchValue.toUpperCase()) !=-1 || name.Dest.toUpperCase().indexOf(SearchValue.toUpperCase()) != -1
        );
    });
    display(newdata);

}