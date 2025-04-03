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
    