const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('#listaFuncionarios')

const form = document.querySelector('#formFuncionario')

const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')

let itens = []
let id = undefined


function openModal(edit = false, index = 0) {

    modal.classList.add('active')

    if (edit) {

        sNome.value = itens[index].nome
        sFuncao.value = itens[index].funcao
        sSalario.value = itens[index].salario

        id = index

    } else {

        sNome.value = ''
        sFuncao.value = ''
        sSalario.value = ''

        id = undefined
    }
}


modal.addEventListener('click', function (e) {

    if (e.target === modal) {
        modal.classList.remove('active')
    }

})


form.addEventListener('submit', function (e) {

    e.preventDefault()

    const nome = sNome.value.trim()
    const funcao = sFuncao.value.trim()
    const salario = sSalario.value.trim()


    if (nome === '' || funcao === '' || salario === '') {

        alert('Preencha todos os campos!')

        return
    }


    if (id !== undefined) {

        itens[id] = {
            nome: nome,
            funcao: funcao,
            salario: salario
        }

    }


    else {

        itens.push({
            nome: nome,
            funcao: funcao,
            salario: salario
        })

    }

    setItensBD()

    loadItens()

    modal.classList.remove('active')

    form.reset()

    id = undefined

})

function editItem(index) {

    openModal(true, index)

}

function deleteItem(index) {

    const confirmar = confirm('Deseja realmente excluir este funcionário?')

    if (!confirmar) {
        return
    }

    itens.splice(index, 1)

    setItensBD()

    loadItens()

}


function insertItem(item, index) {

    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${item.nome}</td>

        <td>${item.funcao}</td>

        <td>R$ ${item.salario}</td>

        <td class="acao">
            <button type="button" onclick="editItem(${index})">
                <i class="bx bx-edit"></i>
            </button>
        </td>

        <td class="acao">
            <button type="button" onclick="deleteItem(${index})">
                <i class="bx bx-trash"></i>
            </button>
        </td>
    `

    tbody.appendChild(tr)

}

function loadItens() {

    itens = getItensBD()

    tbody.innerHTML = ''

    itens.forEach((item, index) => {

        insertItem(item, index)

    })

}


function getItensBD() {

    return JSON.parse(
        localStorage.getItem('dbfunc')
    ) || []

}
function setItensBD() {

    localStorage.setItem(
        'dbfunc',
        JSON.stringify(itens)
    )

}

loadItens()