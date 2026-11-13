// Todos os textos, links e imagens do site ficam aqui.
// Para trocar telefone, endereço ou textos, edite só este arquivo.

const whatsappNumero = "5547996148351";
const mensagem = "Olá! Vim pelo site e gostaria de agendar uma consulta.";

export const clinic = {
  marca: "Psicologia e Psiquiatria",
  whatsappNumero,
  telefoneExibido: "(47) 99614-8351",
  whatsappUrl: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`,
  botao: "Agendar consulta",

  doctoraliaUrl: "https://www.doctoralia.com.br/perfil/nelson-alberto-martinez",
  nota: "5,0",
  opinioes: 148,

  endereco: {
    linha1: "Rua 3300, 360 - Sala 311, Centro",
    linha2: "Balneário Camboriú - SC, 88330-272",
    mapa:
      "https://www.google.com/maps?q=" +
      encodeURIComponent("Rua 3300, 360, Centro, Balneário Camboriú, SC, 88330-272") +
      "&output=embed",
  },

  hero: {
    titulo: "Psicólogo e psiquiatra, juntos no seu caso",
    apoio:
      "Terapia, avaliação e medicação alinhadas em um só acompanhamento. Presencial em Balneário Camboriú ou online.",
  },

  equipe: [
    {
      id: "nelson",
      nome: "Nelson Martínez",
      funcao: "Psicólogo e neuropsicólogo clínico",
      registro: "CRP 12/25608",
      foto: "/img/nelson.jpg",
      recorte: "/img/nelson-recorte.webp",
      fotoAlt: "Nelson Martínez, psicólogo e neuropsicólogo clínico",
      texto:
        "Terapia Cognitivo-Comportamental e avaliação neuropsicológica. A pós-graduação em Farmacologia Clínica ajuda a entender a medicação do paciente e a conversar com o psiquiatra.",
      pontos: [
        "Psicologia pela Uniavan e Gestão de Pessoas pela Univ. Autónoma de Madrid",
        "Pós em TCC, Farmacologia Clínica, Transtornos Compulsivos e Dependência Química",
        "Atende em português, espanhol e italiano",
      ],
    },
    {
      id: "psiquiatra",
      nome: "Dr. Sérgio",
      funcao: "Psiquiatra",
      registro: "",
      // PROVISÓRIO: foto de um modelo de jaleco (não é o Sérgio). Trocar pelas fotos reais dele:
      // "foto" = foto retangular 4:5 (seção Equipe) e "recorte" = foto sem fundo (topo do site).
      foto: "/img/sergio.jpg",
      recorte: "/img/sergio-recorte.webp",
      fotoAlt: "Dr. Sérgio, psiquiatra",
      texto:
        "Psiquiatra que acompanha de perto o início do tratamento com medicação, em parceria com o psicólogo. Atende online.",
      pontos: [
        "Avalia se há indicação de medicação e explica para que serve cada uma",
        "Revisa o tratamento de quem já usa remédio e não sentiu melhora",
        "Conversa com o psicólogo sobre a evolução do paciente",
      ],
    },
  ],

  problema: {
    titulo: "Quando cada profissional cuida de uma parte, o paciente fica no meio",
    itens: [
      {
        icone: "Pill",
        titulo: "Remédio sem explicação",
        texto: "Você toma a medicação, mas ninguém explica para que ela serve e o que esperar.",
      },
      {
        icone: "Chats",
        titulo: "Profissionais que não conversam",
        texto: "O psicólogo faz uma parte, o psiquiatra outra, e ninguém troca informação sobre o seu caso.",
      },
      {
        icone: "Compass",
        titulo: "Sem saber por onde começar",
        texto: "Você não sabe se precisa de psicólogo, de psiquiatra ou dos dois.",
      },
    ],
  },

  passos: [
    {
      icone: "ChatCircleText",
      titulo: "Primeira consulta",
      texto: "Uma conversa para entender o que você sente, o que já tentou e o que espera do tratamento.",
    },
    {
      icone: "ClipboardText",
      titulo: "Avaliação",
      texto: "Quando faz sentido, avaliação psicológica ou neuropsicológica para esclarecer o diagnóstico.",
    },
    {
      icone: "Stethoscope",
      titulo: "Psiquiatra, se houver indicação",
      texto: "Se o caso pedir medicação, você é encaminhado ao psiquiatra da equipe, já com o histórico.",
    },
    {
      icone: "ArrowsLeftRight",
      titulo: "Acompanhamento conjunto",
      texto: "Os dois profissionais trocam informações e ajustam o tratamento conforme você evolui.",
    },
  ],

  tratamos: [
    "Ansiedade",
    "Depressão",
    "Ataque de pânico",
    "TDAH",
    "Fadiga física e mental",
    "Dependência química",
    "Transtornos compulsivos",
    "Terapia de casal",
    "Autoestima",
    "Relacionamentos conflituosos",
    "Orientação profissional",
    "Adolescentes a partir de 11 anos",
  ],

  atendimento: [
    {
      icone: "MapPin",
      titulo: "Presencial",
      texto: "Balneário Camboriú e Itajaí.",
    },
    {
      icone: "VideoCamera",
      titulo: "Online",
      texto: "Todo o Brasil e brasileiros no exterior.",
    },
    {
      icone: "Translate",
      titulo: "Idiomas",
      texto: "Português, espanhol e italiano.",
    },
    {
      icone: "Wallet",
      titulo: "Pagamento",
      texto: "Pix, transferência, dinheiro e cartão de crédito. Atendimento particular.",
    },
  ],

  faq: [
    {
      p: "Preciso começar pelo psicólogo ou pelo psiquiatra?",
      r: "Em geral, pelo psicólogo. Na primeira consulta ele avalia se o seu caso pede também o psiquiatra e faz o encaminhamento. Se você já tem um diagnóstico ou usa medicação, conte isso no primeiro contato.",
    },
    {
      p: "Os dois profissionais conversam sobre o meu caso?",
      r: "Sim. Essa é a proposta do atendimento: psicólogo e psiquiatra trocam informações para que a terapia e a medicação caminhem juntas.",
    },
    {
      p: "Já uso medicação e não sinto melhora. Posso procurar vocês?",
      r: "Pode. Reunimos o seu histórico, avaliamos o quadro e, se for o caso, o psiquiatra revisa o tratamento. Nunca interrompa um remédio por conta própria.",
    },
    {
      p: "Como é a primeira consulta?",
      r: "É uma entrevista para conhecer suas queixas, sua história e o que você busca. Ao final, combinamos a frequência e os horários.",
    },
    {
      p: "Qual é o valor da consulta?",
      r: "Os valores são informados pelo WhatsApp, junto com os horários disponíveis.",
    },
    {
      p: "O atendimento online funciona?",
      r: "Sim. As consultas por vídeo seguem o mesmo método do atendimento presencial e atendem pessoas de qualquer cidade do Brasil e do exterior.",
    },
    {
      p: "Vocês aceitam plano de saúde?",
      r: "Não. O atendimento é apenas particular.",
    },
  ],

  aviso:
    "Em caso de crise ou risco de vida, ligue 188 (CVV, 24 horas) ou 192 (SAMU). Este site tem caráter informativo e não substitui uma consulta.",
};
