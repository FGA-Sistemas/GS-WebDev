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
