const form = document.getElementById("survey-form");
const label = document.querySelectorAll("label");
const dropDown = document.getElementById("dropdown");
const number = document.getElementById("number");

form.addEventListener("focusin", e => {
    label.forEach(l => l.style.color = "black");
    dropDown.style.color = "black";
})

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
    updateNumberFormat(sel);
});

function updateNumberFormat(sel){
    if(sel === "mexico"){
        number.pattern = "[0-9]{2,3}-[0-9]{4}-[0-9]{4}";
        number.placeholder="00-0000-0000 or 000-0000-0000";
    } 
    if(sel === "us"){
        number.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        number.placeholder="000-000-0000";
    }
}
