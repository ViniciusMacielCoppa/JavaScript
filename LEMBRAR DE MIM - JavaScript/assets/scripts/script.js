
const checkbox = document.querySelector('#lembrar')
let User_email = document.querySelector('#userEmail')
let User_senha = document.querySelector('#userSenha')

let save = false

if(typeof(Storage) != 'undefined'){

	checkbox.addEventListener('click', ()=> {
		if(checkbox.checked){
			User_email.addEventListener('input', ()=> {
				if(User_email.value != '' && checkbox.checked){
					localStorage.userEmail = User_email.value
				}else{
					localStorage.removeItem('userEmail')
				}

				if(User_senha.value != '' && checkbox.checked){
					localStorage.userSmail = User_senha.value
				}else{
					localStorage.removeItem('userSenha')
				}
			})

			User_senha.addEventListener('input', ()=> {
				if(User_email.value != ''){
					localStorage.userEmail = User_email.value
				}else{
					localStorage.removeItem('userEmail')
				}

				if(User_senha.value != ''){
					localStorage.userSmail = User_senha.value
				}else{
					localStorage.removeItem('userSenha')
				}
			})

			if(User_email.value != ''){
				localStorage.userEmail = User_email.value
			}
			if(User_senha.value != ''){
				localStorage.userSenha = User_senha.value
			}

			return
		}else{
			localStorage.clear()

		}

	})

}else{
  alert('Este navegador não possui suporte para Cookies!')
}