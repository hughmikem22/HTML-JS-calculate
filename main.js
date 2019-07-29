function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add"){
        calculate = a + b;

    } else if (op == "Min"){
        calculate = a - b;
    } else if (op == "Div"){
        calculate = a / b;
    } else if (op == "Mult"){
        calculate = a * b;
    }
    console.log(calculate);
}

// document.querySelector("#result").innerHTMl = calculate;