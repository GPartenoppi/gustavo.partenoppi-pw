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
    document.getElementById("subtotal").innerHTML = motorola * precoMotorola + tv * precotv + note * preconote
}

function diminuirmotorola() {
    if (motorola > 0) {
        motorola--;

        document.getElementById("motorolaq").innerHTML = motorola;
        document.getElementById("valormotorola").innerHTML = motorola * precoMotorola;
        document.getElementById("subtotal").innerHTML = motorola * precoMotorola + tv * precotv + note * preconote
    }
}

function somartv(){
    tv++

    document.getElementById("tvq").innerHTML = tv;
    document.getElementById("valortv").innerHTML= tv * precotv;
    document.getElementById("subtotal").innerHTML = motorola * precoMotorola + tv * precotv + note * preconote
}

function diminuirtv() {
    if (tv > 0) {
        tv--;

        document.getElementById("tvq").innerHTML = tv;
        document.getElementById("valortv").innerHTML = tv * precotv;
        document.getElementById("subtotal").innerHTML = motorola * precoMotorola + tv * precotv + note * preconote
    }
}

function somarnote(){
    note++

    document.getElementById("noteq").innerHTML = note
    document.getElementById("valornote").innerHTML = note * preconote
    document.getElementById("subtotal").innerHTML = motorola * precoMotorola + tv * precotv + note * preconote
}

function diminuirnote() {
    if (note > 0) {
        note--;

        document.getElementById("noteq").innerHTML = note;
        document.getElementById("valornote").innerHTML = note * preconote;
        document.getElementById("subtotal").innerHTML = motorola * precoMotorola + tv * precotv + note * preconote
    }
}