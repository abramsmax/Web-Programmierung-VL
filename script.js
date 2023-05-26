console.log("hello world")

document.addEventListener("DOMContentLoaded", () => {
    console.log("Dom Content loaded")

    let eingabetext = document.getElementById("text"); 
   
    document.getElementById('Button zur Liste hinzufügen').addEventListener('click', createElement);
    function createElement(){
      let container = document.getElementById('liste');
      let newElm = document.createElement('li');
      newElm.innerText = eingabetext.value;
      container.appendChild(newElm);
    }
})