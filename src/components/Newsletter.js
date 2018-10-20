import React from 'react';
import styled from 'styled-components';


const Newsleter = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    min-height: 10vh;
`;

const ContentA = styled.div`
    display: flex;
    flex-flow: row wrap;
    max-width: 550px;
    flex-flow: row wrap;

    .box-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 2;
        background: #b20e0f;
        padding: 20px;

        i {
            font-size: 3.5rem;
            color: #fff;
        }
    }

    p {
        flex-grow: 7;
        margin-left: 20px;
        color: #b20e0f;
        h2 {
            font-size: 1.1rem; 
        }
    }
`;
const ContentB = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    max-width: 600px;
    padding: 20px;

    input {
        height: 50px;
        border: 1px solid #d9d9d9;
        min-width: 300px;

        @media (max-width: 500px) {
           margin-bottom: 10px;
        } 
    }

    button {
        background: #b20e0f;
        width: 150px;
        height: 50px;
        color: #fff;
        border: none;
        margin-left: 10px;
        
        @media (max-width: 500px) {
            width: 200px;
            align-self: center;
        } 
    }
`;


export default props => (
    <Newsleter>
        <ContentA>
            <div className="box-text">
                <i className="icon ion-md-mail"></i>
            </div>
            <p>
                <h2>Faça parte do clube das pessoas<br/> mais bacanas do mundo</h2>
                <span>(ao menos para gente)</span>
            </p>
        </ContentA>
        <ContentB>
            <input type="email" name="" id=""/>
            <button>ENVIAR</button>
        </ContentB>

    </Newsleter>
)