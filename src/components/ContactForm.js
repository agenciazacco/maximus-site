import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    @media (max-width: 500px) {
        margin-bottom: 50px;
    }
`;

const FormInput = styled.input`
    min-width: 50%;
    margin: 10px;
    
    
`;

const FormLabel = styled.label`
    font-weight: bold;
    color: #555;
    margin: 10px;
    text-align: center;
`;

const FormButton = styled.button`
    margin: 20px;
    border: none;
    border-radius: 30px;
    min-width: 200px;
    min-height: 50px;
    background: #b20e0f;
    font-weight: bold;
    color: #fff;

    &:hover {
        background: #eee;
        color: #444;
        border: 3px solid #b20e0f;
        
    }

`;

export default class ContactForm  extends Component {
    state = {  }
    render() {
        return (
            <FormContainer>
                <h3 className="title-4">FORMULÁRIO DE CADASTRO PARA CONCORRER A BOLSAS DE ESTUDO.</h3>
                <FormLabel>SEU NOME COMPLETO</FormLabel>
                <FormInput type="text" placeholder="Nome completo"/>
                <FormLabel>SEU E-MAIL</FormLabel>
                <FormInput type="text" placeholder="e-mail que você usa"/>
                <FormLabel>SEU TELEFONE PARA CONTATO COM DDD + 9 DIGITOS </FormLabel>
                <FormInput type="text" placeholder="(DDD) XXXXX-XXXX"/>
                <FormLabel>SUA CIDADE</FormLabel>
                <FormInput type="text"placeholder="Nome de sua cidade"/>
                <FormButton onClick={ () => alert('Formulário desabilitado até a compra do domínio')}>CADASTRAR</FormButton>
            </FormContainer>
        );
    }
}