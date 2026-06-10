// Quiz Fazenda Espacial
const quizForm = document.getElementById('quiz-form');
const opcoesBotoes = document.querySelectorAll('.opcoes-quiz button');
const resultadoQuiz = document.getElementById('resultado-quiz');

// Respostas corretas para cada pergunta
const respostasCorretas = {
    1: 'sim',    // Uma fazenda espacial é um local onde se cultiva alimentos no espaço? SIM
    2: 'sim',    // É possível cultivar plantas em ambientes com falta de gravidade? SIM
    3: 'sim',    // As fazendas espaciais podem ajudar a alimentar astronautas? SIM
    4: 'sim',    // A água é necessária para cultivar plantas? SIM
    5: 'nao',    // Os raios solares penetram diretamente? NÃO (estação orbital tem partes internas)
    6: 'nao',    // É mais fácil cultivar na fazenda espacial? NÃO
    7: 'sim',    // Podem usar apenas luz artificial? SIM
    8: 'sim',    // Temperatura é fator importante? SIM
    9: 'sim',    // Poderiam produzir oxigênio? SIM
    10: 'sim'    // É possível construir em estação espacial internacional? SIM
};

// Armazenar respostas
const respostas = {};

// Adicionar evento de clique aos botões de resposta
opcoesBotoes.forEach(botao => {
    botao.addEventListener('click', function(e) {
        e.preventDefault();
        
        const pergunta = this.dataset.pergunta;
        const resposta = this.dataset.resposta;
        
        // Armazenar resposta
        respostas[pergunta] = resposta;
        
        // Remover classe selecionado de todos os botões da mesma pergunta
        const perguntaContainer = this.closest('.pergunta-quiz');
        const todosBotoes = perguntaContainer.querySelectorAll('button');
        todosBotoes.forEach(btn => btn.classList.remove('selecionado'));
        
        // Adicionar classe selecionado ao botão clicado
        this.classList.add('selecionado');
    });
});

// Evento de envio do formulário
quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Contar quantas perguntas foram respondidas
    const perguntasRespondidas = Object.keys(respostas).length;
    const totalPerguntas = 10;
    
    if (perguntasRespondidas === totalPerguntas) {
        // Calcular respostas incorretas
        const perguntasIncorretas = [];
        let acertos = 0;
        
        for (let i = 1; i <= totalPerguntas; i++) {
            if (respostas[i] === respostasCorretas[i]) {
                acertos++;
            } else {
                perguntasIncorretas.push(i);
            }
        }
        
        // Calcular nota final (0-100)
        const notaFinal = Math.round((acertos / totalPerguntas) * 100);
        
        // Mostrar resultado
        exibirResultado(perguntasIncorretas, acertos, notaFinal, totalPerguntas);
    } else {
        alert(`Por favor, responda todas as ${totalPerguntas} perguntas.\nVocê respondeu ${perguntasRespondidas} perguntas.`);
    }
});

function exibirResultado(perguntasIncorretas, acertos, notaFinal, totalPerguntas) {
    // Limpar conteúdo anterior
    const perguntasIncorretasDiv = document.getElementById('perguntas-incorretas');
    const notaFinalDiv = document.getElementById('nota-final');
    
    // Exibir perguntas incorretas
    if (perguntasIncorretas.length > 0) {
        let html = '<p> Perguntas respondidas incorretamente:</p>';
        perguntasIncorretas.forEach(num => {
            html += `<div class="pergunta-incorreta">Pergunta ${num}</div>`;
        });
        perguntasIncorretasDiv.innerHTML = html;
    } else {
        perguntasIncorretasDiv.className = 'perguntas-incorretas vazio';
        perguntasIncorretasDiv.innerHTML = ' Todas as respostas estão corretas! Parabéns!';
    }
    
    // Exibir nota final
    notaFinalDiv.innerHTML = `
        <span class="label">Sua Nota Final</span>
        <span class="valor">${notaFinal}%</span>
        <span class="label">${acertos} de ${totalPerguntas} acertos</span>
    `;
    
    // Mostrar o container de resultado
    resultadoQuiz.style.display = 'block';
    
    // Scroll para o resultado
    resultadoQuiz.scrollIntoView({ behavior: 'smooth' });
    
    // Registrar respostas no console para verificação
    console.log('Respostas do Quiz:', respostas);
    console.log('Resultado Final:', { acertos, total: totalPerguntas, nota: notaFinal });
}

