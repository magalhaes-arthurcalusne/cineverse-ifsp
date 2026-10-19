const formulario = document.querySelector('.form-contact');
const statusEnvio = document.querySelector('#status-envio');

formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault();
   
    const dados = new FormData(formulario);
    const dadosFormatados = new URLSearchParams(dados).toString();

    try {
        const resposta = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: dadosFormatados
        });

        if (resposta.ok) {
            statusEnvio.textContent = 'Mensagem enviada com sucesso!';
            formulario.reset()
        } else {
            statusEnvio.textContent = 'Houve um erro: Mensagem não enviada';
        }
    } catch (error) {
        console.error('Erro na conexão:', error);
        statusEnvio.textContent = 'Erro de conexão. Tente novamente.';
    }
});
