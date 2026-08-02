const produtos = [
  {
    id: 1,
    codigo: "00001",
    nome: "Camisa São Paulo III 2025",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "New Balance",
    temporada: "2025",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/sao-paulo/sao-paulo-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/sao-paulo/sao-paulo-frente.jpeg",
      "img/produtos/brasileiros/sao-paulo/sao-paulo-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 2,
    codigo: "00002",
    nome: "Camisa Lyon II 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/lyon/lyon-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/lyon/lyon-frente.jpeg",
      "img/produtos/internacionais/lyon/lyon-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 3,
    codigo: "00003",
    nome: "Camisa Noruega I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/noruega/noruega-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/noruega/noruega-frente.jpeg",
      "img/produtos/selecoes/noruega/noruega-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 4,
    codigo: "00004",
    nome: "Camisa Milan I 06/07",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2006/2007",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/milan/milan-frente.jpeg",
    imagens: [
      "img/produtos/retros/milan/milan-frente.jpeg",
      "img/produtos/retros/milan/milan-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 5,
    codigo: "00005",
    nome: "Camisa Boca Juniors I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 1,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/boca-juniors-25-26-casa/boca-juniors-25-26-casa-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/boca-juniors-25-26-casa/boca-juniors-25-26-casa-frente.jpeg",
      "img/produtos/internacionais/boca-juniors-25-26-casa/boca-juniors-25-26-casa-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 6,
    codigo: "00006",
    nome: "Camisa Uruguai I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 1,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/uruguai-25-26/uruguai-25-26-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/uruguai-25-26/uruguai-25-26-frente.jpeg",
      "img/produtos/selecoes/uruguai-25-26/uruguai-25-26-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 7,
    codigo: "00007",
    nome: "Camisa Corinthians II 2000",
    categoria: "Retrôs",
    tipo: "normal",
    marca: "Topper",
    temporada: "2000",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/corinthians-2000-visitante/corinthians-2000-visitante-frente.jpeg",
    imagens: [
      "img/produtos/retros/corinthians-2000-visitante/corinthians-2000-visitante-frente.jpeg",
      "img/produtos/retros/corinthians-2000-visitante/corinthians-2000-visitante-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 8,
    codigo: "00008",
    nome: "Camisa Remo II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Volt",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/remo-2026-ii/remo-2026-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/remo-2026-ii/remo-2026-ii-frente.jpeg",
      "img/produtos/brasileiros/remo-2026-ii/remo-2026-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 9,
    codigo: "00009",
    nome: "Camisa Flamengo I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/flamengo-2026/flamengo-2026-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/flamengo-2026/flamengo-2026-frente.jpeg",
      "img/produtos/brasileiros/flamengo-2026/flamengo-2026-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 10,
    codigo: "00010",
    nome: "Camisa Portugal I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/portugal-2026/portugal-2026-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/portugal-2026/portugal-2026-frente.jpeg",
      "img/produtos/selecoes/portugal-2026/portugal-2026-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 11,
    codigo: "00011",
    nome: "Camisa França I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/franca-2026/franca-2026-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/franca-2026/franca-2026-frente.jpeg",
      "img/produtos/selecoes/franca-2026/franca-2026-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 12,
    codigo: "00012",
    nome: "Camisa Corinthians I 2000",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Topper",
    temporada: "2000",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/corinthians-2000-casa/corinthians-2000-casa-frente.jpeg",
    imagens: [
      "img/produtos/retros/corinthians-2000-casa/corinthians-2000-casa-frente.jpeg",
      "img/produtos/retros/corinthians-2000-casa/corinthians-2000-casa-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 13,
    codigo: "00013",
    nome: "Camisa Barcelona II 03/04",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2003/2004",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-03-04-visitante/barcelona-03-04-visitante-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-03-04-visitante/barcelona-03-04-visitante-frente.jpeg",
      "img/produtos/retros/barcelona-03-04-visitante/barcelona-03-04-visitante-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 14,
    codigo: "00014",
    nome: "Camisa Real Madrid II 06/07",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2006/2007",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-06-07-ii/real-madrid-06-07-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-06-07-ii/real-madrid-06-07-ii-frente.jpeg",
      "img/produtos/retros/real-madrid-06-07-ii/real-madrid-06-07-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 15,
    codigo: "00015",
    nome: "Camisa Inter de Milão II 97/98",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Umbro",
    temporada: "1997/1998",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/inter-milao-97-98-ii/inter-milao-97-98-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/inter-milao-97-98-ii/inter-milao-97-98-ii-frente.jpeg",
      "img/produtos/retros/inter-milao-97-98-ii/inter-milao-97-98-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 16,
    codigo: "00016",
    nome: "Camisa Milan II 06/07",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2006/2007",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/milan-06-07-ii/milan-06-07-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/milan-06-07-ii/milan-06-07-ii-frente.jpeg",
      "img/produtos/retros/milan-06-07-ii/milan-06-07-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 17,
    codigo: "00017",
    nome: "Camisa Barcelona I 96/97",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Kappa",
    temporada: "1996/1997",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-96-97-i/barcelona-96-97-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-96-97-i/barcelona-96-97-i-frente.jpeg",
      "img/produtos/retros/barcelona-96-97-i/barcelona-96-97-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 18,
    codigo: "00018",
    nome: "Camisa Barcelona I 20/21",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2020/2021",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-20-21-i/barcelona-20-21-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-20-21-i/barcelona-20-21-i-frente.jpeg",
      "img/produtos/retros/barcelona-20-21-i/barcelona-20-21-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 19,
    codigo: "00019",
    nome: "Camisa Barcelona I 15/16",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2015/2016",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-15-16-i/barcelona-15-16-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-15-16-i/barcelona-15-16-i-frente.jpeg",
      "img/produtos/retros/barcelona-15-16-i/barcelona-15-16-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 20,
    codigo: "00020",
    nome: "Camisa Barcelona I 07/08",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2007/2008",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-07-08-i/barcelona-07-08-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-07-08-i/barcelona-07-08-i-frente.jpeg",
      "img/produtos/retros/barcelona-07-08-i/barcelona-07-08-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 21,
    codigo: "00021",
    nome: "Camisa Barcelona I 02/03",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2002/2003",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-02-03-ii/barcelona-02-03-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-02-03-ii/barcelona-02-03-ii-frente.jpeg",
      "img/produtos/retros/barcelona-02-03-ii/barcelona-02-03-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 22,
    codigo: "00022",
    nome: "Camisa Corinthians I 12/13",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2012/2013",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/corinthians-12-13-i/corinthians-12-13-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/corinthians-12-13-i/corinthians-12-13-i-frente.jpeg",
      "img/produtos/retros/corinthians-12-13-i/corinthians-12-13-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 23,
    codigo: "00023",
    nome: "Camisa Portugal II 04/05",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2004/2005",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/portugal-04-05-ii/portugal-04-05-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/portugal-04-05-ii/portugal-04-05-ii-frente.jpeg",
      "img/produtos/retros/portugal-04-05-ii/portugal-04-05-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 24,
    codigo: "00024",
    nome: "Camisa Real Madrid II 05/06",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2005/2006",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-05-06-ii/real-madrid-05-06-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-05-06-ii/real-madrid-05-06-ii-frente.jpeg",
      "img/produtos/retros/real-madrid-05-06-ii/real-madrid-05-06-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 25,
    codigo: "00025",
    nome: "Camisa Real Madrid I 11/12",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2011/2012",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-11-12-i/real-madrid-11-12-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-11-12-i/real-madrid-11-12-i-frente.jpeg",
      "img/produtos/retros/real-madrid-11-12-i/real-madrid-11-12-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 26,
    codigo: "00026",
    nome: "Camisa Real Madrid II 98/99",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "1998/1999",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-98-99-ii/real-madrid-98-99-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-98-99-ii/real-madrid-98-99-ii-frente.jpeg",
      "img/produtos/retros/real-madrid-98-99-ii/real-madrid-98-99-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 27,
    codigo: "00027",
    nome: "Camisa Arsenal I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/arsenal-26-27-i/arsenal-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/arsenal-26-27-i/arsenal-26-27-i-frente.jpeg",
      "img/produtos/internacionais/arsenal-26-27-i/arsenal-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 28,
    codigo: "00028",
    nome: "Camisa PSG I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/psg-26-27-i/psg-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/psg-26-27-i/psg-26-27-i-frente.jpeg",
      "img/produtos/internacionais/psg-26-27-i/psg-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 29,
    codigo: "00029",
    nome: "Camisa Real Madrid I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-madrid-25-26-i/real-madrid-25-26-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-madrid-25-26-i/real-madrid-25-26-i-frente.jpeg",
      "img/produtos/internacionais/real-madrid-25-26-i/real-madrid-25-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 30,
    codigo: "00030",
    nome: "Camisa Real Madrid II 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-madrid-25-26-ii/real-madrid-25-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-madrid-25-26-ii/real-madrid-25-26-ii-frente.jpeg",
      "img/produtos/internacionais/real-madrid-25-26-ii/real-madrid-25-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 31,
    codigo: "00031",
    nome: "Camisa Real Madrid I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-madrid-26-27-i/real-madrid-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-madrid-26-27-i/real-madrid-26-27-i-frente.jpeg",
      "img/produtos/internacionais/real-madrid-26-27-i/real-madrid-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 32,
    codigo: "00032",
    nome: "Camisa Inter Miami I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/miami-25-26-i/miami-25-26-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/miami-25-26-i/miami-25-26-i-frente.jpeg",
      "img/produtos/internacionais/miami-25-26-i/miami-25-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 33,
    codigo: "00033",
    nome: "Camisa Lyon I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/lyon-25-26-i/lyon-25-26-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/lyon-25-26-i/lyon-25-26-i-frente.jpeg",
      "img/produtos/internacionais/lyon-25-26-i/lyon-25-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 34,
    codigo: "00034",
    nome: "Camisa Portugal II 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/portugal-26-27-ii/portugal-26-27-ii-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/portugal-26-27-ii/portugal-26-27-ii-frente.jpeg",
      "img/produtos/selecoes/portugal-26-27-ii/portugal-26-27-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 35,
    codigo: "00035",
    nome: "Camisa Brasil I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 1,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/brasil-26-27-i/brasil-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/brasil-26-27-i/brasil-26-27-i-frente.jpeg",
      "img/produtos/selecoes/brasil-26-27-i/brasil-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 36,
    codigo: "00036",
    nome: "Camisa Brasil Vermelha 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Jordan",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/brasil-red-26-27/brasil-red-26-27-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/brasil-red-26-27/brasil-red-26-27-frente.jpeg",
      "img/produtos/selecoes/brasil-red-26-27/brasil-red-26-27-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 37,
    codigo: "00037",
    nome: "Camisa Remo I 2025",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Volt",
    temporada: "2025",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/remo-25-i/remo-25-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/remo-25-i/remo-25-i-frente.jpeg",
      "img/produtos/brasileiros/remo-25-i/remo-25-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 38,
    codigo: "00038",
    nome: "Camisa Remo I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Volt",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 1,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/remo-26-i/remo-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/remo-26-i/remo-26-i-frente.jpeg",
      "img/produtos/brasileiros/remo-26-i/remo-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 39,
    codigo: "00039",
    nome: "Camisa Remo 2025 Edição Especial",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Volt",
    temporada: "2025",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/remo-25-es/remo-25-es-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/remo-25-es/remo-25-es-frente.jpeg",
      "img/produtos/brasileiros/remo-25-es/remo-25-es-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 40,
    codigo: "00040",
    nome: "Camisa Paysandu II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Lobo",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/paysandu-26-ii/paysandu-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/paysandu-26-ii/paysandu-26-ii-frente.jpeg",
      "img/produtos/brasileiros/paysandu-26-ii/paysandu-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 41,
    codigo: "00041",
    nome: "Camisa Paysandu I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Lobo",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/paysandu-26-i/paysandu-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/paysandu-26-i/paysandu-26-i-frente.jpeg",
      "img/produtos/brasileiros/paysandu-26-i/paysandu-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 42,
    codigo: "00042",
    nome: "Camisa Paysandu I 2025",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Lobo",
    temporada: "2025",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/paysandu-25-i/paysandu-25-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/paysandu-25-i/paysandu-25-i-frente.jpeg",
      "img/produtos/brasileiros/paysandu-25-i/paysandu-25-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 43,
    codigo: "00043",
    nome: "Camisa Paysandu III 2023",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Lobo",
    temporada: "2023",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/paysandu-23-iii/paysandu-23-iii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/paysandu-23-iii/paysandu-23-iii-frente.jpeg",
      "img/produtos/brasileiros/paysandu-23-iii/paysandu-23-iii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 44,
    codigo: "00044",
    nome: "Camisa Flamengo II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/flamengo-26-ii/flamengo-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/flamengo-26-ii/flamengo-26-ii-frente.jpeg",
      "img/produtos/brasileiros/flamengo-26-ii/flamengo-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 45,
    codigo: "00045",
    nome: "Camisa São Paulo II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "New Balance",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/sao-paulo-26-ii/sao-paulo-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/sao-paulo-26-ii/sao-paulo-26-ii-frente.jpeg",
      "img/produtos/brasileiros/sao-paulo-26-ii/sao-paulo-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 46,
    codigo: "00046",
    nome: "Camisa São Paulo I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "New Balance",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/sao-paulo-26-i/sao-paulo-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/sao-paulo-26-i/sao-paulo-26-i-frente.jpeg",
      "img/produtos/brasileiros/sao-paulo-26-i/sao-paulo-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 47,
    codigo: "00047",
    nome: "Camisa Palmeiras II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/palmeiras-26-ii/palmeiras-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/palmeiras-26-ii/palmeiras-26-ii-frente.jpeg",
      "img/produtos/brasileiros/palmeiras-26-ii/palmeiras-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 48,
    codigo: "00048",
    nome: "Camisa Palmeiras I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/palmeiras-26-i/palmeiras-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/palmeiras-26-i/palmeiras-26-i-frente.jpeg",
      "img/produtos/brasileiros/palmeiras-26-i/palmeiras-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 49,
    codigo: "00049",
    nome: "Camisa Corinthians II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/corinthians-26-ii/corinthians-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/corinthians-26-ii/corinthians-26-ii-frente.jpeg",
      "img/produtos/brasileiros/corinthians-26-ii/corinthians-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 50,
    codigo: "00050",
    nome: "Camisa Corinthians I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/corinthians-26-i/corinthians-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/corinthians-26-i/corinthians-26-i-frente.jpeg",
      "img/produtos/brasileiros/corinthians-26-i/corinthians-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 51,
    codigo: "00051",
    nome: "Camisa Liverpool I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/liverpool-26-27-i/liverpool-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/liverpool-26-27-i/liverpool-26-27-i-frente.jpeg",
      "img/produtos/internacionais/liverpool-26-27-i/liverpool-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 52,
    codigo: "00052",
    nome: "Camisa Santos I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Umbro",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/santos-26-i/santos-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/santos-26-i/santos-26-i-frente.jpeg",
      "img/produtos/brasileiros/santos-26-i/santos-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 53,
    codigo: "00053",
    nome: "Camisa Bahia II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/bahia-26-ii/bahia-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/bahia-26-ii/bahia-26-ii-frente.jpeg",
      "img/produtos/brasileiros/bahia-26-ii/bahia-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 54,
    codigo: "00054",
    nome: "Camisa Sport I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Kappa",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/sport-26-i/sport-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/sport-26-i/sport-26-i-frente.jpeg",
      "img/produtos/brasileiros/sport-26-i/sport-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 55,
    codigo: "00055",
    nome: "Camisa Botafogo I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Mizuno",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/botafogo-26-i/botafogo-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/botafogo-26-i/botafogo-26-i-frente.jpeg",
      "img/produtos/brasileiros/botafogo-26-i/botafogo-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 56,
    codigo: "00056",
    nome: "Camisa Santos II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Umbro",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/santos-26-ii/santos-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/santos-26-ii/santos-26-ii-frente.jpeg",
      "img/produtos/brasileiros/santos-26-ii/santos-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 57,
    codigo: "00057",
    nome: "Camisa Atlético Paranaense II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Umbro",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/paranaense-26-ii/paranaense-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/paranaense-26-ii/paranaense-26-ii-frente.jpeg",
      "img/produtos/brasileiros/paranaense-26-ii/paranaense-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 58,
    codigo: "00058",
    nome: "Camisa Palmeiras Goleiro III 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/palmeiras-gk-26-iii/palmeiras-gk-26-iii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/palmeiras-gk-26-iii/palmeiras-gk-26-iii-frente.jpeg",
      "img/produtos/brasileiros/palmeiras-gk-26-iii/palmeiras-gk-26-iii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 59,
    codigo: "00059",
    nome: "Camisa Botafogo Goleiro I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Mizuno",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/botafogo-gk-26-i/botafogo-gk-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/botafogo-gk-26-i/botafogo-gk-26-i-frente.jpeg",
      "img/produtos/brasileiros/botafogo-gk-26-i/botafogo-gk-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 60,
    codigo: "00060",
    nome: "Camisa Colômbia I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/colombia-26-27-i/colombia-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/colombia-26-27-i/colombia-26-27-i-frente.jpeg",
      "img/produtos/selecoes/colombia-26-27-i/colombia-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 61,
    codigo: "00061",
    nome: "Camisa Portugal Edição Especial 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/portugal-26-27-ee/portugal-26-27-ee-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/portugal-26-27-ee/portugal-26-27-ee-frente.jpeg",
      "img/produtos/selecoes/portugal-26-27-ee/portugal-26-27-ee-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 62,
    codigo: "00062",
    nome: "Camisa Cabo Verde I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Capelli",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/cabo-verde-26-27-i/cabo-verde-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/cabo-verde-26-27-i/cabo-verde-26-27-i-frente.jpeg",
      "img/produtos/selecoes/cabo-verde-26-27-i/cabo-verde-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 63,
    codigo: "00063",
    nome: "Camisa Espanha I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/espanha-26-27-i/espanha-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/espanha-26-27-i/espanha-26-27-i-frente.jpeg",
      "img/produtos/selecoes/espanha-26-27-i/espanha-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 64,
    codigo: "00064",
    nome: "Camisa Bayern de Munique I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/bayern-26-27-i/bayern-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/bayern-26-27-i/bayern-26-27-i-frente.jpeg",
      "img/produtos/internacionais/bayern-26-27-i/bayern-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 65,
    codigo: "00065",
    nome: "Camisa Barcelona I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/barcelona-26-27-i/barcelona-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/barcelona-26-27-i/barcelona-26-27-i-frente.jpeg",
      "img/produtos/internacionais/barcelona-26-27-i/barcelona-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 66,
    codigo: "00066",
    nome: "Camisa Manchester City I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/city-26-27-i/city-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/city-26-27-i/city-26-27-i-frente.jpeg",
      "img/produtos/internacionais/city-26-27-i/city-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 67,
    codigo: "00067",
    nome: "Camisa Real Betis I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Hummel",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/betis-26-27-i/betis-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/betis-26-27-i/betis-26-27-i-frente.jpeg",
      "img/produtos/internacionais/betis-26-27-i/betis-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 68,
    codigo: "00068",
    nome: "Camisa Inter de Milão I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/inter-26-27-i/inter-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/inter-26-27-i/inter-26-27-i-frente.jpeg",
      "img/produtos/internacionais/inter-26-27-i/inter-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 69,
    codigo: "00069",
    nome: "Camisa Milan II 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/milan-26-27-ii/milan-26-27-ii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/milan-26-27-ii/milan-26-27-ii-frente.jpeg",
      "img/produtos/internacionais/milan-26-27-ii/milan-26-27-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 70,
    codigo: "00070",
    nome: "Camisa Newcastle I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/newcastle-26-27-i/newcastle-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/newcastle-26-27-i/newcastle-26-27-i-frente.jpeg",
      "img/produtos/internacionais/newcastle-26-27-i/newcastle-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 71,
    codigo: "00071",
    nome: "Camisa Aston Villa I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/aston-26-27-i/aston-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/aston-26-27-i/aston-26-27-i-frente.jpeg",
      "img/produtos/internacionais/aston-26-27-i/aston-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 72,
    codigo: "00072",
    nome: "Camisa Celtic I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/celtic-26-27-i/celtic-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/celtic-26-27-i/celtic-26-27-i-frente.jpeg",
      "img/produtos/internacionais/celtic-26-27-i/celtic-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 73,
    codigo: "00073",
    nome: "Camisa Lyon I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/lyon-26-27-i/lyon-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/lyon-26-27-i/lyon-26-27-i-frente.jpeg",
      "img/produtos/internacionais/lyon-26-27-i/lyon-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 74,
    codigo: "00074",
    nome: "Camisa Arsenal III 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/arsenal-26-27-iii/arsenal-26-27-iii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/arsenal-26-27-iii/arsenal-26-27-iii-frente.jpeg",
      "img/produtos/internacionais/arsenal-26-27-iii/arsenal-26-27-iii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 75,
    codigo: "00075",
    nome: "Camisa Manchester United I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/united-26-27-i/united-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/united-26-27-i/united-26-27-i-frente.jpeg",
      "img/produtos/internacionais/united-26-27-i/united-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 76,
    codigo: "00076",
    nome: "Camisa Cruzeiro I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/cruzeiro-26-i/cruzeiro-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/cruzeiro-26-i/cruzeiro-26-i-frente.jpeg",
      "img/produtos/brasileiros/cruzeiro-26-i/cruzeiro-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 77,
    codigo: "00077",
    nome: "Camisa Cruzeiro II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/cruzeiro-26-ii/cruzeiro-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/cruzeiro-26-ii/cruzeiro-26-ii-frente.jpeg",
      "img/produtos/brasileiros/cruzeiro-26-ii/cruzeiro-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 78,
    codigo: "00078",
    nome: "Camisa Internacional I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/internacional-26-i/internacional-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/internacional-26-i/internacional-26-i-frente.jpeg",
      "img/produtos/brasileiros/internacional-26-i/internacional-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 79,
    codigo: "00079",
    nome: "Camisa Internacional II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/internacional-26-ii/internacional-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/internacional-26-ii/internacional-26-ii-frente.jpeg",
      "img/produtos/brasileiros/internacional-26-ii/internacional-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 80,
    codigo: "00080",
    nome: "Camisa Grêmio I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "New Balance",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/gremio-26-i/gremio-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/gremio-26-i/gremio-26-i-frente.jpeg",
      "img/produtos/brasileiros/gremio-26-i/gremio-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 81,
    codigo: "00081",
    nome: "Camisa Grêmio II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "New Balance",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/gremio-26-ii/gremio-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/gremio-26-ii/gremio-26-ii-frente.jpeg",
      "img/produtos/brasileiros/gremio-26-ii/gremio-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 82,
    codigo: "00082",
    nome: "Camisa Fluminense I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/fluminense-26-i/fluminense-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/fluminense-26-i/fluminense-26-i-frente.jpeg",
      "img/produtos/brasileiros/fluminense-26-i/fluminense-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 83,
    codigo: "00083",
    nome: "Camisa Fluminense II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/fluminense-26-ii/fluminense-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/fluminense-26-ii/fluminense-26-ii-frente.jpeg",
      "img/produtos/brasileiros/fluminense-26-ii/fluminense-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 84,
    codigo: "00084",
    nome: "Camisa Vitória I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Volt",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/vitoria-26-i/vitoria-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/vitoria-26-i/vitoria-26-i-frente.jpeg",
      "img/produtos/brasileiros/vitoria-26-i/vitoria-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 85,
    codigo: "00085",
    nome: "Camisa Coritiba I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Diadora",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/coritiba-26-i/coritiba-26-i-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/coritiba-26-i/coritiba-26-i-frente.jpeg",
      "img/produtos/brasileiros/coritiba-26-i/coritiba-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 86,
    codigo: "00086",
    nome: "Camisa Botafogo II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Mizuno",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/botafogo-26-ii/botafogo-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/botafogo-26-ii/botafogo-26-ii-frente.jpeg",
      "img/produtos/brasileiros/botafogo-26-ii/botafogo-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 87,
    codigo: "00087",
    nome: "Camisa Al-Nassr I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/nassr-26-27-i/nassr-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/nassr-26-27-i/nassr-26-27-i-frente.jpeg",
      "img/produtos/internacionais/nassr-26-27-i/nassr-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 88,
    codigo: "00088",
    nome: "Camisa Al-Nassr I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/nassr-25-26-i/nassr-25-26-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/nassr-25-26-i/nassr-25-26-i-frente.jpeg",
      "img/produtos/internacionais/nassr-25-26-i/nassr-25-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 89,
    codigo: "00089",
    nome: "Camisa Al-Nassr III 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/nassr-25-26-iii/nassr-25-26-iii-frente.webp",
    imagens: [
      "img/produtos/internacionais/nassr-25-26-iii/nassr-25-26-iii-frente.webp",
      "img/produtos/internacionais/nassr-25-26-iii/nassr-25-26-iii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 90,
    codigo: "00090",
    nome: "Camisa Borussia Dortmund I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/dortmund-26-27-i/dortmund-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/dortmund-26-27-i/dortmund-26-27-i-frente.jpeg",
      "img/produtos/internacionais/dortmund-26-27-i/dortmund-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 91,
    codigo: "00091",
    nome: "Camisa Frankfurt I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/frankfurt-26-27-i/frankfurt-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/frankfurt-26-27-i/frankfurt-26-27-i-frente.jpeg",
      "img/produtos/internacionais/frankfurt-26-27-i/frankfurt-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 92,
    codigo: "00092",
    nome: "Camisa Chelsea II 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/chelsea-26-27-ii/chelsea-26-27-ii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/chelsea-26-27-ii/chelsea-26-27-ii-frente.jpeg",
      "img/produtos/internacionais/chelsea-26-27-ii/chelsea-26-27-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 93,
    codigo: "00093",
    nome: "Camisa Chelsea I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/chelsea-26-27-i/chelsea-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/chelsea-26-27-i/chelsea-26-27-i-frente.jpeg",
      "img/produtos/internacionais/chelsea-26-27-i/chelsea-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 94,
    codigo: "00094",
    nome: "Camisa Olympiacos I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/olympiacos-26-27-i/olympiacos-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/olympiacos-26-27-i/olympiacos-26-27-i-frente.jpeg",
      "img/produtos/internacionais/olympiacos-26-27-i/olympiacos-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 95,
    codigo: "00095",
    nome: "Camisa Arsenal II 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/arsenal-26-27-ii/arsenal-26-27-ii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/arsenal-26-27-ii/arsenal-26-27-ii-frente.jpeg",
      "img/produtos/internacionais/arsenal-26-27-ii/arsenal-26-27-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 96,
    codigo: "00096",
    nome: "Camisa Real Madrid III 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-26-27-iii/real-26-27-iii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-26-27-iii/real-26-27-iii-frente.jpeg",
      "img/produtos/internacionais/real-26-27-iii/real-26-27-iii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 97,
    codigo: "00097",
    nome: "Camisa Real Madrid II 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-26-27-ii/real-26-27-ii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-26-27-ii/real-26-27-ii-frente.jpeg",
      "img/produtos/internacionais/real-26-27-ii/real-26-27-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 98,
    codigo: "00098",
    nome: "Camisa Bayern de Munique II 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/bayern-26-27-ii/bayern-26-27-ii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/bayern-26-27-ii/bayern-26-27-ii-frente.jpeg",
      "img/produtos/internacionais/bayern-26-27-ii/bayern-26-27-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 99,
    codigo: "00099",
    nome: "Camisa Remo I 1999",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Penalty",
    temporada: "1999",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/remo-1999-i/remo-1999-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/remo-1999-i/remo-1999-i-frente.jpeg",
      "img/produtos/retros/remo-1999-i/remo-1999-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 100,
    codigo: "00100",
    nome: "Camisa Paysandu I 2003",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Finta",
    temporada: "2003",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/paysandu-2003-i/paysandu-2003-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/paysandu-2003-i/paysandu-2003-i-frente.jpeg",
      "img/produtos/retros/paysandu-2003-i/paysandu-2003-i-costas.jpeg"
    ],

    destaque: true
  },
];