import ftVitor from '../../assets/vitor.jpg'
import ftSte from '../../assets/stephany.jpg'
import ftEli from '../../assets/eliane.jpg'
import ftRena from '../../assets/renan.jpg'
import ftLucas from '../../assets/valim.jpg'
import ftRaquel from '../../assets/valim.jpg'
import ftBeatriz from '../../assets/valim.jpg'
import ftGabriel from '../../assets/valim.jpg'

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
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
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
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    foto: ftSte,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Eliane dos Reis Cabral da Rocha',
    funcao: 'Desenvolvedora',
    foto: ftEli,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Renan Silva dos Anjos',
    funcao: 'Desenvolvedor',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    foto: ftRena,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Lucas Valim Souza',
    funcao: 'Designer',
    descricao: 'Lorem ipsum dolor sit amet consectetur adi, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
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
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
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
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    foto: ftRaquel,
    links: [
      '',
      '',
      ''
    ]
  },
  {
    nome: 'Gabriel Ferreira Passos Silva',
    funcao: 'Documentação',
    foto: ftGabriel,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa dicta. Accusantium sint facere quia voluptates culpa totam eum repellat et! Culpa adipisci voluptatibus accusamus sequi dolorem reprehenderit magnam neque.',
    links: [
      '',
      '',
      ''
    ]
  },
]

export default MEMBROS