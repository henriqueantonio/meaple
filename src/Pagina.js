import React, { useState, useEffect } from 'react';
import fireDb from "./firebase";
import { Link, useParams } from 'react-router-dom'

function Events() {


  




  return (
    <>

{ /* HTML */ }
        

{ /* NAV */ }
<header>
            <nav className="main-nav">
                <div className="row">
                    <img src="https://firebasestorage.googleapis.com/v0/b/meaple-f95d3.appspot.com/o/img%2FMeaple_logo.png?alt=media&token=09fb3409-84d8-4cd5-bbc6-a11f870b330c" alt="Meaple Logo" className="logo"/>
                    <a className="btn" href="#features">Sair da conta</a>
                </div>
            </nav>
        </header>
        
{ /* COLUNA POSTS */ }

        <div className="col col-posts">
            <h1>Posts</h1>
        </div>
        
        
        <div className="capa">
            
        </div>


        { /* INF */ }
        
        <div className="col col-info">
            <div className="perfil">
                <img src="https://firebasestorage.googleapis.com/v0/b/meaple-f95d3.appspot.com/o/img%2Fconaje_logo.jpg?alt=media&token=84323f4f-6715-4414-b35a-7aab30eb2ee3"/>
                <div className="infos">
                    <div >
                        <h2 className="nome">Conaje</h2>
                    </div>
                    <div className="sub_infos">
                        <h3 className="id_pagina">@conaje</h3>
                        <h3 className="seguidores">1.5k seguidores</h3>
                    </div>
                </div>
            </div>
            
            <div className="descricao">
                <p>
                    ⚠️ Atenção! Diante da evolução da disseminação do COVID-19 e o compromisso que temos com o bem estar de nossos clientes e equipe, o Lolla Bar estará com suas atividades suspensas temporariamente. Esperamos que, em breve, possamos voltar a compartilhar noites inesquecíveis por aqui! 💛
                </p>
            </div>
            
            <div className="descricao links">
                <a href="#">m.me/vamosprololla</a><br/><br/>
                <a href="#">41 9997-7788</a><br/><br/>
                <a href="#">Rua Fernando Simas, n°47 - Curitiba, PR - Brasil</a>
            </div>
            
            <div className="separador"></div>
            
            <div className="secao secao_categorias">
                <h1>Categorias</h1>
                <a className="categoria" href="#">Palestra</a>
            </div>
            
            <div className="quebra"></div>
            
            <div className="secao secao_tags">
                <h1>Tags</h1>
                <a className="tag" href="#">Casa Noturna</a>
                <a className="tag" href="#">Casa Noturna</a>
                <a className="tag" href="#">Casa Noturna</a>
                <a className="tag" href="#">Casa Noturna</a>
            </div>
            
            <div className="quebra"></div>
            
            <div className="secao secao_paginas_semelhantes">
                <h1>Páginas Semelhantes</h1>
                <a className="id_usuario" href="#"><img src=""/><p>mais55bar</p></a>
                <a className="id_usuario" href="#"><img src=""/><p>mais55bar</p></a>
                <a className="id_usuario" href="#"><img src=""/><p>mais55bar</p></a>
                <a className="id_usuario" href="#"><img src=""/><p>mais55bar</p></a>
                <a className="id_usuario" href="#"><img src=""/><p>mais55bar</p></a>
            </div>
            
        </div>
        
{ /* COLUNA EVENTOS */ }

        <div className="col col-eventos">
            <h1>Eventos</h1>
            <section className="body_rooms_grid body_rooms_grid-auto-flow">
   
    </section>
        </div>
    </>
  );
};

export default Events;
