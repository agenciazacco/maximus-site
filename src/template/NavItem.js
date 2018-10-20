import React from 'react'
import styled from 'styled-components';

const NavItem = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 130px;
    margin-right: 10px;
    font-family: sans-serif;
    color: #FFF;

    
    &:hover {
        background: #eee;
        color: #d01;
    }
    
    span {
        margin-top: 10px;
        text-align: center;
    }

    @media (max-width: 600px) {
        flex-flow: row nowrap;
        justify-content: flex-start;
        width: 100%;
        padding-left: 20px;

        span {
            text-align: left;
            margin-left: 20px;
        }
    } 
    `;

const Icon = styled.i`
    font-size: 35px;
`;

export default props => (
    <NavItem>
        <Icon className={`icon ion-ios-${props.icon}`}/>
        <span>{props.title}</span>
    </NavItem>
)