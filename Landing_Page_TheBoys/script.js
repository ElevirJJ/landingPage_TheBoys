let abrir = document.getElementById('btn-abrir') 
let fechar = document.getElementById('menu-mobile')

abrir.onclick = () =>{
    fechar.classList.add('AtivoMenu')
}

fechar.onclick = () =>{
    fechar.classList.remove('AtivoMenu')
}
