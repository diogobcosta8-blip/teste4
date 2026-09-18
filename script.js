// Aguarda a página carregar por completo
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('form-prevenda');
  const mensagemSucesso = document.getElementById('mensagem-sucesso');

  // Adiciona interação ao enviar o formulário
  formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
      // Oculta o formulário e exibe a mensagem de confirmação
      formulario.style.display = 'none';
      mensagemSucesso.classList.remove('hidden');
    }
  });
});
