function copyEmail() {
    const email = "lucascesar.lorena@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("E-mail copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar o e-mail: ", err);
    });
}