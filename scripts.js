function updateCopyright() {
    year = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "&copy; " + year + " Trevor Kyle Smith";
}

document.addEventListener("DOMContentLoaded", function(event) { 
    updateCopyright();
});