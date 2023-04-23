//As referências no JS são criadas com base no valor que elas vão receber e guardar.
const listaTeclas = document.querySelectorAll('.tecla');
const listaAtalhos = ['Numpad7','Numpad8','Numpad9','Numpad4','Numpad5','Numpad6','Numpad1','Numpad2','Numpad3'];

function tocaBateria(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);
     
  if (elemento && elemento.localName === 'audio') {
      elemento.play();
  } else {
    console.log('Elemento não encontrado ou seletor inválido.');
  }

}

for(var i=0;i<listaTeclas.length;i++) {
  const tecla = listaTeclas[i];
  const sample = tecla.classList[1];
  const idAudio = `#som_${sample}`; //template string
  
  tecla.onclick = function () {
    tocaBateria(idAudio); 
  }

  tecla.onkeydown = function (evento) {
    if(evento.code === 'Space' || evento.code === 'Enter'){
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
      limpaAtivas();
  }
}
  

document.body.onkeydown = function(evento){
  let indice = listaAtalhos.indexOf(evento.code);
  if(indice >= 0){
    listaTeclas[indice].onclick();
    listaTeclas[indice].classList.add('ativa');
  }
}

document.body.onkeyup = function(evento){
  let indice = listaAtalhos.indexOf(evento.code);
  if(indice >= 0){
    listaTeclas[indice].classList.remove('ativa');
  }
}


function limpaAtivas() {
  for(var i=0;i<listaTeclas.length;i++) {
    const tecla = listaTeclas[i];
    tecla.classList.remove('ativa');
  }
}

