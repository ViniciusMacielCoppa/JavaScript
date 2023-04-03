const escreverTarefa = document.querySelector('#f-addTarefa')
const btnAdd = document.querySelector('#btn-addTarefa')
const lista = document.querySelector('ul')

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
	let novaTarefa = {
		name: '',
		checado: false
	}

	if(escreverTarefa.value != '' && escreverTarefa.value != ' '){
		document.querySelector('.tarefaadd').style.opacity = '1';
		document.querySelector('.tarefaadd').style.top = '30px';

		setTimeout(()=> {
			document.querySelector('.tarefaadd').style.opacity = '0';
			document.querySelector('.tarefaadd').style.top = '0px';
		},1000)

		novaTarefa.name = escreverTarefa.value
		tarefas.push(novaTarefa)
		escreverTarefa.focus()
		escreverTarefa.value = ''
		MostrarTarefas()
		return
	}

	document.querySelector('.tarefaerro').style.opacity = '1';
	document.querySelector('.tarefaerro').style.top = '30px';

	setTimeout(()=> {
		document.querySelector('.tarefaerro').style.opacity = '0';
		document.querySelector('.tarefaerro').style.top = '0px';
	},1000)
	
	escreverTarefa.value = ''
	escreverTarefa.focus()
})