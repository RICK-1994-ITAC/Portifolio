const $button = document.querySelector('.mostrarMais')
const mostrarProjetos = document.querySelectorAll('.projeto:not(.ativo')

$button.addEventListener('click',()=>{
    $button.classList.add('remover')
    mostrarProjetos.forEach((cadaProjeto) =>{cadaProjeto.classList.add('ativo')
    })
})