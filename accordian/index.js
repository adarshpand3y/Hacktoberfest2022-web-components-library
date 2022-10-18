const ouritems=document.getElementsByClassName('item');
const iconopen=document.getElementsByClassName('iconopen');
const iconclose=document.getElementsByClassName('iconclose');
console.log(iconclose);
console.log(ouritems);
for(let i=0;i<ouritems.length;i++){
    iconclose[i].style.display = "none";
    ouritems[i].addEventListener('click',()=>{
     
      const result=  ouritems[i].classList.toggle('active');
      if(result){
        iconclose[i].style.display = "block";
        iconopen[i].style.display ="none";
      }else{
        iconclose[i].style.display = "none";
        iconopen[i].style.display ="block";
      }
    });
}