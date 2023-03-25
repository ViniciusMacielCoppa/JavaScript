
let User_email = document.querySelector('#userEmail')
let User_senha = document.querySelector('#userSenha')
const botao = document.querySelector('#btnlembrar')

let numero = 0

if(typeof(Storage) != 'undefined'){

	if(!localStorage.save){
		localStorage.save = 'nao'
		botao.innerText = 'Lembrar de mim'
	}else if(localStorage.save == 'sim'){
		if(localStorage.Senha){
			User_senha.value = localStorage.Senha
		}
		if(localStorage.Email){
			User_email.value = localStorage.Email
		}
		botao.innerText = 'Reconsiderar'
	}

	botao.addEventListener('click', ()=> {

		if(localStorage.getItem('save') == 'nao'){
			if(User_email.value != ''){
				localStorage.Email = User_email.value
			}
			if(User_senha.value != ''){
				localStorage.Senha = User_senha.value
			}

			localStorage.save = 'sim'
			botao.innerText = 'Reconsiderar'
			return
		}
			botao.innerText = 'Lembrar de mim'
			localStorage.save = 'nao'
			localStorage.removeItem('Senha')
			localStorage.removeItem('Email')
	})

	User_email.addEventListener('input', ()=> {
		if(localStorage.save == 'sim' && User_email.value != ''){
			localStorage.Email = User_email.value
			return
		}
		localStorage.removeItem('Email')
	})
	User_senha.addEventListener('input', ()=> {
		if(localStorage.save == 'sim' && User_senha.value != ''){
			localStorage.Senha = User_senha.value
			return
		}
		localStorage.removeItem('Senha')
	})

}else{
  alert('Este navegador não possui suporte para Cookies!')
}
