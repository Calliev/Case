/* Estilo geral */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #b177d3, #e4c7f5);
    color: #333;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100vh;
}

/* Estilo das outras partes */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table tr td,
table tr th {
    padding: 15px;
    text-align: center;
    border: 1px solid #ddd;
}

table tr:nth-child(even) {
    background: #f9f9f9;
}

table tr:hover {
    background: #b177d3;
    color: #fff;
    transition: 0.3s;
}

/* Botões estilizados */
td button {
    padding: 10px 15px;
    border: none;
    background: #b177d3;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

td button:hover {
    background: #8e3aa5;
    transform: scale(1.1);
}

td button i {
    font-size: 20px;
}

/* Modal */
.modal-header {
    background: linear-gradient(135deg, #8e3aa5, #b177d3);
    color: #fff;
    padding: 15px;
    text-align: center;
}

.modal-body form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-body form .imgholder {
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.imgholder:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}

.imgholder .upload {
    position: absolute;
    bottom: 0;
    left: 0;
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
    width: 100%;
    padding: 10px;
    border: 1px solid #b177d3;
    border-radius: 5px;
    background: #f3e9f9;
    color: #333;
    transition: all 0.3s ease;
}

.form-select:hover {
    border-color: #8e3aa5;
    box-shadow: 0 0 5px rgba(142, 58, 165, 0.5);
}

span {
    color: red;
}

form .inputField > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 15px;
}

form .inputField > div label {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
}

form .inputField > div input {
    width: 100%;
    padding: 10px;
    border: 1px solid #b177d3;
    background: #f3e9f9;
    border-radius: 5px;
    transition: all 0.3s ease;
}

form .inputField > div input:focus {
    outline: none;
    border-color: #8e3aa5;
    box-shadow: 0 0 5px rgba(142, 58, 165, 0.5);
}

.modal-footer .submit {
    font-size: 18px;
    padding: 10px 20px;
    background: #b177d3;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-footer .submit:hover {
    background: #8e3aa5;
    transform: scale(1.1);
}

/* Responsividade */
@media (max-width: 768px) {
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
        border: none;
        padding-left: 0;
    }

    form .inputField > div input,
    .form-select {
        width: 100%;
    }

    .modal-footer .submit {
        width: 100%;
    }
}
