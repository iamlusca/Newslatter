import { registrar } from "../JS/autenticador.js";
import {buscarCep} from "../JS/services/viacep.js";

//Registrar o usuário ao enviar o formulário//
const form = document.querySelector('#form-cadastro')
const campoCep = document.querySelector('#cep')
const aviso = document.querySelector ("#aviso")

//Busca cep
campoCep.addEventListener('blur', async() => {
    if(!campoCep.value) return

    try{
        let endereco = await buscarCep(campoCep.value)
        document.querySelector('#logradouro').value = endereco.logradouro
        document.querySelector('#bairro').value = endereco.bairro
        document.querySelector('#cidade').value = endereco.localidade
        document.querySelector('#uf').value = endereco.uf
    } catch (error) {
        console.error(error.message)
    }

})


    //Cadastro dos dados do usuário
    form.addEventListener ('submit', (evento) =>{
        evento.preventDefault() //impede o recarregamento da página
        const usuario= {
         nome: document.querySelector("#nome").value,
         email: document.querySelector("#email").value,
         senha: document.querySelector("#senha").value,
         cep: document.querySelector("#cep").value,
         logradouro: document.querySelector("#logradouro").value,
         bairro: document.querySelector("#bairro").value,
         cidade: document.querySelector("#cidade").value,
         uf: document.querySelector("#uf").value,
        }

        const aviso=document.querySelector('#aviso');
        
         try {
            registrar(usuario)
            alert('Cadastro realizado! Faça login para continuar.')
            window.location.href = 'login.html'
         } catch (error) {
            aviso.textContent = error.message
         }
        
        })