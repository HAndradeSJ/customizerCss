function Fundo(){
   var back = document.getElementById("back").value;
   document.body.style.backgroundColor = back;
}
const inputs = document.querySelectorAll("input")
function Update(){
    const valor = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value +valor)
}
inputs.forEach((input)=>{
    input.addEventListener('change',Update)
})