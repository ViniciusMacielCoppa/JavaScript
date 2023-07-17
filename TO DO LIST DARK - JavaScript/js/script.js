const writeTask = document.querySelector('#writeTask')
const bntAdd = document.querySelector('#bntAdd')
const list = document.querySelector('ul')
const main = document.querySelector('#main')
const Save = document.querySelector('#bntSave')
const Cancel = document.querySelector('#bntCancel')
let tasks = []

showTasks()

// DEU CERTO
function showTasks(){
  let conter = ''
  if(tasks.length < 1){
    list.innerHTML = '<li class="Notask">Sem registros de tarefas no momento.</li>'
    return
  }
  for(let i=0; i < tasks.length; i++){
    conter += `
      <li class="taskOn">
        <p ${tasks[i].checked === true ? "class='checado'" : "class=''"}> ${tasks[i].task} </p>
        <div>
          <button id='bntFinalizar' onclick='FinalizarTask(${i})'>FINALIZAR</button>
          <button id='btnEdit' onclick='UpdateTask(${i})'>EDITAR</button>
          <button id='bntDelete' onclick='DeleteTask(${i})'>DELETAR</button>
        </div>
      </li>
    `
  }
  list.innerHTML = conter
  
}

// DEU CERTO
bntAdd.addEventListener('click', ()=> {
  if(writeTask.value.trim().length < 1){
    console.log('Alguém tentou registrar uma tarefa. Sem exito!')
    
    document.querySelector('#error').style.opacity = 1
    document.querySelector('#error').style.top = '30px'
    setTimeout(()=>{
      document.querySelector('#error').style.opacity = 0
      document.querySelector('#error').style.top = '0px'
    },1000)
    
    return
  }
  
  console.log(`Nova tarefa registrada: "${writeTask.value}"`)
  
  tasks.push({
    task: writeTask.value,
    checked: false
  })
  
  document.querySelector('#sucess').style.opacity = 1
  document.querySelector('#sucess').style.top = '30px'
  setTimeout(()=>{
    document.querySelector('#sucess').style.opacity = 0
    document.querySelector('#sucess').style.top = '0px'
  },1000)
  
  showTasks()
  writeTask.value =''
  writeTask.focus()
})

// DEU CERTO
function DeleteTask(i){
  console.log(`Tarefa "${tasks[i].task}" deletada.`)
  tasks.splice(i,1)
  showTasks()
}

// DEU CERTO
function FinalizarTask(i){
  tasks[i].checked === false ? tasks[i].checked = true : tasks[i].checked = false
  showTasks()
  tasks[i].checked === false ? console.log(`Tarefa "${tasks[i].task}" desfinalizada.`) : console.log(`Tarefa "${tasks[i].task}" finalizada.`)
}

// DEU CERTO
function UpdateTask(i){
  main.style.visibility= 'visible'
  main.style.pointerEvents = 'auto'
  let update = document.querySelector('#TaskUpdate')
  update.value = tasks[i].task
  
  Save.addEventListener('click', ()=> {
    if(update.value.trim().length < 1){
      alert('Escreva uma tarefa para poder salvar!')
      return
    }
    alert('Tarefa editada com sucesso!')
      tasks[i].task = update.value
      main.style.visibility= 'hidden'
      main.style.pointerEvents = 'none'
      showTasks()
  })
  
  Cancel.addEventListener('click', ()=> {
    alert('Edição de tarefa cancelada!')
    main.style.visibility= 'hidden'
    main.style.pointerEvents = 'none'
  })
  
}