const liArr = document.querySelectorAll("li");

liArr.forEach(e => {
    e.innerText = e.innerText + "  X";
    e.style.border = "3px dashed chartreuse";
})