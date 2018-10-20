import commonStyles from '../commonStyles';
import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/imgs/logo.png';
import NavItem from './NavItem';

const Wrap = styled.header`
    display: flex;
    flex-flow: column nowrap;
    min-height: 20vh;
    width: 100%;
`;

const SmallHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    background: ${commonStyles.colors.secondary}
    min-height: 4vh;
    color: #fff;
    padding-right: 20px;
    div {
        margin: 5px;
    }

    i {
        margin: 10px;
    }

    @media (max-width: 500px) {
        justify-content: flex-start;
    } 
`;

const BigHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    background: ${commonStyles.colors.primary}
    min-height: 11vh;
    border-top: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
`;
const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #555;
    min-height: 6vh;

    h1 {
        font-family: sans-serif;
        color: #FFF;
        font-size: 1.1rem;
        font-weight: 100;
        text-align: center;

        @media (max-width: 500px) {
            font-size: 0.8rem;
        } 
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-grow: 5;
    align-items: center;
    justify-content: center;
`;

const NavBar = styled.nav`
    display: flex;
    flex-grow: 8;
    justify-content: center;
    flex-flow: row nowrap;

    @media (max-width: 600px) {
        flex-flow: column nowrap;
    } 

`

const ResponsiveMenu = styled.nav`
    display: none;

    @media (max-width: 500px) {
        display: flex;
    } 

`;

const Logo = styled.img`
    max-height: 90px;
    margin-top: 10px;

    @media (max-width: 500px) {
        max-width: 200px;
    } 
`;


export default class Header extends Component {
    state = {  }
    render() {
        return (
            <Wrap>
                <SmallHeader>
                    <div>
                        <i className="icon ion-md-call"></i>  
                        <span>(21)3333-3333</span>
                    </div>
                    <div>
                        <i className="icon ion-logo-whatsapp"></i>  
                        <span>(21)22222-2222</span>
                    </div>
                </SmallHeader>
                <BigHeader>
                    <LogoContainer>
                        <Logo src={logo}/>
                    </LogoContainer>
                    <NavBar>
                        <NavItem icon="home" title="Home"/>
                        <NavItem icon="school" title="O instituto"/>
                        <NavItem icon="paper-plane" title="Cursos"/>
                        <NavItem icon="chatbubbles" title="Fale conosco"/>
                    </NavBar>
                </BigHeader>
                <HeaderTitle>
                    <h1>INSTITUTO PROFISSIONALIZANTE</h1>
                </HeaderTitle>
            </Wrap>
        );
    }
}
