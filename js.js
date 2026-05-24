


const navbar = document.getElementById("navbar");
const mainFram = document.getElementById("main-fram");
const sliders = document.getElementById("slider");
const showimg = document.getElementById("showimg");
const showPro = document.getElementById("showpro");
const dcard = document.getElementById("dcard");
const numpec = document.getElementById("numpec");
const btnCart = document.getElementById("btncart");
const plus=document.getElementById("plus")
const minus=document.getElementById("minus")
const numpic=document.getElementById("numpic")
const cart=document.getElementById("cart")
const cm=document.getElementById("cardminu")
const imgcl=document.getElementById("closeimg")
const addpro=document.getElementById("cartdiv")
const pro=document.getElementById("pro")
const numitem=document.getElementById("numitem")
const prize=document.getElementById("prize")
const body=document.body
const index=0;

  const img2=sliders.children[1].src;
  showimg.innerHTML=`<img src="${img2}">`
    

function slid(index){
  
    sliders.children[index].addEventListener("click",()=>{
        const img=sliders.children[index].src;
 showimg.innerHTML=`<img src="${img}">`})}
slid(0)
slid(1)
slid(2)
slid(3)
slid(4)

  let num=0;

minus.addEventListener("click",()=>{
  if(num>0)
      num--;
        numpic.innerHTML=`<p>${num}</p>` ;

})
plus.addEventListener("click",()=>{
 num++;
  numpic.innerHTML=`<p>${num}</p>` ;
})


cart.addEventListener("click",()=>{
 cm.classList.remove("active")
})
imgcl.addEventListener("click",()=>{
   cm.classList.add("active")

})

const pronam=document.querySelector(".pronam")
const img=document.querySelector(".img")
const propriz=document.querySelector(".propriz")
const numcart=document.getElementById("numcart")

pro.style.display="none"
btnCart.addEventListener("click",()=>{

fetch('./prodects.json').then(res=>res.json()).then(
  data=>{
    img.innerHTML=`<img src="${data.prodect1.IMG}" >`
    pronam.innerHTML=data.prodect1.NAME
    propriz.innerHTML=data.prodect1.PRICE
    
  
  }
)
pro.style.display="flex";
numcart.innerText=num;
numitem.innerText=num;
prize.innerText=data.prodect1.PRICE*num
})
const remove =document.getElementById("remove")  

remove.addEventListener("click",()=>{
  pro.style.display="none"

})




  
  



