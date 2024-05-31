

// POPUP

const popupdep = document.querySelector("#pop");
const overlay = document.querySelector(".overlay");

function openP() {
    popupdep.classList.add("open");
}

function mostrarDepoimento() {
    popupdep.classList.remove("open");
}

function mostrarDepoimento() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const estado = document.getElementById('estado').value;
    const idade = document.getElementById('idade').value;
    const duvida = document.getElementById('duvida').value;

    // Criar um objeto com os dados da dúvida
    const novaDuvida = {
        nome: nome,
        telefone: telefone,
        email: email,
        estado: estado,
        idade: idade,
        duvida: duvida
    };

    // Recuperar dúvidas existentes do localStorage
    let duvidas = JSON.parse(localStorage.getItem('duvidas')) || [];
    
    // Adicionar a nova dúvida à lista
    duvidas.push(novaDuvida);

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('duvidas', JSON.stringify(duvidas));

    // Exibir as dúvidas na página
    exibirDuvidas();

    // Limpar formulário
    document.getElementById('helpForm').reset();
}

window.onload = function() {
    exibirDuvidas();
};

function exibirDuvidas() {
    const depoimentoDiv = document.getElementById('depoimentos');
    depoimentoDiv.innerHTML = '';

    // Recuperar dúvidas do localStorage
    const duvidas = JSON.parse(localStorage.getItem('duvidas')) || [];

    // Exibir cada dúvida na página
    duvidas.forEach(duvida => {
        const novoDepoimento = document.createElement('div');
        novoDepoimento.classList.add('depoimento');

        novoDepoimento.innerHTML = `
            <h3>Dúvida de ${duvida.nome}</h3>
            <p><strong>Telefone:</strong> ${duvida.telefone}</p>
            <p><strong>E-mail:</strong> ${duvida.email}</p>
            <p><strong>Estado:</strong> ${duvida.estado}</p>
            <p><strong>Idade:</strong> ${duvida.idade}</p>
            <p><strong>Dúvida:</strong> ${duvida.duvida}</p>
            <hr>
        `;

        depoimentoDiv.appendChild(novoDepoimento);
    });
}