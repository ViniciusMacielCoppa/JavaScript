const escreverTarefa = document.querySelector('#f-addTarefa')
const btnAdd = document.querySelector('#btn-addTarefa')
const lista = document.querySelector('ul')

let alteracao = document.querySelector('#f-editValue')
const btnSA = document.querySelector('#f-btnSalvar')
const btnDA = document.querySelector('#f-btnCancelar')
const containerEdit = document.querySelector('#containerEditBackground')

const tarefas = []

MostrarTarefas()

function MostrarTarefas(){
	let conter = ''

	if(tarefas.length < 1){
    lista.innerHTML = "<li id='semTarefas'>Não há tarefas registradas</li>"
    return
  	}

	for(let i = 0; i < tarefas.length; i++){
		conter += 
    `
    <li>
      <p ${tarefas[i].checado == true ? "class='checado'" : "class=''"}>
        ${tarefas[i].name}
      </p>
      <div>
        <button id='btn-check' onclick='MarcarFinalizado(${i})'>
          ${tarefas[i].checado == true ? "<i class='fa-solid fa-xmark'></i>" : "<i class='fa-solid fa-check'></i>"}
        </button>
        <button id='btn-edit' onclick='EditarTarefa(${i})'><i class="fa-solid fa-pen"></i></button>
        <button id='btn-delete' onclick='DeletarTarefa(${i})'><i class="fa-solid fa-trash"></i></button>
      </div>
    </li>
	`
	}

	lista.innerHTML = conter
}

function MarcarFinalizado(i){
 	tarefas[i].checado === false ? tarefas[i].checado = true : tarefas[i].checado = false
  	MostrarTarefas()
}

function DeletarTarefa(i){
	tarefas.splice(i,1)
	MostrarTarefas()
}

btnAdd.addEventListener('click', ()=> {

	if(escreverTarefa.value.trim().length < 1){
//  MENSAGEM DE ERRO
    document.querySelector('.tarefaerro').style.opacity = '1';
    document.querySelector('.tarefaerro').style.top = '30px';
    setTimeout(()=> {
      document.querySelector('.tarefaerro').style.opacity = '0';
      document.querySelector('.tarefaerro').style.top = '0px';
    },1000)

    escreverTarefa.value = ''
    escreverTarefa.focus()

		return
	}
  
  //  MENSAGEM DE SUCESSO
  document.querySelector('.tarefaadd').style.opacity = '1';
  document.querySelector('.tarefaadd').style.top = '30px';
  setTimeout(()=> {
    document.querySelector('.tarefaadd').style.opacity = '0';
    document.querySelector('.tarefaadd').style.top = '0px';
  },1000)

  //  PUSH PARA O ARRAY COM NOVOS VALORES
  tarefas.push({
    name: escreverTarefa.value,
    checado: false
  })

  escreverTarefa.focus()
  escreverTarefa.value = ''
  MostrarTarefas()

})

function EditarTarefa(i){
  containerEdit.style.display = 'flex'
  alteracao.value = tarefas[i].name
  alteracao.focus()

  btnSA.addEventListener('click', () =>{
    tarefas[i].name = alteracao.value
    containerEdit.style.display = 'none'
    MostrarTarefas()
  })

  btnDA.addEventListener('click', () => {
      containerEdit.style.display = 'none'
      alteracao.value = ''
  })
}