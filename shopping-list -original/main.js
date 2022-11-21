// working on like button 
// get element by class ou by id 

var  likebtn = document.getElementsByClassName("like");

for(let i=0; i<likebtn.length; i++){ 
    likebtn[i].addEventListener("click", function(){
        if(likebtn[i].style.color=='red'){
     likebtn[i].style.color='black'}
     else { likebtn[i].style.color='red'}
 })};
// working on plus button 

var plusbtn=document.getElementsByClassName("plus-btn")

for(let s =0; s<plusbtn.length; s++)
{ plusbtn[s].addEventListener("click", function(){
plusbtn[s].previousElementSibling.value ++ 
totalprice() 
} )


};
// working on min btn 
var minbtn =document.querySelectorAll(".minus-btn")

for(let k=0 ;k<minbtn.length; k++){ 
    minbtn[k].addEventListener("click",function(){ 
       if( minbtn[k].nextElementSibling.value > 1)
      { minbtn[k].nextElementSibling.value-- 
        totalprice() 
    }
    } )
        

};
// working on delete btn
var deletebtn=document.querySelectorAll(".delete")

for(let k=0 ; k < deletebtn.length; k++){ 
    deletebtn[k].addEventListener("click",function(){
        
    deletebtn[k].parentElement.remove() 
    totalprice()
} )
 

};

// Total priceee 
function totalprice(){
var val= document.querySelectorAll(".Quant")

var price = document.querySelectorAll(".price")  
var final = document.getElementById("finalPrice")

let sum =0
for(i=0;i<val.length;i++){

    sum=sum + (parseFloat(price[i].innerHTML)* parseInt(val[i].value) )
}
final.value=sum.toFixed(2)

};












