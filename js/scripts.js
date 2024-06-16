// Função para exibir mensagem de alerta
function mostrarMensagemAlerta(mensagem, tipo) {
    var alerta = document.getElementById('mensagemAlerta');
    alerta.innerHTML = mensagem;
    alerta.classList.add('alert-' + tipo);
    alerta.style.display = 'block'; // Exibe o alerta
  }
  
  // Manipulação do formulário
  document.getElementById('formularioExemplo').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
    // Exemplo de validação simples (pode ser ajustado conforme necessidade)
    var nome = document.getElementById('inputNome').value.trim();
    var email = document.getElementById('inputEmail').value.trim();
  
    if (nome === '' || email === '') {
      mostrarMensagemAlerta('Por favor, preencha todos os campos.', 'danger');
    } else {
      mostrarMensagemAlerta('Formulário enviado com sucesso!', 'success');
      // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend, por exemplo.
    }
  });
  