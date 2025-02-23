// Função para fechar o aviso
function fecharAviso() {
    document.getElementById("overlayAviso").style.display = "none";
}

// Função para fechar o diálogo de sucesso
function fecharDialogo() {
    document.getElementById("dialogo").style.display = "none";
}

// Manipulando o envio do formulário
document.getElementById("recrutamentoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    if (!document.getElementById("aceitarRegras").checked) {
        alert("⚠️ Você deve aceitar as regras antes de enviar!");
        return;
    }

    let nome = document.getElementById("nome").value.trim();
    let nick = document.getElementById("nick").value.trim();
    let id = document.getElementById("id").value.trim();
    let contato = document.getElementById("contato").value.trim();

    if (nome === "" || nick === "" || id === "" || contato === "") {
        alert("⚠️ Todos os campos são obrigatórios! Preencha todas as informações.");
        return;
    }

    let adminPhone = "201007224767"; // Seu número para receber as mensagens
    let apiKey = "3473139"; // API Key do CallMeBot

    let message = `🔥 Novo Pedido de Recrutamento 🔥\n\n👤 Nome: ${nome}\n🎮 Nick: ${nick}\n🆔 ID: ${id}\n📞 Contato: ${contato}`;

    let apiURL = `https://api.callmebot.com/whatsapp.php?phone=${adminPhone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

    fetch(apiURL)
        .then(response => response.text())
        .then(data => {
            alert("✅ Pedido enviado com sucesso! Entraremos em contato em breve.");
            document.getElementById("recrutamentoForm").reset(); // Limpa os campos após o envio
        })
        .catch(error => {
            alert("❌ Erro ao enviar o pedido! Tente novamente mais tarde.");
        });
});
