
function show(event, tabName) {
    let contents = document.getElementsByClassName("section");
    for (let i=0; i<contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
