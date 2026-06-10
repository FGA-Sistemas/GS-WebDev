// Sistema de Troca de Tema com 3 Opções
const botaoTema = document.getElementById('botaoTema');
const html = document.documentElement;
const temas = ['escuro', 'claro', 'neon'];

// Detectar preferência salva ou preferência do sistema
function inicializarTema() {
    const temaSalvo = localStorage.getItem('tema');
    const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
    
    const tema = temaSalvo || preferenciaSistema;
    aplicarTema(tema);
}

// Aplicar o tema
function aplicarTema(tema) {
    if (tema === 'claro') {
        // Tema Claro
        html.style.colorScheme = 'light';
        document.body.style.backgroundColor = '#f5f7ff';
        document.body.style.color = '#000000';
        document.querySelector('header').style.backgroundColor = 'rgba(245, 247, 255, 0.92)';
        document.querySelector('header').style.borderBottomColor = 'rgba(0, 0, 0, 0.12)';
        
        document.querySelectorAll('.secao').forEach(secao => {
            secao.style.backgroundColor = '#f5f7ff';
        });
        document.querySelectorAll('.secao-alternada').forEach(secao => {
            secao.style.backgroundColor = '#ececf1';
        });
        
        // Alterar cores dos textos para preto
        document.querySelectorAll('p').forEach(p => {
            p.style.color = '#000000';
        });
        document.querySelectorAll('h1, h2, h3').forEach(h => {
            h.style.color = '#000000';
        });
        document.querySelectorAll('.texto-destaque').forEach(td => {
            td.style.color = '#000000';
        });
        
        // Alterar cards para cinza
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = '#d3d3d3';
            card.style.borderColor = 'rgba(0, 0, 0, 0.2)';
            card.style.color = '#000000';
        });
        document.querySelectorAll('.card p').forEach(p => {
            p.style.color = '#000000';
        });
        
        // Alterar painel de código
        document.querySelectorAll('.painel-codigo').forEach(painel => {
            painel.style.backgroundColor = '#d3d3d3';
            painel.style.color = '#000000';
        });
        document.querySelectorAll('.tecnologias').forEach(tech => {
            tech.style.backgroundColor = '#d3d3d3';
            tech.style.color = '#000000';
        });
        document.querySelectorAll('.tecnologias p').forEach(p => {
            p.style.color = '#000000';
        });
        
        // Alterar lista destaque e texto central
        document.querySelectorAll('.lista-destaque').forEach(lista => {
            lista.style.color = '#000000';
        });
        document.querySelectorAll('.lista-destaque div').forEach(item => {
            item.style.color = '#000000';
        });
        document.querySelectorAll('.texto-central').forEach(tc => {
            tc.style.color = '#000000';
        });
        
        document.querySelectorAll('.menu a').forEach(link => {
            link.style.color = '#4d5cc4';
        });
        
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i><span>Tema</span>';
        botaoTema.style.backgroundColor = 'rgba(77, 92, 196, 0.15)';
        botaoTema.style.borderColor = 'rgba(77, 92, 196, 0.4)';
        botaoTema.style.color = '#4d5cc4';
        
        localStorage.setItem('tema', 'claro');
    } else if (tema === 'neon') {
        // Tema Neon/Cyber
        html.style.colorScheme = 'dark';
        document.body.style.backgroundColor = '#0a0e27';
        document.body.style.color = '#00ffff';
        document.querySelector('header').style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        document.querySelector('header').style.borderBottomColor = 'rgba(0, 255, 255, 0.3)';
        
        document.querySelectorAll('.secao').forEach(secao => {
            secao.style.backgroundColor = '#0a0e27';
        });
        document.querySelectorAll('.secao-alternada').forEach(secao => {
            secao.style.backgroundColor = '#0f1437';
        });
        
        document.querySelectorAll('.menu a').forEach(link => {
            link.style.color = '#00ffff';
            link.style.textShadow = '0 0 8px rgba(0, 255, 255, 0.5)';
        });
        
        botaoTema.innerHTML = '<i class="fa-solid fa-star"></i><span>Tema</span>';
        botaoTema.style.backgroundColor = 'rgba(0, 255, 255, 0.15)';
        botaoTema.style.borderColor = 'rgba(0, 255, 255, 0.5)';
        botaoTema.style.color = '#00ffff';
        botaoTema.style.textShadow = '0 0 8px rgba(0, 255, 255, 0.5)';
        
        localStorage.setItem('tema', 'neon');
    } else {
        // Tema Escuro (padrão)
        html.style.colorScheme = 'dark';
        document.body.style.backgroundColor = '#050814';
        document.body.style.color = '#f5f7ff';
        document.querySelector('header').style.backgroundColor = 'rgba(5, 8, 20, 0.92)';
        document.querySelector('header').style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
        
        document.querySelectorAll('.secao').forEach(secao => {
            secao.style.backgroundColor = '#050814';
        });
        document.querySelectorAll('.secao-alternada').forEach(secao => {
            secao.style.backgroundColor = '#080d1d';
        });
        
        document.querySelectorAll('.menu a').forEach(link => {
            link.style.color = '#ccd5ff';
            link.style.textShadow = 'none';
        });
        
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i><span>Tema</span>';
        botaoTema.style.backgroundColor = 'rgba(255, 106, 42, 0.15)';
        botaoTema.style.borderColor = 'rgba(255, 106, 42, 0.4)';
        botaoTema.style.color = '#ff6a2a';
        botaoTema.style.textShadow = 'none';
        
        localStorage.setItem('tema', 'escuro');
    }
    
    // Limpar text-shadow do botão se não for neon
    if (tema !== 'neon') {
        botaoTema.style.textShadow = 'none';
    }
}

// Alternar tema ao clicar no botão
botaoTema.addEventListener('click', () => {
    const temaAtual = localStorage.getItem('tema') || 'escuro';
    const indiceAtual = temas.indexOf(temaAtual);
    const indiceProximo = (indiceAtual + 1) % temas.length;
    const novoTema = temas[indiceProximo];
    aplicarTema(novoTema);
});

// Inicializar tema ao carregar a página
inicializarTema();
﻿const respostasPreferencia = ['planetas', 'estrelas', 'meteoros'];
const respostasPlaneta = ['mercurio', 'venus', 'terra', 'marte', 'jupiter', 'saturno', 'urano', 'netuno'];
const respostasSonho = ['sim', 'nao'];
const respostasAmbiente = ['orbita', 'estacao', 'lua', 'marte', 'cintura-asteroides'];
const respostasPaises = [
  'China','India','United States','Indonesia','Pakistan','Nigeria','Brazil','Bangladesh','Russia','Mexico','Japan','Ethiopia','Philippines','Egypt','Vietnam','DR Congo','Turkey','Iran','Germany','Thailand','United Kingdom','France','Italy','Tanzania','South Africa','Myanmar','Kenya','South Korea','Colombia','Spain','Argentina','Algeria','Sudan','Ukraine','Uganda','Iraq','Poland','Canada','Morocco','Saudi Arabia','Uzbekistan','Peru','Angola','Malaysia','Mozambique','Ghana','Yemen','Nepal','Venezuela','Madagascar','Cameroon','Cote d Ivoire','North Korea','Australia','Niger','Sri Lanka','Burkina Faso','Mali','Romania','Kazakhstan','Malawi','Chile','Zambia','Guatemala','Ecuador','Syria','Netherlands','Senegal','Cambodia','Chad','Somalia','Zimbabwe','Guinea','Rwanda','Benin','Burundi','Tunisia','Bolivia','Belgium','Haiti','Cuba','South Sudan','Dominican Republic','Czech Republic','Greece','Jordan','Portugal','Azerbaijan','Sweden','Honduras','United Arab Emirates','Hungary','Belarus','Austria','Papua New Guinea','Serbia','Israel','Switzerland','Togo','Sierra Leone','Laos','Paraguay','Bulgaria','Libya','Lebanon','Nicaragua','Kyrgyzstan','El Salvador','Turkmenistan','Singapore','Denmark','Finland','Congo','Slovakia','Norway','Oman','State of Palestine'
];

function normalizaTexto(texto) {
  return String(texto || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

function validaLista(form, name, validAnswers) {
  const value = form.elements[name]?.value;
  const normalizedValue = normalizaTexto(value);
  return validAnswers.some(answer => normalizaTexto(answer) === normalizedValue);
}

function validaNumero(value) {
  const numero = Number(value);
  return !Number.isNaN(numero) && Number.isInteger(numero) && numero > 0;
}

document.querySelectorAll('.formulario-card').forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      form.reportValidity();
      event.preventDefault();
      return;
    }

    const formId = form.id;
    let valid = true;
    let invalidMessage = '';

    if (formId === 'form-preferencia' && !validaLista(form, 'preferencia', respostasPreferencia)) {
      valid = false;
      invalidMessage = 'Escolha uma preferência válida.';
    } else if (formId === 'form-planeta' && !validaLista(form, 'planeta-favorito', respostasPlaneta)) {
      valid = false;
      invalidMessage = 'Escolha um planeta válido.';
    } else if (formId === 'form-pais' && !validaLista(form, 'pais-usuario', respostasPaises)) {
      valid = false;
      invalidMessage = 'Digite um país válido entre os 100 mais populosos do mundo.';
    } else if (formId === 'form-sonho' && !validaLista(form, 'sonho-espacial', respostasSonho)) {
      valid = false;
      invalidMessage = 'Escolha uma resposta válida para o sonho espacial.';
    } else if (formId === 'form-ambiente' && !validaLista(form, 'ambiente-preferido', respostasAmbiente)) {
      valid = false;
      invalidMessage = 'Escolha um ambiente válido.';
    } else if (formId === 'form-idade') {
      const idade = form.elements['idade-usuario'].value;
      if (!validaNumero(idade)) {
        valid = false;
        invalidMessage = 'Digite uma idade válida (número inteiro maior que zero).';
      }
    }

    if (!valid) {
      event.preventDefault();
      alert(invalidMessage);
    }
  });
});
