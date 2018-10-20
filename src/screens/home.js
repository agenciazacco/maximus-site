import './stylesHome.css'
import React from 'react';
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm'

import metodImg from '../assets/icons/metodologia.png';
import habImg from '../assets/icons/habilidades.png';
import engImg from '../assets/icons/engrenage.png';
import contrImg from '../assets/icons/contratado.png';
import futuroImg from '../assets/imgs/futuro.png';
import perfil1 from '../assets/imgs/perfil1.png';
import perfil2 from '../assets/imgs/perfil2.png';
import Carousel from '../components/Carousel';

export default props => (
    <main>
        <div className="carousel-home">
            <Carousel/>
        </div>
        <Newsletter/>
        <div className="quem-somos">
            <h2>QUEM SOMOS</h2>
            <p> Somos um instituto de profissionalização, que visa não somente dar<br/> uma qualificação ao aluno, mas também ingressar o mesmo no mercado de<br/> trabalho.</p>
        </div>
        <div className="cursos">
            <h2 className="titulo">ESCOLHA O CURSO QUE VAI TE LEVAR AO TOPO</h2>
            <div className="cursos-container">
                <div className="curso-box">
                    <div className="img-curso">
                        <i className="icon ion-ios-laptop"></i>
                    </div>
                    <p className="curso-textos">
                        <span className="curso-titulo">INFORMÁTICA</span>
                        <span className="curso-sub">PROFISSIONALIZANTE</span>
                    </p>
                </div>
                <div className="curso-box">
                    <div className="img-curso">
                        <i className="icon ion-ios-pie"></i>
                    </div>
                    <p className="curso-textos">
                        <span className="curso-titulo">GESTÃO</span>
                        <span className="curso-sub">EMPRESARIAL</span>
                    </p>
                </div>
                <div className="curso-box">
                    <div className="img-curso">
                        <i className="icon ion-ios-people"></i>
                    </div>
                    <p className="curso-textos">
                        <span className="curso-titulo">TREINAMENTO</span>
                        <span className="curso-sub">DE AVALIAÇÃO</span>
                    </p>
                </div>    
            </div>
        </div>
        <div className="metodologia">
            <p className="metodologia-textos">
                <h2>NOSSA METODOLOGIA</h2>
                <p>
                Contamos com workshops, visitas técnicas a empresas e todo conteúdo necessário para que o jovem tenha uma oportunidade, porque 
                sabemos que um jovem hoje em dia sem preparação e sem alguém que o ajude não obtém grandes oportunidades, então nós do 
                Instituto Maximus fazemos o possível para dar uma oportunidade aos jovens que aqui chegam.
                </p>
            </p>
            <div className="metodologia-img">
                <img src={metodImg}/>
            </div>
        </div>
        <div className="metodologia">
            <p className="metodologia-textos">
                <h2>DOMINE AS HABILIDADES MAIS<br/> REQUISITADAS PELO MERCADO</h2>
                <p>
                As nossas aulas são desenvolvidas em colaboração do corpo  docente com as empresas parceiras do Instituto, para que o aluno aprenda conteúde que irá vivenciar no dia a dia de um escritório.
                </p>
            </p>
            <div className="metodologia-img">
                <img src={habImg}/>
            </div>
        </div>
        <div className="metodologia">
            <div className="metodologia-img">
                <img src={engImg}/>
            </div>
            <p className="metodologia-textos">
                <h2>POTENCIALIZE SUA CARREIRA</h2>
                <p>
                Construa um futuro brilhante em sua área de interesse. Amplie horizontes. Exceda expectativas!
                </p>
            </p>
        </div>
        <div className="metodologia">
            <p className="metodologia-textos">
                <h2>SEJA CONTRATADO</h2>
                <p>
                Nossas parcerias de contratação, trazem mais oportunidades para uma carreira surpreendente e promissora.
                Imagine seu futuro! O que você quer aprender hoje? Qual é o emprego dos seus sonhos?
                Descubra o caminho certo para você!
                </p>
            </p>
            <div className="metodologia-img">
                <img src={contrImg}/>
            </div>
        </div>
        <div className="futuro">
            <div className="futuro-block">
                <img src={futuroImg}/>
            </div>
            <div className="futuro-block">
                <p>
                    <h2>Imagine seu futuro</h2>
                    <span>O que você quer aprender hoje?</span>
                    <span>Qual é o emprego dos seu senhos</span>
                    <span>Descubra o caminho certo para você</span>
                </p>
                <button>ENTRE EM CONTATO</button>
            </div>
        </div>
        <div className="comunidade">
            <h2>NOSSA COMUNIDADE</h2>
            <div className="comunidade-boxs">
                <div className="comuni-box">
                    <img src={perfil1}/>
                    <span>Fernanda lorem ipsum<br/>Aluna de Gestão Empresarial</span>
                </div>
                <div className="comuni-box">
                    <img src={perfil2}/>
                    <span>Juliana Medeiros lorem ipsum<br/>Aluna de Gestão Empresarial</span>
                </div>
            </div>
        </div>
        <div className="title-4">
            <h2>COM <strong>QUALIFICAÇÃO, ESFORÇO E DEDICAÇÃO.</strong> PODEMOS TE AJUDAR A CONQUISTAR O PRIMEIRO EMPREGO</h2>
        </div>
        <div className="video-container">
            <div className="video-box">
                <video/>
            </div>
            <div className="video-texto">
            <p>
                Além da capacitação e qualificação profissional de qualidade, queremos que os jovens tenham uma oportunidade de conseguir um emprego e colocar em prática tudo o ue aprendeu em sala de aula!
            </p>
            </div>
        </div>
        <div className="title-4">
            <h2>VEJA COMO É SIMPLES</h2>
        </div>
        <div className="simples-container">
            <div className="simple-box">
                <i className="icon ion-ios-checkbox-outline"></i>
                <span className="simple-title">VOCÊ FAZ O CADASTRO</span>
                <span classname="simple-item">
                    PREENCHER TODOS OS DADOS SOLICITADOS NO FORMULÁRIO
                </span>
            </div>
            <div className="simple-box">
                <i className="icon ion-ios-send"></i>
                <span className="simple-title">ENVIA-NOS SEU CADASTRO</span>
                <span classname="simple-item">
                    CLIQUE NO BOTÃO CADASTRAR PARA NOS ENVIAR 
                </span>
            </div>
            <div className="simple-box">
                <i className="icon ion-ios-paper"></i>
                <span className="simple-title">ÁNALISE DO CANDIDATO</span>
                <span classname="simple-item">
                    IREMOS VERIFICAR QUAL SERÁ O SEU DESCONTO
                </span>
            </div>
            <div className="simple-box">
                <i className="icon ion-ios-man"></i>
                <span className="simple-title">BOLSA ESPECIAL PARA VOCÊ</span>
                <span classname="simple-item">
                    VOCÊ RECEBER UM E-MAIL PARA ESTUDAR
                </span>
            </div>
        </div>
        <ContactForm/>
    </main>
)