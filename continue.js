var cpf = document.getElementById('cpf')

cpf.addEventListener('keypress', () => {
    var cpflength = cpf.value.length

    if (cpflength === 3 || cpflength === 7) {
        cpf.value += '.'
    } else if(cpflength === 11) {
        cpf.value += '-'
    }
}) 