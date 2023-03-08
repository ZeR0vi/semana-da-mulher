import LogoTemporario from '../assets/logotemp.png'

import Clarice from '../assets/clarice.jpg'

import One from '../assets/one.jpg'
import Two from '../assets/two.jpg'
import Three from '../assets/three.jpg'
import Four from '../assets/monumento.jpg'
import Five from '../assets/music.jpg'

import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpg'
import book3 from '../assets/book3.jpg'
import book4 from '../assets/book4.jpg'
import book5 from '../assets/book5.jpg'
import book6 from '../assets/book6.jpeg'

import '../styles/project.scss'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




export  function Project(){
      return(
            <div className="container">

                  <main>
            
                        <div className='home'>
                              <div className="texts">
                              
                               <h2>UM POUCO SOBRE</h2>
                               <h1 className='title'>CLARICE LISPECTOR</h1>

                                <p className='history'> Clarice Lispector (1920-1977) Clarice Lispector nasceu na aldeia de Tchetchelnik, na Ucrânia, no dia 10 de dezembro de 1920. Era filha de Pinkouss e Mania Lispector, casal de origem judaica que fugiu de seu país diante da perseguição aos judeus durante a Guerra Civil Russa. <span>foi um dos maiores nomes da literatura brasileira do SéculoXX.</span>
                                    Seu primeiro livro, <span>“Perto do Coração Selvagem”</span> recebeu o Prêmio Graça Aranha, foi uma das mais destacadas escritoras da terceira fase do modernismo brasileiro, chamada de "Geração de 45". Recebeu diversos prêmios, dentre eles o <span>Prêmio da Fundação Cultural do Distrito Federal</span> e o <span>Prêmio Graça Aranha</span>. Desde pequena, Clarice estudou várias línguas (português, francês, hebraico, inglês, iídiche) e teve aulas de piano. Era boa aluna na escola e gostava de escrever poemas.</p>

                                                                </div>
                              <img className='clarice' src={Clarice}  />
                             
                        </div>


                        <div className='mainn' id="#saiba">

                              <h1 className='curiosidade'>CURIOSIDADES</h1>


                              <div className="cards">

                                <div className="separar2">

                              <div className='one'>

<Card sx={{ maxWidth: 345, backgroundColor: '#161616',   }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={One}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
            INCÊNDIO
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff' }} color="text.secondary">
          Um episódio marcante de sua vida foi o incêndio que ocorreu em sua casa, em 1966, provocado por um cigarro. Como consequência, ficou hospitalizada durantes meses e quase teve de amputar sua mão.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

                              </div>

                              <div className='two'>
                              <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Two}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
            FACULDADE
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff' }} color="text.secondary">
          Após terminar a escola, Clarice ingressou na Faculdade de Direito da Universidade Federal do Rio de Janeiro. Na época, a sua decisão de estudar causou estranhamento, pois não pertencia à elite carioca e pelo fato de ser mulher.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </div>

                              </div>

                              <div className="separar">

                              <div className='three'>
                              <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Three}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
            TRADUTORA
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff' }} color="text.secondary">
          Poucos sabem, mas além de escritora, Clarice trabalhou muitos anos como tradutora para a Editora Artenova. Aliás, Clarice começou a trabalhar traduzindo grandes obras estrangeiras       </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </div>

                              <div className="four">
                              <Card sx={{ maxWidth: 345, backgroundColor: '#161616' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Four}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
            MONUMENTO
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff' }} color="text.secondary">
          Obra inaugurada no bairro do Leme. Escritora foi moradora da região por 12 anos.
Monumento em homenagem a Clarice Lispector.    </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </div>

                              <div className="five">
                              <Card sx={{ maxWidth: 345, backgroundColor: '#161616' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={Five}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
            HOMENAGEM
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff' }} color="text.secondary">
          Em 2020, ano em que Clarice Lispector completaria um século de vida, a cantora Beatriz Azevedo foi convidada pela Universidade de Princeton, em Nova Jérsei, nos Estados Unidos, para produzir um conteúdo em celebração ao centenário da escritora ucraniana. O convite se deu devido ao musical Now Clarice, produzido por Beatriz, no qual ela interpreta, ao lado de Moreno Veloso, canções originais e trechos dos livros de Clarice. Os rumos do país instigaram a dupla a vislumbrar uma transformação sociopolítica por meio da arte. Os versos criam um jogo de palavras e transformam nomes de grandes artistas em verbos, como no trecho: “Eu quero, espero / transformar este momento / na arte revelo / eu sou Hélio e me Tarsilo / Monaliso e Botticello”. </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </div>

                              </div>
                              </div>


                              <h1 className='book'>ALGUMAS DE SUAS OBRAS</h1>

                              <div className='books'>

                                    <div className="books1">
                                    <div className="b1">
                                    <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book1}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
            Perto do Coração Selvagem (1942)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                                    </div>

                                    <div className="b2">
                                    <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book2}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
          O Lustre (1946)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                                    </div>

                                    <div className="b3">
                                    <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book3}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
          Laços de Família (1960)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                                    </div>
                                    </div>

                                    <div className="books2">

                                    <div className="b4">
                                    <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book4}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
          A Maçã no Escuro (1961)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                                    </div>

                                    <div className="b5">
                                    <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book5}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
          A Legião Estrangeira (1964)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                                    </div>
                                    

                                    <div className="b6">
                                    <Card sx={{ maxWidth: 345, backgroundColor: '#161616',  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book6}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ color: '#FF1493' }} component="div">
          A Paixão Segundo G. H (1964)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                                    </div>

                                    </div>

                              </div>

                        </div>

                     
                  </main>

                  

           
            </div>
      )
}


/*
      frase:
"Sim, minha força está na solidão. Não tenho meo nem de chuvas <br/> tempestivas nem das grandes ventanias soltas pois eu também sou o  <br/> escuro da noite"

*/ 