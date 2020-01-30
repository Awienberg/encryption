'use strict';
//Get element by id
var $ = function (foo) {
    return document.getElementById(foo);
};

function uniKeyCode(event) {
    var key = event.keyCode;
    $("keyCode").innerHTML = "keyCode: " + parseInt(key + 3); //lav tal til nummer
    $("encryption").innerHTML = "Encryption: " + String.fromCharCode(key + 3); //lav tal til bogstav
}