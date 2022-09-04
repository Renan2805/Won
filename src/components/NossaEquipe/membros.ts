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
    descricao: string,
    foto: string,
    links: Array<string>
  }

const MEMBROS:Array<membro> = [
  {
    nome: 'Vitor Hugo de Oliveira Lima',
    funcao: 'Desenvolvedor',
    descricao: 'Lorem ipsum sit amet consectetur adi, culpa dicta. sit amet consectetur adi, culpa dicta. Accusantium sint facere quia Accusantium sint facere quia dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem repr.',
    foto: ftVitor,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Stephany Julia de Oliveira Justino',
    funcao: 'Gerente',
    descricao: 'Lorem ipsum sit amet consectetur adi, culpa dicta. Accusat magnam et consectetur adi, culpa dicta. Accusat ur adi, culpa dicta. Accusat ur adi, culpa dicta. Accusat ur adi, culpa dicta. Accusat ur adi, culpa dicta. Accusat ur adi, culpa dicta. Accusat magnaneque.',
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
    descricao: 'Lorem ipsum sit amet consectetur adi, culpa dicta. Accusantium sint facere quia dolor sit amet consectetur adipisicing elit. sit amet consectetur adi, culpa dicta. Accusantium sint facere quia Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Renan Silva dos Anjos',
    funcao: 'Desenvolvedor',
    descricao: 'Lorem sit amet sit amet consectetur adi, culpa dicta. Accusantium sint facere quia consectetur adi, culpa dicta. Accusantium sint facere quia ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    foto: ftRenan,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Lucas Valim Souza',
    funcao: 'Designer',
    descricao: 'Lorem ipsum dolor sit amet consectetur adi, culpa dicta. Accusantium sint facere quia sit amet consectetur adi, culpa dicta. Accusantium sint facere quia sit amet consectetur adi, culpa dicta. Accusantium sint facere quia  voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
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
    descricao: 'Lorem ipsum dolor sit amet consectetur adi, culpa dicta. Accusantium sint facere quia sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetu Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    foto: ftBeatriz,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Raquel de Oliveira Gomes Silva',
    funcao: 'Design',
    descricao: 'Lorem ipsum dolor sit amet consectetur adi, culpa dicta. Accusantium sint facere quia sit amet consectetur Lorem ipsum dolor sit amet consectetu adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem',
    foto: ftRaquel,
    links: [
      '',
      '',
      ''
    ]
  }
]

export default MEMBROS