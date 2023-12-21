function gantiNama() {
    let nama=prompt("masukan nama anda", "");
    document.getElementById("halo-nama").innerHTML = nama;
}

gantiNama();
let navbar =document.getElementById("navbar");
let icon = document.getElementById("my-Profile");

icon.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
});