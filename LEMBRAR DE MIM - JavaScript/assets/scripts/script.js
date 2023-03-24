
const botao = document.querySelector('#btnlembrar')
let User_email = document.querySelector('#userEmail')
let User_senha = document.querySelector('#userSenha')

if(typeof(Storage) != 'undefined'){

	if(localStorage.userEmail){
		User_email.value = localStorage.userEmail
	}
	if(localStorage.userSenha){
		User_senha.value = localStorage.userSenha
	}

	botao.addEventListener('click', ()=> {
		if(checkbox.checked){
			localStorage.save = true

			if(User_email.value != ''){
				localStorage.userEmail = User_email.value
			}else{
				localStorage.removeItem('userEmail')
			}
			if(User_senha.value != ''){
				localStorage.userSenha = User_senha.value
			}else{
				localStorage.removeItem('userSenha')
			}
		}else{
			localStorage.clear()
			localStorage.save = false
		}
	})

	if(!localStorage.getItem('save')){
		User_email.addEventListener('input', ()=>{
			if(User_email.value != ''){
				localStorage.userEmail = User_email.value
			}else{
				localStorage.removeItem('userEmail')
			}
		})
		User_senha.addEventListener('input', ()=>{
			if(User_senha.value != null){
				localStorage.userSenha = User_senha.value
			}
			else{
				localStorage.removeItem('userSenha')
			}
		})
	}

}else{
  alert('Este navegador não possui suporte para Cookies!')
}



