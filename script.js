const form = document.getElementById("survey-form");
const label = document.querySelectorAll("label");
const dropDown = document.getElementById("dropdown");

form.addEventListener('mouseenter', e => {
    label.forEach(l => l.style.color = "black");
    dropDown.style.color = "black";
});

form.addEventListener('mouseleave', e=>{
    label.forEach(l => l.style.color = "white");
    dropDown.style.color = "white";
});

dropDown.addEventListener("change", e =>{ 
    var sel = dropDown.value;
    alert(sel);
});