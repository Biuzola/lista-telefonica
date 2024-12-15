function adicionarContatos() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('numero').value;

    if(!nome || !telefone) {
        alert('Por favor, preencha todos os campos.')
    }

    const listaContatos = document.getElementById('listaContatos');
    const contatoItem = document.createElement('li')
    contatoItem.textContent = `Nome: ${nome} - Telefone: ${telefone}`;
    listaContatos.appendChild(contatoItem);

    document.getElementById('contactForm').reset();
}