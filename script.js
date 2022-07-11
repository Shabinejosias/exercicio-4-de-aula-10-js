function capturar() {
    let n1 = document.getElementById('nome1').value;
    let i1 = document.getElementById('idade1').value;
    let resultado = document.getElementById('cadastro');

    let n2 = document.getElementById('nome2').value;
    let i2 = document.getElementById('idade2').value;
    if (i1 > i2) {
        resultado.innerHTML = (`${n1} tem mais idade que ${n2} \n Sendo que ${n1} tem ${i1} e ${n2} tem ${i2} anos de idade.`)

    } else if (i1 < i2) {
        resultado.innerHTML = (`${n2} tem mais idade que ${n1} \n Sendo que ${n2} tem ${i2} e ${n1} tem ${i1} anos de idade.`)

    } else if (i1 === i2) {
        resultado.innerHTML = (`<strong>${n1} e ${n2} têm a mesma idade. \n Visto que ${n1} tem ${i1} e ${n2} também tem  ${i2} anos de idade.</strong>`)
    }

    if (n1 === "" || idade === "") {
        alert("CAMPOS VAZIOS...! Insira os valores requeridos..!")
        resultado.innerHTML = ('')
    }
}