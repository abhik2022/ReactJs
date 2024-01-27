const btn=document.querySelector('.btn');
const back=document.querySelector('.main');
console.log(back)
btn.addEventListener('click',()=>{
    console.log("hello");
    back.innerHTML="DIV CHANGED";
    back.style='background-color:pink'
})