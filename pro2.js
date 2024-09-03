const inp=document.querySelector("#ent");
const btn=document.querySelector("#btn");

btn.addEventListener("click",function(){

const wo=inp.value
const spl=wo.split("");
const rev=spl.slice().reverse();
const joo=spl.join("");
const jor=rev.join("");
if(joo===jor){
    alert("palindrome")
}
else{
    alert("😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂no")
}
})
