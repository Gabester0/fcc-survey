const form = document.getElementById("survey-form");
const label = document.querySelectorAll("label");

form.addEventListener('mouseenter', e => {
    label.forEach(l => l.style.color = "black");
});

form.addEventListener('mouseleave', e=>{
    label.forEach(l => l.style.color = "white");
});