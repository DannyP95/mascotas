function clickBurguer() {
    let burguer = document.getElementById("menuHeader");
    burguer.classList.toggle("show");

    if (burguer.style.display !== "flex" || burguer.style.display === "") {
        burguer.style.display = "flex";
    } else {
        burguer.style.display = "none";
    }
}