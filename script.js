function mostrarDeclaracao() {
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = "block";
  }
  function mostrarDeclaracao() {
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = "block";
    criarCoracoes();
  }
  
  function criarCoracoes() {
    for (let i = 0; i < 10; i++) {
      const coracao = document.createElement("div");
      coracao.innerHTML = "❤️";
      coracao.style.position = "fixed";
      coracao.style.left = Math.random() * window.innerWidth + "px";
      coracao.style.top = Math.random() * window.innerHeight + "px";
      coracao.style.fontSize = "2rem";
      coracao.style.opacity = "1";
      coracao.style.transition = "all 2s ease-out";
  
      document.body.appendChild(coracao);
  
      setTimeout(() => {
        coracao.style.top = "-100px";
        coracao.style.opacity = "0";
      }, 100);
  
      setTimeout(() => {
        document.body.removeChild(coracao);
      }, 2000);
    }
  }
  // botão "sim"
document.getElementById("btn-sim").addEventListener("click", () => {
  document.getElementById("resposta-sim").style.display = "block";
});

// botão "não" que foge
const btnNao = document.getElementById("btn-nao");

btnNao.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  btnNao.style.left = `${x}px`;
  btnNao.style.top = `${y}px`;
});
    // Upload de fotos com localStorage
const photoUpload = document.getElementById('photoUpload');
const photosDiv = document.getElementById('photos');

function savePhotos() {
  // Pegamos todos os src das imagens atuais e salvamos no localStorage
  const imgs = photosDiv.querySelectorAll('img');
  const imgSrcs = Array.from(imgs).map(img => img.src);
  localStorage.setItem('savedPhotos', JSON.stringify(imgSrcs));
}

function loadPhotos() {
  const saved = localStorage.getItem('savedPhotos');
  if (saved) {
    const imgSrcs = JSON.parse(saved);
    imgSrcs.forEach(src => {
      addPhoto(src);
    });
  }
}

function addPhoto(src) {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.display = 'inline-block';

  const img = document.createElement('img');
  img.src = src;
  img.className = 'gallery-img';

  // Evento para abrir modal ao clicar na imagem
  img.addEventListener('click', () => {
    modalImg.src = src;
    imgModal.style.display = 'flex';
  });
  
// Fecha o modal ao clicar em qualquer lugar fora da imagem
imgModal.addEventListener('click', () => {
  imgModal.style.display = 'none';
  modalImg.src = '';
});

// Impede que o clique na imagem feche o modal
modalImg.addEventListener('click', (e) => {
  e.stopPropagation();
});
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Apagar';
  delBtn.style.marginTop = '5px';
  delBtn.style.background = '#ff6b81';
  delBtn.style.color = '#fff';
  delBtn.style.border = 'none';
  delBtn.style.padding = '5px 10px';
  delBtn.style.borderRadius = '5px';
  delBtn.style.cursor = 'pointer';
  delBtn.style.display = 'block';
  delBtn.style.margin = '5px auto 0';

  delBtn.addEventListener('click', () => {
    container.remove();
    savePhotos();
  });

  container.appendChild(img);
  container.appendChild(delBtn);
  photosDiv.appendChild(container);
}


photoUpload.addEventListener('change', (e) => {
  const files = e.target.files;
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      addPhoto(evt.target.result);
      savePhotos(); // Salva cada foto nova adicionada
    }
    reader.readAsDataURL(file);
  }
  // Limpa o input para permitir enviar a mesma foto novamente se quiser
  photoUpload.value = '';
});

// Carrega as fotos salvas quando a página abre
loadPhotos();

	
	const clearPhotosBtn = document.getElementById('clearPhotosBtn');
clearPhotosBtn.addEventListener('click', () => {
  if (confirm("Tem certeza que deseja apagar todas as fotos?")) {
    localStorage.removeItem('photos');
    photosDiv.innerHTML = '';
  }
});

// Tocar música automaticamente ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio-player");
  audio.play().catch(() => {
    console.log("Autoplay bloqueado pelo navegador. Clique no botão para tocar.");
  });
});

// Ainda pode usar o botão como plano B
function tocarMusica() {
  const audio = document.getElementById("audio-player");
  audio.play();
}


function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.innerText = "💖";

  coracao.style.left = Math.random() * window.innerWidth + "px";
  coracao.style.animationDuration = (Math.random() * 3 + 2) + "s";
  coracao.style.fontSize = (Math.random() * 10 + 20) + "px";

  document.querySelector(".chuva-de-coracoes").appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

// Criar um coração a cada 300ms
setInterval(criarCoracao, 300);

function mostrarCarta() {
  const carta = document.getElementById("carta");
  carta.classList.toggle("ativa");
}
function abrirCarta3D() {
  const carta3d = document.getElementById("carta3d");
  carta3d.classList.toggle("ativa");
}
document.getElementById("modo-btn").addEventListener("click", function() {
  document.body.classList.toggle("modo-noturno");
  this.textContent = document.body.classList.contains("modo-noturno") ? "☀️" : "🌙";
});
function atualizarContador() {
  const inicio = new Date("2025-07-25T00:00:00"); // coloque a data de vocês aqui!
  const agora = new Date();
  const diff = agora - inicio;

      const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("tempo-juntos").textContent =
    `${anos} Anos,${meses} Meses,${dias} Dias,${horas} Horas,${minutos} Minutos e ${segundos} Segundos 💘`;
}

setInterval(atualizarContador, 1000);

function criarBrilho() {
  const brilho = document.createElement("div");
  brilho.className = "brilho";
  brilho.style.top = Math.random() * window.innerHeight + "px";
  brilho.style.left = Math.random() * window.innerWidth + "px";
  brilho.style.animationDuration = (Math.random() * 2 + 1) + "s";
  document.body.appendChild(brilho);

  setTimeout(() => {
    brilho.remove();
  }, 1000);
}

setInterval(criarBrilho, 300);

const texto = "Eu não sabia que a felicidade podia ser tão simples… até perceber que ela começa toda vez que te vejo ❤️";
let index = 0;

function digitarTexto() {
  const elemento = document.getElementById("digitar");
  if (index < texto.length) {
    elemento.textContent += texto.charAt(index);
    index++;
    setTimeout(digitarTexto, 100); // velocidade da digitação
  }
}

window.addEventListener("load", digitarTexto);

window.addEventListener('DOMContentLoaded', () => {
  const addDayBtn = document.getElementById('addDayBtn');
  const dayDate = document.getElementById('dayDate');
  const dayDesc = document.getElementById('dayDesc');
  const specialDays = document.getElementById('specialDays');

  if (!addDayBtn || !dayDate || !dayDesc || !specialDays) {
    console.error('IDs faltando: addDayBtn/dayDate/dayDesc/specialDays');
    return;
  }

  function saveDays() {
    const days = Array.from(specialDays.querySelectorAll('li span'))
                      .map(span => span.textContent);
    localStorage.setItem('specialDays', JSON.stringify(days));
  }

  function createDayItem(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    span.style.marginRight = '8px';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Apagar';
    btn.onclick = () => {
      li.remove();
      saveDays();
    };

    li.appendChild(span);
    li.appendChild(btn);
    return li;
  }

  const savedDays = JSON.parse(localStorage.getItem('specialDays') || '[]');
  savedDays.forEach(day => specialDays.appendChild(createDayItem(day)));

  addDayBtn.addEventListener('click', (e) => {
    // evita recarregar a página se estiver dentro de um form
    e.preventDefault();

    const date = dayDate.value;
    const desc = dayDesc.value.trim();
    if (!date || !desc) {
      alert('Por favor, preencha data e descrição.');
      return;
    }

    const text = `${date} – ${desc}`;
    specialDays.appendChild(createDayItem(text));
    saveDays();

    dayDate.value = '';
    dayDesc.value = '';
  });
});


