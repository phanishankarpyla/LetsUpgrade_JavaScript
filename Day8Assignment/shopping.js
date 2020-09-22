let items=[{
        name:"MiTv 4X 42inch.",
        color:"Black",
        id:"MITV42",
        price:23000,
        description:"Best viewing experience",
        image:"items/tv.jpg"    
    },
    {
        name:"Laptop 15th Gen",
        color:"Black",
        id:"LAP15GEN",
        price:45000,
        description:"Best Laptop at this price point",
        image:"items/lap.jpg"
    },
    {
        name:"Iphone 11 pro",
        color:"White",
        id:"IPWH11",
        price:105000,
        description:"Best phone you can ask for",
        image:"items/ph.jpeg"    
    },
    {
        name:"Air Conditioner 2-ton",
        color:"White-Grey",
        id:"AC2T",
        price:25000,
        description:"Cools faster than ever",
        image:"items/ac.jpg"    
    },
    {
        name:"Godrej Freezer",
        color:"Grey",
        id:"GFRG21",
        price:99454,
        description:"Store food like never before",
        image:"items/fr.jpg"    
    },
    {
        name:"Washing Machine",
        color:"Silver",
        id:"KT3215",
        price:32000,
        description:"Best in class washing experience",
        image:"items/wsh.jpeg"    
    },
    ]

function printing(matter=items,who='body'){
    let tempstring="";
    matter.forEach(function(item,index){
        let {name,price,color,id,description,image}=item;
        if (who=="body"){
            tempstring+=`<div class="item">
            <img class="img" src=${image} width=100%/>
            <p>${name}<p>
            <p>${color}</p>
            <p>Rs.${price}</p>
            <p>${description}</p>
            <p><button class="but" onclick="buynow(${index})" >BuyNow</button></p>
            </div>`;
        }
        else if(who=="cart"){
            tempstring+=`
            <div class="item">           
            <img class="img" src=${image} width=100%/>
            <p>${name}<p>
            <p>${color}</p>
            <p>Rs.${price}</p>
            <p>${description}</p>
            <p>Items in Cart:${count}</p>
            <p><button class="but" onclick="remnow(${index})">Remove</button></p>
            </div>`;
        }
    })
    // console.log(tempstring);
    document.getElementById(who).innerHTML=tempstring;
}

printing();
let cart=[];
let count=0;
let log=[];

function buynow(index){
    if(log.includes(index)){
        window.alert("You already added this to your cart!");
        return;
    }
    log.push(index);
    count+=1
    let pro=items[index];
    cart.push(pro);
    printing(cart,'cart');
}

function remnow(index){
    count-=1
    cart.splice(index,1)
    printing(cart,'cart')
}
let pricefilter=[];
function filter(){
    let min=document.getElementById('min').value;
    let max=document.getElementById('max').value;
    items.forEach(function(each){
        if (each.price<=max && each.price>=min){
            pricefilter.push(each);
        }
    })
    printing(pricefilter,);
    document.getElementById('min').value="";
    document.getElementById('max').value="";
}

function back(){
    printing();
}