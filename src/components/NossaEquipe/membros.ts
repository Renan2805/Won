import ftVitor from '../../assets/vh.jpg'
import ftStephany from '../../assets/stephany.jpg'
import ftEliane from '../../assets/eliane.jpg'
import ftRenan from '../../assets/renan.jpg'
import ftLucas from '../../assets/valim.jpg'
import ftRaquel from '../../assets/raquel.jpg'
import ftBeatriz from '../../assets/bia.jpg'

interface membro {
    nome: string,
    funcao: string,
    descricao:string,
    foto: string,
    links: Array<string>
  }

const MEMBROS:Array<membro> = [
  {
    nome: 'Vitor Hugo de Oliveira Lima',
    funcao: 'Desenvolvedor',
    descricao: 'Olá, meu nome é Vitor Lima. Sou responsável pela interface do site ou aplicativo, ou seja, tudo que é visto por quem está navegando. Qualquer coisa que o usuário possa visualizar ou interagir  vai ser exibido ao usuário na tela da aplicação, em outras palavras, trabalho em frente às câmeras.',
    foto: ftVitor,
    links: [
      'https://www.instagram.com/vhuugo_19/',
      'https://github.com/VitorH19',
      'https://www.linkedin.com/in/v%C3%ADtor-hugo-1165a51a6'
    ]
  },
  {
    nome: 'Stephany Julia de Oliveira Justino',
    funcao: 'Gerente',
    descricao: 'Olá, meu nome Stephany Justino. Sou responsável pela gestão e direção administrativa da empresa, estou por trás de todas as tomadas de decisões do time. Como uma líder, devo estar sempre voltada para o futuro e algumas vezes tenho que assumir riscos e trabalhar para transformar as situações imprevistas em resultados positivos.',
    foto: ftStephany,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Eliane dos Reis Cabral da Rocha',
    funcao: 'Desenvolvedora',
    foto: ftEliane,
    descricao: 'Olá meu nome é Eliane Cabral. Sou responsável pela gestão do perfil da empresa nas redes sociais, lido com a geração de conteúdo e a publicação de conteúdo online. Faço a conexão entre público e empresa acontecer da melhor forma possível, devo estar sempre conectada com as novas tendências do mercado e as novidades que surgem nas redes sociais. Além disso, presto suporte ao gerenciamento do banco de dados da empresa.',
    links: [
      'https://www.instagram.com/cabralelianee/',
      'https://github.com/elianecabral',
      ''
    ]
  },
  {
    nome: 'Renan Silva dos Anjos',
    funcao: 'Desenvolvedor',
    descricao: 'Olá, meu nome é Renan Anjos. Sou responsável back-end da aplicação, estou por “trás” da aplicação, atuando no que o usuário não pode visualizar. Lido com a persistência dos dados, regras de negócio, segurança da informação, performance e o armazenamento dos dados que são consumidos ou manipulados pelo aplicativo.',
    foto: ftRenan,
    links: [
      'https://www.instagram.com/silva_renan28/',
      'https://github.com/Renan2805',
      ''
    ]
  },
  {
    nome: 'Lucas Valim Souza',
    funcao: 'Designer',
    descricao: 'Olá, meu nome é Lucas Valim. Sou responsável por dar apoio a documentação, além disso produzir os diagramas UML. Eles descrevem como os objetos interagem uns com os outros para criar um sistema funcional, um dos principais meios para a documentação que especificam o sistema a ser construído.',
    foto: ftLucas,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Beatriz Santos de Lima',
    funcao: 'Documentação',
    descricao: 'Olá, meu nome é Beatriz Santos. Sou responsável pela documentação, tenho por função registrar e documentar tudo do que acontece nas reuniões do time. Devo sempre estar atenta a prazos para o levantamento, preparo e envio desses documentos, arquivamento e a manutenção da ordem dos mesmos.',
    foto: ftBeatriz,
    links: [
      'https://www.instagram.com/beatrizzzs_/',
      '',
      ''
    ]
  },
  {
    nome: 'Raquel de Oliveira Gomes Silva',
    funcao: 'Design',
    descricao: 'Olá, meu nome é Raquel de Oliveira. Sou responsável pelo design e a concepção do projeto, a criação de logotipos, marcas, fontes para a escrita, monto e ilustro peças de comunicação visual, e outros tipos de expressões visuais. Dei um toque especial para aquilo que só estava no papel, me permiti contribuir à uma série de processos que permitiu ao time ver o mundo de uma outra maneira, abrindo caminhos para a inovação. ',
    foto: ftRaquel,
    links: [
      'https://www.instagram.com/raquel_ogs/',
      '',
      ''
    ]
  }
]

export default MEMBROS