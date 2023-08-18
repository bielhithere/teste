// falta testar só
var result = document.getElementById('result')
var n1 = ''  
var n2 = '' 
var sinal = ''
var finais = document.getElementById('finais')
var resultados = [] 



function um() {
    if (n1 == [] ) {
        n1 = 1
    } else if ( n1 != [] && sinal == '') { 
        n1 = 1 + n1*10
    } else if (sinal != '') {
        n2 = 1
    } else if (n2 != '') {
        n2 = 1 + n2*10
    } 
    if ( n1 != [] && n2 == '') {
        result.innerHTML = n1
    } else {
        result.innerHTML = n2
    }
}
function dois() {
    if (n1 == [] ) {
        n1 = 2
    } else if ( n1 != [] && sinal == '') { 
        n1 = 2 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 2
    } else if (n2 != '') {
        n2 = 2 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function tres() {
    if (n1 == [] ) {
        n1 = 3
    } else if ( n1 != [] && sinal == '') { 
        n1 = 3 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 3
    } else if (n2 != '') {
        n2 = 3 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function quatro() {
    if (n1 == [] ) {
        n1 = 4
    } else if ( n1 != [] && sinal == '') { 
        n1 = 4 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 4
    } else if (n2 != '') {
        n2 = 4 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function cinco() {
    if (n1 == [] ) {
        n1 = 5
    } else if ( n1 != [] && sinal == '') { 
        n1 = 5 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 5
    } else if (n2 != '') {
        n2 = 5 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function seis() {
    if (n1 == [] ) {
        n1 = 6
    } else if ( n1 != [] && sinal == '') { 
        n1 = 6 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 6
    } else if (n2 != '') {
        n2 = 6 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function sete() {
    if (n1 == [] ) {
        n1 = 7
    } else if ( n1 != [] && sinal == '') { 
        n1 = 7 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 7
    } else if (n2 != '') {
        n2 = 7 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function oito() {
    if (n1 == [] ) {
        n1 = 8
    } else if ( n1 != [] && sinal == '') { 
        n1 = 8 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 8
    } else if (n2 != '') {
        n2 = 8 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function nove() {
    if (n1 == [] ) {
        n1 = 9
    } else if ( n1 != [] && sinal == '') { 
        n1 = 9 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 9
    } else if (n2 != '') {
        n2 = 9 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}
function zero() {
    if (n1 == [] ) {
        n1 = 0
    } else if ( n1 != [] && sinal == '') { 
        n1 = 0 + n1*10
    } else if (n2 == [] && sinal != '') {
        n2 = 0
    } else if (n2 != '') {
        n2 = 0 + n2*10
    }
    if (n1 != [] && n2 == '') {
        result.innerHTML = n1 
    } else {
        result.innerHTML = n2 
    }
}




   function mais() {
    sinal = '+'
    result.innerHTML = '+'
}
function menos() {
    sinal = '-'
    result.innerHTML = '-'
}
function vezes() {
    sinal = 'x'
    result.innerHTML = 'x'
}
function divisao() {
    sinal = '÷'
    result.innerHTML = '÷'
}


function igual () {
switch (sinal) {
    case '+' :
        var resultado = n1 + n2
        result.innerHTML = resultado
        const node = document.createElement('ol')
        const txt = document.createTextNode(resultado)
        node.appendChild(txt)
        document.getElementById('finais').appendChild(node)
        resultado = ''
        n1 = ''
        n2 = ''
        break ;
    case '-' :
        var resultado = n1 - n2 
        result.innerHTML = resultado
        const node1 = document.createElement('ol')
        const txt1 = document.createTextNode(resultado)
        node1.appendChild(txt1)
        document.getElementById('finais').appendChild(node1)
        resultado = ''
        n1 = ''
        n2 = ''
        break;
    case 'x' :
        var resultado = n1 * n2 
        result.innerHTML = resultado
        const node2 = document.createElement('ol')
        const txt2 = document.createTextNode(resultado)
        node2.appendChild(txt2)
        document.getElementById('finais').appendChild(node2)
        resultado = ''
        n1 = ''
        n2 = ''
        break;
    case '÷' :
        var resultado = n1 / n2 
        result.innerHTML = resultado
        const node3 = document.createElement('ol')
        const txt3 = document.createTextNode(resultado)
        node3.appendChild(txt3)
        document.getElementById('finais').appendChild(node3)
        resultado = ''
        n1 = ''
        n2 = ''
        break ;
    default : 
    window.alert('coloque todos os valores')
} }



function clean() {
    n1 = ''
    n2 = ''
    finais.innerHTML = ''
    result.innerHTML = ''
}
function limpar() {
    n1 = ''
    n2 = ''
    sinal = ''
    result.innerHTML = ''
}