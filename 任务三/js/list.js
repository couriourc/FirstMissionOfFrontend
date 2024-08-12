var a = 0;
var pic = document.getElementById("photos");

function appear() {
    var obj = document.getElementsByClassName("four");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.visibility = "visible"
    }
}

function disappear() {
    var obj = document.getElementsByClassName("four");
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.visibility = "hidden"
    }
}

function change() {
    pic.src = "img/link" + a + ".jpg";
    a += 1;
    if (a == 3) {
        a = 0;
    }
    setTimeout(change, 3000);
}
document.onload = change();