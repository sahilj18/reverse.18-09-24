const inputE1 = window.document.querySelector("[chak-input]");
const buttonE1 = window.document.querySelector("[chak-btn]");
const chipE1 = window.document.querySelector("[chak-chip]");


buttonE1.addEventListener("click",() => {
console.log(inputE1.value);

});
inputE1.addEventListener("keypress",(e) =>{
if (e.keyCode === 13){
    console.log(inputE1.value);
}


})