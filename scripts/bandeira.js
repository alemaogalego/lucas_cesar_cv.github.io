function selecionarIdioma(idioma) {
    // Chama a função existente para mudar o idioma
    mudarlinguagem(idioma);

    // Obtenha os botões
    const btnBrasil = document.getElementById('language-pt');
    const btnEUA = document.getElementById('language-en');

    // Alternar a classe 'selected' com base no idioma selecionado
    if (idioma === 'pt-br') {
        btnBrasil.classList.add('selected');
        btnEUA.classList.remove('selected');
    } else if (idioma === 'en') {
        btnEUA.classList.add('selected');
        btnBrasil.classList.remove('selected');
    }
}