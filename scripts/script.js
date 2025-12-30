function copyToClipboard() {
    navigator.clipboard.writeText("lucascesar.lorena@gmail.com");
  }
  
// funcao para mudar a linguagem
  async function mudarlinguagem(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    console.log(langData);
    updateContent(langData);
  }


  // funcao para atualizar o conteudo da pagina com os dados do idioma
  function updateContent(langData) {
    document.querySelectorAll('[ling]').forEach(element => {
        const key = element.getAttribute('ling');
        element.textContent = langData[key];
    });
  }
  

  // funcao para obter a linguagem preferida do usuario
  async function fetchLanguageData(lang) {
    const response = await fetch(`./linguagem/${lang}.json`);
    return response.json();
  }
  

    // funcao para definir a linguagem preferida do usuario
    function setLanguagePreference(lang) {
      localStorage.setItem('linguagem', lang);
    }

// Funções para o Modal de Certificados
function abrirCertificado(url) {
    const modal = document.getElementById('modal-certificado');
    const iframe = document.getElementById('iframe-certificado');
    
    iframe.src = url;
    modal.style.display = 'flex'; // Usando flex para centralizar
}

function fecharCertificado(event) {
    // Fecha se clicar no botão X ou fora do conteúdo do modal
    if (event.target.id === 'modal-certificado' || event.target.classList.contains('close-btn')) {
        const modal = document.getElementById('modal-certificado');
        const iframe = document.getElementById('iframe-certificado');
        
        modal.style.display = 'none';
        iframe.src = ''; // Limpa o src para parar o carregamento/vídeo se houver
    }
}
    