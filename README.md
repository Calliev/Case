*Case*

Este projeto apresenta uma interface simples e intuitiva, com funcionalidades de edição de dados(CRUD)

*Funcionalidades*
- Cadastro de novos usuários.
- Exibição de usuários cadastrados.
- Edição de dados dos usuários.
- Remoção de usuários.
- Layout é adaptavel a diferentes tamanhos de telefones.

- @media screen and (max-width: 412px) {
    /* Estilos para telas menores ou iguais a 412px */
    
    table {
        font-size: 12px; /* Reduz o tamanho da fonte na tabela */
    }

    .modal-body form {
        flex-direction: column; /* Torna os elementos do formulário empilhados verticalmente */
    }

    .inputField {
        width: 100%; /* Faz com que o campo de input ocupe 100% da largura */
        margin-bottom: 15px; /* Adiciona um espaçamento inferior entre os campos */
    }

    .form-select {
        width: 100%; /* Faz com que o campo de seleção ocupe 100% da largura */
    }

    .imgholder {
        width: 100px; /* Reduz o tamanho da imagem */
        height: 100px;
    }

    .modal-footer .submit {
        font-size: 16px; /* Diminui o tamanho da fonte do botão de envio */
    }
    
    .modal-header {
        font-size: 18px; /* Ajusta o tamanho da fonte do título do modal */
    }

    /* Outras personalizações podem ser feitas conforme necessário */



  

}
