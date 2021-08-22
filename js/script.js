//Live Clock Function
var waktuTemp = document.getElementById('timeTemp');
var waktuColor = document.getElementById('timeColor');

function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    clock = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    ampm = d.getHours() >= 12 ? 'PM' : 'AM',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    clock = days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+ clock + " " + ampm;
    waktuTemp.textContent = clock
    waktuColor.textContent = clock
}
setInterval(time, 1000);

//Change Background Function
function changeBackground() {
    var body = document.getElementById('body');
    let txtNama = document.getElementById('txtNama');
    document.getElementById('tampilWarna').innerHTML = txtNama.value;
    body.style.backgroundColor = txtNama.value;
    
}
let btnWarna = document.getElementById('btnWarna');
btnWarna.onclick = changeBackground;

//Conversion Temp Function
function conversionSuhu() {
    let suhuInput = document.getElementById('suhuInput');
    let suhuOutput = document.getElementById('suhuOutput');
    let masukkanSuhu = document.getElementById('masukkanSuhu');
    let hasilSuhu = document.getElementById('hasilSuhu');
    let angkaInput = document.getElementById('angkaInput');

    document.getElementById('angkaInput').innerHTML = masukkanSuhu.value;
    document.getElementById('tampilSatuanInput').innerHTML = suhuInput.value;
    document.getElementById('tampilSatuanOutput').innerHTML = suhuOutput.value;



    if (suhuInput.value === 'Celcius') {
        if (suhuOutput.value === 'Celcius') {
            hitungSuhu = masukkanSuhu.value
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Reamur') {
            hitungSuhu = masukkanSuhu.value * (4/5);
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Fahrenheit') {
            hitungSuhu = (masukkanSuhu.value * (9/5)) + 32
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Kelvin') {
            hitungSuhu = parseFloat(masukkanSuhu.value) + 273.15
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
    }
    else if (suhuInput.value === 'Reamur') {
        if (suhuOutput.value === 'Celcius') {
            hitungSuhu = masukkanSuhu.value * (5/4);
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Reamur') {
            hitungSuhu = masukkanSuhu.value;
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Fahrenheit') {
            hitungSuhu = (masukkanSuhu.value * (9/4)) + 32
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Kelvin') {
            hitungSuhu = parseFloat(masukkanSuhu.value * (5/4)) + 273.15
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
    }
    else if (suhuInput.value === 'Fahrenheit') {
        if (suhuOutput.value === 'Celcius') {
            hitungSuhu = (5/9) * (masukkanSuhu.value - 32);
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Reamur') {
            hitungSuhu = (4/9) * (masukkanSuhu.value - 32);
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Fahrenheit') {
            hitungSuhu = masukkanSuhu.value;
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Kelvin') {
            hitungSuhu = parseFloat((5/9) * (masukkanSuhu.value - 32)) + 273.15
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
    }
    else if (suhuInput.value === 'Kelvin') {
        if (suhuOutput.value === 'Celcius') {
            hitungSuhu = masukkanSuhu.value - 273.15;
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Reamur') {
            hitungSuhu = (4/5) * (masukkanSuhu.value - 273.15);
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Fahrenheit') {
            hitungSuhu = parseFloat((9/5) * (masukkanSuhu.value - 273.15)) + 32;
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
        else if (suhuOutput.value === 'Kelvin') {
            hitungSuhu = masukkanSuhu.value;
            document.getElementById('angkaOutput').innerHTML = hitungSuhu;
            document.getElementById('hasilSuhu').innerHTML = hitungSuhu;
        }
    }
}
let masukkanSuhu = document.getElementById('masukkanSuhu');
let suhuInput = document.getElementById('suhuInput');
let suhuOutput = document.getElementById('suhuOutput');
masukkanSuhu.onchange = conversionSuhu;
suhuInput.onchange = conversionSuhu;
suhuOutput.onchange = conversionSuhu;