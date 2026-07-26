// Elementos da imagem e da descrição do Destaque
const imagem = document.getElementById('imagem-dos-livros');
const descricao = document.getElementById('descricao');
const modal = document.getElementById('modal');
const btnModal = document.getElementById('btnmodal');
const btnFecharModalDetalhes = document.getElementById('fechar');

// Troca de livro nos botões de destaque
document.getElementById("btn1").addEventListener("click", () => {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-OpbGQAqEymnpJfUl8M150fMsowvW2p2nCY7ML_RSg&s=10";
    descricao.textContent = "Harry Potter e a Pedra Filosofal";
    imagem.style.border = "2px solid black";
});

document.getElementById("btn2").addEventListener("click", () => {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclXZ2zHgLHGLsI5r6cxieKNnvvhUoFurDNTrviaFrzg&s";
    descricao.textContent = "Harry Potter e a Câmara Secreta";
    imagem.style.border = "2px solid black";
});

document.getElementById("btn3").addEventListener("click", () => {
    imagem.src = "https://m.media-amazon.com/images/I/71cwLk4XIjL._AC_UF1000,1000_QL80_.jpg";
    descricao.textContent = "Harry Potter e o Prisioneiro de Azkaban";
    imagem.style.border = "2px solid black";
});

document.getElementById("btn4").addEventListener("click", () => {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPR9BdY5ZY6PTkitlBiuvHKfnmiroTXv0kXiIhAoo5Ag&s=10";
    descricao.textContent = "Harry Potter e o Cálice de Fogo";
    imagem.style.border = "2px solid black";
});

// Abertura e Fechamento do Modal de Detalhes
btnModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

btnFecharModalDetalhes.addEventListener("click", () => {
    modal.style.display = "none";
});

// Manipulação do Formulário de Cadastro e Modal de Sucesso
const formulario = document.querySelector('.formulario-da-livraria');
const modalSucesso = document.getElementById('modalSucesso');
const btnFecharModalSucesso = document.getElementById('btnFecharModal');

if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        if (modalSucesso) {
            modalSucesso.style.display = 'flex';
        }
        formulario.reset();
    });
}

if (btnFecharModalSucesso && modalSucesso) {
    btnFecharModalSucesso.addEventListener('click', function () {
        modalSucesso.style.display = 'none';
    });
}