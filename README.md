# Case

/* Estilo geral */
table tr td {
    vertical-align: middle;
}

td button {
    margin: 5px;
}

td button i {
    font-size: 20px;
}

.modal-header {
    background: #b177d3;
}

.modal-body form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
}

.modal-body form .imgholder {
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.imgholder .upload {
    position: absolute;
    bottom: 0;
    left: 10;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.upload i {
    color: #b177d3;
    font-size: 45px;
}

.imgholder:hover .upload {
    display: flex;
}

.imgholder .upload input {
    display: none;
}

.modal-body form .inputField {
    flex-basis: 78%;
    border-left: 5px groove #b177d3;
    padding-left: 20px;
}

.form-select {
    width: 75%;
    margin-left: 5px;
    padding-left: 5px;
    background: #e4c7f5;
    border: 0.5px solid #000;
}

span {
    color: red;
}

form .inputField > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

form .inputField > div label {
    font-size: 20px;
    font-weight: 500;
}

form .inputField > div input {
    width: 75%;
    padding: 10px;
    border: 0.5px solid #000;
    background: #e4c7f5;
    border-radius: 5px;
    margin-left: 5px;
    padding-left: 5px;
}

.modal-footer .submit {
    font-size: 18px;
}

#readData form .inputField > div input {
    color: #000;
    font-size: 18px;
}

/* Responsividade para telas pequenas */
@media (max-width: 768px) {
    /* Ajuste da tabela */
    table {
        font-size: 14px;
    }

    table tr td, table tr th {
        padding: 10px;
        text-align: center;
    }

    td button i {
        font-size: 16px;
    }

    /* Modal responsivo */
    .modal-body form {
        flex-direction: column;
        align-items: center;
    }

    .modal-body form .imgholder {
        width: 120px;
        height: 120px;
        margin-bottom: 15px;
    }

    .modal-body form .inputField {
        flex-basis: 100%;
        border: none;
        padding: 0 10px;
    }

    /* Inputs e labels no formulário */
    form .inputField > div {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 15px;
    }

    form .inputField > div label {
        font-size: 16px;
    }

    form .inputField > div input,
    .form-select {
        width: 100%;
        margin-left: 0;
        padding: 10px;
    }

    /* Botões */
    td button {
        margin: 3px;
    }

    .modal-footer .submit {
        width: 100%;
        font-size: 16px;
    }

    /* Upload na imagem */
    .upload i {
        font-size: 35px;
    }

    .imgholder {
        width: 100%;
        height: auto;
    }
}

/* Responsividade para telas muito pequenas (até 576px) */
@media (max-width: 576px) {
    table {
        font-size: 12px;
    }

    .modal-body form .imgholder {
        width: 100px;
        height: 100px;
    }

    form .inputField > div label {
        font-size: 14px;
    }

    form .inputField > div input {
        padding: 8px;
        font-size: 14px;
    }

    .modal-footer .submit {
        font-size: 14px;
    }
}
