
function handleClickBigger() {
    //alert ("Hello, world!");
    document.getElementById("text").style.fontSize = "2em";
}

function handleClickRadio() {
    //alert ("Hello, world!");
    const fancyRadio = document.getElementById("option1");

    if (fancyRadio.checked) {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    } else {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
    }
}

function handleClickMoo() {
    const textArea = document.getElementById("text");

    textArea.value = textArea.value.split(".").join(" Moo.");
    textArea.value = textArea.value.toUpperCase();
}