// Sistema de Troca de Tema
const botaoTema = document.getElementById('botaoTema');
const html = document.documentElement;

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
        html.style.colorScheme = 'light';
        document.body.style.backgroundColor = '#f5f7ff';
        document.body.style.color = '#050814';
        document.querySelector('header').style.backgroundColor = 'rgba(245, 247, 255, 0.92)';
        document.querySelector('header').style.borderBottomColor = 'rgba(0, 0, 0, 0.12)';
        
        // Atualizar cores dos cards e seções
        document.querySelectorAll('.secao').forEach(secao => {
            secao.style.backgroundColor = '#f5f7ff';
        });
        document.querySelectorAll('.secao-alternada').forEach(secao => {
            secao.style.backgroundColor = '#ececf1';
        });
        
        // Atualizar menu
        document.querySelectorAll('.menu a').forEach(link => {
            link.style.color = '#4d5cc4';
        });
        
        // Atualizar ícone do botão
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i><span>Tema</span>';
        botaoTema.style.backgroundColor = 'rgba(77, 92, 196, 0.15)';
        botaoTema.style.borderColor = 'rgba(77, 92, 196, 0.4)';
        botaoTema.style.color = '#4d5cc4';
        
        localStorage.setItem('tema', 'claro');
    } else {
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
        });
        
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i><span>Tema</span>';
        botaoTema.style.backgroundColor = 'rgba(255, 106, 42, 0.15)';
        botaoTema.style.borderColor = 'rgba(255, 106, 42, 0.4)';
        botaoTema.style.color = '#ff6a2a';
        
        localStorage.setItem('tema', 'escuro');
    }
}

// Alternar tema ao clicar no botão
botaoTema.addEventListener('click', () => {
    const temaAtual = localStorage.getItem('tema') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro');
    const novoTema = temaAtual === 'escuro' ? 'claro' : 'escuro';
    aplicarTema(novoTema);
});

// Inicializar tema ao carregar a página
inicializarTema();
