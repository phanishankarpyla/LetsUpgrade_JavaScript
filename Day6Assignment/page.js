let objdata=[
    {
        Name:"Phani",
        Age:22,
        City:"Vizag",
        Salary:20000},
    {
        Name:"Shankar",
        Age:25,
        City:"Hyderabad",
        Salary:25000},
    {
        Name:"Alekhya",
        Age:23,
        City:"Vizag",
        Salary:35000
    },
    {
        Name:"Pyla",
        Age:20,
        City:"Kashmir",
        Salary:80000   
    },
    {
        Name:"Phallu",
        Age:2,
        City:"Araku",
        Salary:3000
    }];
    
printing(objdata);

function printing(fulldata){
    let tabledata="";
    fulldata.forEach(function(data,index) {
        let currentdata=`<tr>
        <td>${index+1}</td>
        <td>${data.Name}</td>
        <td>${data.Age}</td>
        <td>${data.City}</td>
        <td>${data.Salary}</td>
        <td><button class="del" onclick="deletion(${index})">Delete</button></td>
        </tr>`;

        tabledata=tabledata+currentdata;    
    });
    
    document.querySelector("#tdata").innerHTML=tabledata;
}

function searching(){
    let SearchValue=document.getElementsByClassName("typesearch")[0].value;
    let newdata = objdata.filter(function (name) {
        return (
          name.Name.toUpperCase().indexOf(SearchValue.toUpperCase()) != -1
        );
        });
    printing(newdata);
}

function deletion(ind){
    objdata.splice(ind,1);
    printing(objdata);  

}

