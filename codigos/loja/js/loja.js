let motorola = 0;
let tv = 0;
let note = 0;
const precoMotorola = 1000;
const precotv = 2500
const preconote = 1500

function somarmotorola() {
    motorola++;

    document.getElementById("motorolaq").innerHTML = motorola;
    document.getElementById("valormotorola").innerHTML = motorola * precoMotorola;
}

function diminuirmotorola() {
    if (motorola > 0) {
        motorola--;

        document.getElementById("motorolaq").innerHTML = motorola;
        document.getElementById("valormotorola").innerHTML = motorola * precoMotorola;
    }
}

function somartv(){
    tv++

    document.getElementById("tvq").innerHTML = tv;
    document.getElementById("valortv").innerHTML= tv * precotv;
}

function diminuirtv() {
    if (tv > 0) {
        tv--;

        document.getElementById("tvq").innerHTML = tv;
        document.getElementById("valortv").innerHTML = tv * precotv;
    }
}

function somarnote(){
    note++

    document.getElementById("noteq").innerHTML = note
    document.getElementById("valornote").innerHTML = note * preconote
}

function diminuirnote() {
    if (note > 0) {
        note--;

        document.getElementById("noteq").innerHTML = note;
        document.getElementById("valornote").innerHTML = note * preconote;
    }
}