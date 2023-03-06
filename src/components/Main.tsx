import '../styles/main.scss'

import LogoTemporario from '../assets/logotemp.png'
import menu from '../assets/menuburger.png'

export function Main(){



      return(
            <div className="container">

                  <section>
                        <div className="circle"></div>

                        <header>
                              <a href="#"> <img className='logo' src={LogoTemporario}/> </a>
                              <nav className='navigation'>
                                    <ul>
                                          <img className='burger' src={menu}/>
                                          <li><a href="#">Inicio</a></li>
                                          <li><a href="#">Projeto</a></li>
                                          <li><a href="#">Sobre</a></li>
                                    </ul>
                              </nav>
                        </header>


                        <div className='generic'>
                              <div className="texts">
                                    <h2>CONHEÇA O PROJETO DA <br/> <span>SEMANA DA MULHER</span></h2>
                                    <p>O Dia Internacional das Mulheres é celebrado, anualmente, no dia 8 de março.

A ideia de uma comemoração anual surgiu depois que o Partido Socialista da América organizou o Dia das Mulheres, em 20 de fevereiro de 1909, em Nova York — uma jornada de manifestação pela igualdade de direitos civis e em favor do voto feminino.</p>

                                    <a href='#'>CONHECER O PROJETO</a>
                              </div>
                        </div>

                  </section>
            </div>
      )
}