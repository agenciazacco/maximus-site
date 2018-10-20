import React from 'react';
import styled from 'styled-components';
import logo from '../assets/imgs/logo2.png';

const Footer = styled.footer`
    display: flex;
    flex-flow: row wrap;
    min-height: 27vh;
    background: #999;
`;

const FooterLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
    background: #FFF;
`;

const FooterSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
    i {
        text-align: center;
        margin: 10px;
        background: #333;
        color: #fff;
        padding: 10px;
        width: 90px;
        font-size: 2.4rem;
        border-radius: 50%;
        &:hover {
            color: #b20e0e;
        }
    }
`;

const FooterContact = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 3;
    color: #fff;
    padding-top: 50px;

    p{
      margin: 10px;  
      font-size: 0.9rem;
    }

    i {
        width: 30px;
        font-size: 1.3rem;
        margin-right: 20px;
    }
`;

const FooterSmall = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 5vh;
    background: #555;
    color: #fff;
    font-style: italic;

`;


export default props => (
    <React.Fragment>
        <Footer>
            <FooterLogo>
                <img src={logo}/>
            </FooterLogo>
            <FooterSocial>
                <i className="icon ion-logo-facebook"></i>
                <i className="icon ion-logo-googleplus"></i>
                <i className="icon ion-logo-twitter"></i>

            </FooterSocial>
            <FooterContact>
            <p>
                <i className="icon ion-md-pin"></i>  Avenida Governador Leonel de Moura Brizola 1203, 8º andar
            </p>
            <p>
                <i className="icon ion-md-mail"></i> maximusinstituto@hotmail.com
            </p>
            <p>
                <i className="icon ion-md-call"></i> (21) 3845-0453
            </p>
            <p>
                <i className="icon ion-md-time"></i> Segunda á Sexta, das 10:00 ás 18:00.
            </p>
            </FooterContact>
        </Footer>
        <FooterSmall>
           <span>Desenvolvido pela Agência Digital <a href="http://agenciazacco.com.br"> ZACCO</a></span> 
        </FooterSmall>
    </React.Fragment>
)