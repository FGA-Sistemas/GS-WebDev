const respostasPreferencia = ['planetas', 'estrelas', 'meteoros'];
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
