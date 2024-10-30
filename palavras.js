// Lista de palavras que o usuário pode digitar (5 letras)
const palavrasPermitidas = [
  // Português
  "abaco",
  "abato",
  "afeto",
  "agito",
  "alaro",
  "alvo",
  "andar",
  "anima",
  "aroma",
  "atual",
  "aviso",
  "banco",
  "bicho",
  "bilho",
  "bloco",
  "borda",
  "botas",
  "braço",
  "briga",
  "cacho",
  "calor",
  "campo",
  "canal",
  "canto",
  "capas",
  "carro",
  "carta",
  "casal",
  "cesta",
  "cheio",
  "claro",
  "comer",
  "criar",
  "dicas",
  "dolar",
  "dosar",
  "dúzia",
  "eleva",
  "elevo",
  "emato",
  "falar",
  "fator",
  "fazer",
  "festa",
  "flame",
  "forca",
  "ganho",
  "garra",
  "gente",
  "grito",
  "grupo",
  "habas",
  "horas",
  "ideal",
  "idioma",
  "jogar",
  "jovem",
  "junho",
  "lares",
  "letra",
  "livro",
  "luvas",
  "maior",
  "marca",
  "media",
  "menos",
  "mesmo",
  "moeda",
  "morte",
  "muito",
  "neles",
  "notas",
  "nuvem",
  "oculo",
  "pacto",
  "papel",
  "pasta",
  "piano",
  "plano",
  "ponto",
  "prato",
  "quase",
  "raios",
  "real",
  "refor",
  "rocha",
  "salvo",
  "senso",
  "sinal",
  "sorte",
  "tampa",
  "tenda",
  "termo",
  "tempo",
  "tinta",
  "troco",
  "usar",
  "valor",
  "vasos",
  "vigor",
  "viver",
  "zebra",
  "zolar",
  "sagaz",
  "âmago",
  "negro",
  "termo",
  "êxito",
  "mexer",
  "nobre",
  "senso",
  "afeto",
  "ética",
  "algoz",
  "plena",
  "fazer",
  "tênue",
  "assim",
  "mútua",
  "sobre",
  "vigor",
  "aquém",
  "sutil",
  "seção",
  "porém",
  "poder",
  "fosse",
  "sanar",
  "ideia",
  "cerne",
  "audaz",
  "moral",
  "inato",
  "desde",
  "muito",
  "quiçá",
  "justo",
  "honra",
  "sonho",
  "torpe",
  "razão",
  "amigo",
  "ícone",
  "fútil",
  "etnia",
  "égide",
  "anexo",
  "tange",
  "dengo",
  "haver",
  "lapso",
  "expor",
  "então",
  "tempo",
  "boçal",
  "seara",
  "mútuo",
  "hábil",
  "casal",
  "saber",
  "ardil",
  "ávido",
  "pesar",
  "graça",
  "dizer",
  "óbice",
  "causa",
  "dever",
  "xibiu",
  "sendo",
  "estar",
  "brado",
  "tenaz",
  "coser",
  "pária",
  "genro",
  "ainda",
  "posse",
  "crivo",
  "temor",
  "comum",
  "prole",
  "ápice",
  "ânimo",
  "corja",
  "detém",
  "assaz",
  "pauta",
  "ceder",
  "ânsia",
  "fugaz",
  "censo",
  "culto",
  "digno",
  "mundo",
  "atroz",
  "forte",
  "gleba",
  "vício",
  "vulgo",
  "mesmo",
  "cozer",
  "criar",
  "saúde",
  "valha",
  "revés",
  "denso",
  "todos",
  "pudor",
  "jeito",
  "neném",
  "dogma",
  "louco",
  "regra",
  "atrás",
  "ordem",
  "clava",
  "mercê",
  "homem",
  "feliz",
  "pedir",
  "impor",
  "banal",
  "round",
  "limbo",
  "usura",
  "coisa",
  "juízo",
  "sábio",
  "forma",
  "apraz",
  "servo",
  "ajuda",
  "prosa",
  "falar",
  "tenro",
  "desse",
  "pífio",
  "legal",
  "certo",
  "presa",
  "posso",
  "cunho",
  "vendo",
  "viril",
  "ontem",
  "devir",
  "herói",
  "falso",
  "manso",
  "fácil",
  "valor",
  "meiga",
  "visar",
  "reaça",
  "mágoa",
  "sério",
  "acaso",
  "ébrio",
  "puder",
  "fluir",
  "guisa",
  "linda",
  "afago",
  "platô",
  "lugar",
  "ímpio",
  "temer",
  "garbo",
  "abrir",
  "praxe",
  "afins",
  "obter",
  "gerar",
  "óbvio",
  "burro",
  "matiz",
  "cisma",
  "união",
  "bruma",
  "pleno",
  "crise",
  "êxodo",
  "fluxo",
  "vênia",
  "havia",
  "tédio",
  "senil",
  "ritmo",
  "morte",
  "levar",
  "enfim",
  "álibi",
  "olhar",
  "tomar",
  "visão",
  "casta",
  "gênio",
  "prumo",
  "brega",
  "parvo",
  "vital",
  "bravo",
  "favor",
  "reles",
  "cabal",
  "ouvir",
  "falta",
  "pulha",
  "vivaz",
  "parco",
  "reter",
  "calma",
  "tecer",
  "outro",
  "sábia",
  "valia",
  "ameno",
  "tendo",
  "terra",
  "laico",
  "grato",
  "viver",
  "noção",
  "passo",
  "força",
  "possa",
  "carma",
  "único",
  "achar",
  "nicho",
  "ranço",
  "pobre",
  "noite",
  "rever",
  "façam",
  "rogar",
  "prime",
  "farsa",
  "fardo",
  "ativo",
  "fator",
  "óbito",
  "dúbio",
  "coeso",
  "selar",
  "nossa",
  "papel",
  "épico",
  "anelo",
  "citar",
  "sinto",
  "claro",
  "leigo",
  "sesta",
  "cisão",
  "líder",
  "cesta",
  "sonso",
  "ciúme",
  "deter",
  "velho",
  "adiar",
  "haste",
  "tende",
  "atuar",
  "gente",
  "humor",
  "revel",
  "sulco",
  "ideal",
  "vazio",
  "ficar",
  "vemos",
  "árduo",
  "fonte",
  "exato",
  "marco",
  "ponto",
  "igual",
  "labor",
  "feixe",
  "amplo",
  "terno",
  "lavra",
  "remir",
  "senão",
  "cauda",
  "hiato",
  "débil",
  "capaz",
  "tanto",
  "gesto",
  "ótica",
  "relva",
  "inata",
  "ambos",
  "varão",
  "jovem",
  "imune",
  "tenra",
  "ciclo",
  "vácuo",
  "toada",
  "sonsa",
  "coçar",
  "apoio",
  "raiva",
  "caçar",
  "velar",
  "vimos",
  "pouco",
  "chuva",
  "algum",
  "série",
  "xeque",
  "farão",
  "horda",
  "fusão",
  "leito",
  "feito",
  "advém",
  "entre",
  "coesa",
  "sente",
  "probo",
  "doido",
  "carro",
  "minha",
  "cruel",
  "frase",
  "trama",
  "anuir",
  "torço",
  "verso",
  "brisa",
  "ímpar",
  "rigor",
  "chata",
  "lazer",
  "botar",
  "massa",
  "blasé",
  "prece",
  "maior",
  "sorte",
  "pegar",
  "dorso",
  "signo",
  "seita",
  "fauna",
  "moção",
  "preso",
  "covil",
  "credo",
  "furor",
  "morar",
  "livro",
  "casto",
  "flora",
  "vetor",
  "adeus",
  "liame",
  "comer",
  "dócil",
  "plano",
  "peste",
  "senda",
  "faina",
  "ambas",
  "ocaso",
  "houve",
  "nunca",
  "pecha",
  "saiba",
  "praia",
  "árido",
  "aliás",
  "setor",
  "agora",
  "manha",
  "peixe",
  "ardor",
  "vírus",
  "meses",
  "mudar",
  "visse",
  "salvo",
  "parte",
  "rezar",
  "antro",
  "beata",
  "vulto",
  "aceso",
  "vasto",
  "pajem",
  "breve",
  "saída",
  "morro",
  "áurea",
  "risco",
  "junto",
  "campo",
  "ótimo",
  "banzo",
  "avaro",
  "reger",
  "sinal",
  "prado",
  "grupo",
  "anais",
  "áureo",
  "lenda",
  "andar",
  "segue",
  "antes",
  "birra",
  "estão",
  "serão",
  "opção",
  "acima",
  "motim",
  "chulo",
  "fugir",
  "leite",
  "conta",
  "rapaz",
  "nação",
  "brava",
  "oxalá",
  "vilão",
  "verbo",
  "átomo",
  "treta",
  "fruir",
  "parar",
  "festa",
  "texto",
  "ídolo",
  "tirar",
  "fitar",
  "índio",
  "jazia",
  "tenso",
  "reino",
  "puxar",
  "traga",
  "prazo",
  "gerir",
  "alude",
  "norma",
  "tosco",
  "exame",
  "átrio",
  "filho",
  "época",
  "prova",
  "turba",
  "bando",
  "malta",
  "corpo",
  "arcar",
  "preto",
  "cheio",
  "acesa",
  "aonde",
  "psico",
  "anciã",
  "sinhá",
  "voraz",
  "sarça",
  "manhã",
  "avião",
  "fatos",
  "fatal",
  "quase",
  "cópia",
  "ligar",
  "praga",
  "venal",
  "certa",
  "quota",
  "logro",
  "nosso",
  "magia",
  "dessa",
  "fixar",
  "bônus",
  "apego",
  "nível",
  "oásis",
  "afora",
  "longe",
  "coito",
  "pompa",
  "sumir",
  "mente",
  "messe",
  "soldo",
  "nódoa",
  "tocar",
  "alado",
  "caixa",
  "jirau",
  "perda",
  "lidar",
  "tinha",
  "parca",
  "livre",
  "sexta",
  "fraco",
  "verve",
  "lindo",
  "apelo",
  "vezes",
  "glosa",
  "solto",
  "firme",
  "grave",
  "porta",
  "bater",
  "opaco",
  "virão",
  "faixa",
  "turva",
  "sabia",
  "astro",
  "salve",
  "doído",
  "cânon",
  "abriu",
  "trupe",
  "irmão",
  "fenda",
  "exijo",
  "navio",
  "elite",
  "grata",
  "pardo",
  "supra",
  "atual",
  "besta",
  "parva",
  "autor",
  "deixa",
  "alçar",
  "viria",
  "pique",
  "junco",
  "curso",
  "bicho",
  "cioso",
  "ficha",
  "douto",
  "ético",
  "macio",
  "reses",
  "bioma",
  "pagão",
  "abuso",
  "calda",
  "cousa",
  "desta",
  "posto",
  "judeu",
  "rádio",
  "caber",
  "menos",
  "locus",
  "aluno",
  "chato",
  "verba",
  "vídeo",
  "culpa",
  "retém",
  "supor",
  "zelar",
  "super",
  "privê",
  "extra",
  "drops",
  "gosto",
  "molho",
  "calão",
  "torso",
  "suave",
  "lápis",
  "vosso",
  "baixo",
  "advir",
  "agudo",
  "light",
  "vinha",
  "combo",
  "ígneo",
  "asilo",
  "júlia",
  "ruína",
  "facho",
  "órfão",
  "pódio",
  "turma",
  "peito",
  "sítio",
  "traço",
  "turvo",
  "passa",
  "estio",
  "piada",
  "louça",
  "pisar",
  "pilar",
  "chama",
  "ações",
  "brabo",
  "ereto",
  "ávida",
  "amena",
  "mosto",
  "forem",
  "mesma",
  "finda",
  "refém",
  "meigo",
  "museu",
  "acolá",
  "local",
  "páreo",
  "metiê",
  "poeta",
  "facto",
  "rouca",
  "surja",
  "tento",
  "autos",
  "lasso",
  "cútis",
  "optar",
  "medir",
  "teste",
  "rumor",
  "poema",
  "coral",
  "paira",
  "drama",
  "geral",
  "folga",
  "busca",
  "cocho",
  "aviso",
  "clima",
  "hobby",
  "feudo",
  "urgia",
  "boato",
  "idoso",
  "clean",
  "calmo",
  "rubro",
  "cetro",
  "pacto",
  "feroz",
  "tacha",
  "tetra",
  "amiga",
  "ateia",
  "móvel",
  "monge",
  "crime",
  "açude",
  "lição",
  "golpe",
  "ponha",
  "daqui",
  "carta",
  "ébano",
  "ecoar",
  "casar",
  "plumo",
  "riste",
  "cacho",
  "monte",
  "volta",
  "verde",
  "artur",
  "vigia",
  "aroma",
  "corso",
  "falha",
  "saldo",
  "fazia",
  "manga",
  "bença",
  "briga",
  "itens",
  "conto",
  "pasmo",
  "vetar",
  "letal",
  "hoste",
  "pedra",
  "tribo",
  "grama",
  "escol",
  "rival",
  "fórum",
  "tarde",
  "troça",
  "penta",
  "chefe",
  "única",
  "mangá",
  "roupa",
  "súcia",
  "venha",
  "swing",
  "civil",
  "natal",
  "fruto",
  "sósia",
  "úteis",
  "plebe",
  "amada",
  "plaga",
  "vento",
  "cover",
  "lesse",
  "sarau",
  "ornar",
  "cargo",
  "nuvem",
  "átimo",
  "pinho",
  "finjo",
  "órgão",
  "macro",
  "virar",
  "axila",
  "areia",
  "arado",
  "stand",
  "vazão",
  "tchau",
  "jogar",
  "berro",
  "jejum",
  "magna",
  "seixo",
  "farta",
  "fosso",
  "beijo",
  "catre",
  "nesse",
  "tiver",
  "gíria",
  "troca",
  "légua",
  "pedro",
  "perto",
  "mídia",
  "varoa",
  "traje",
  "deste",
  "inter",
  "bruta",
  "tição",
  "bruto",
  "assar",
  "tutor",
  "viram",
  "perco",
  "todas",
  "renda",
  "guria",
  "trato",
  "gabar",
  "estro",
  "porte",
  "pomar",
  "amado",
  "close",
  "surto",
  "calor",
  "rural",
  "feita",
  "rocha",
  "arfar",
  "canso",
  "nesta",
  "âmbar",
  "tenha",
  "nessa",
  "vadio",
  "silvo",
  "santo",
  "bazar",
  "depor",
  "vedar",
  "fossa",
  "recém",
  "odiar",
  "grota",
  "verão",
  "pavor",
  "vista",
  "irado",
  "laudo",
  "cifra",
  "etapa",
  "mamãe",
  "aviar",
  "canto",
  "negar",
  "logos",
  "xucro",
  "densa",
  "ferpa",
  "clero",
  "bolsa",
  "visto",
  "cerca",
  "marca",
  "bucho",
  "cheia",
  "minar",
  "régio",
  "cinto",
  "cenho",
  "chula",
  "vagar",
  "segar",
  "molde",
  "salmo",
  "lesão",
  "ágape",
  "horto",
  "invés",
  "coroa",
  "ruído",
  "dança",
  "proto",
  "burra",
  "urdir",
  "largo",
  "letra",
  "paiol",
  "morfo",
  "sótão",
  "deram",
  "folha",
  "símio",
  "pasma",
  "velha",
  "sofia",
  "penso",
  "final",
  "pugna",
  "esgar",
  "vasta",
  "úbere",
  "lesto",
  "narco",
  "jazer",
  "troco",
  "trago",
  "fundo",
  "quais",
  "ceita",
  "podar",
  "ufano",
  "ardis",
  "mocho",
  "linha",
  "frota",
  "úmido",
  "troço",
  "apear",
  "queda",
  "piche",
  "pólis",
  "bulir",
  "álamo",
  "ileso",
  "preço",
  "neste",
  "áudio",
  "resto",
  "peita",
  "manto",
  "cível",
  "folia",
  "matar",
  "redor",
  "olhos",
  "monta",
  "outra",
  "cosmo",
  "seiva",
  "barro",
  "mover",
  "misto",
  "chaga",
  "disso",
  "bolso",
  "lábia",
  "chave",
  "logia",
  "banto",
  "retro",
  "falsa",
  "limpo",
  "justa",
  "barão",
  "álbum",
  "campa",
  "macho",
  "nácar",
  "farol",
  "lutar",
  "veloz",
  "viger",
  "louro",
  "bedel",
  "porca",
  "gemer",
  "calvo",
  "punha",
  "louca",
  "mimar",
  "vazia",
  "axial",
  "sabor",
  "arroz",
  "venho",
  "lucro",
  "findo",
  "toque",
  "enjoo",
  "calça",
  "longo",
  "salva",
  "rente",
  "nariz",
  "dados",
  "zumbi",
  "coevo",
  "baixa",
  "samba",
  "lousa",
  "subir",
  "firma",
  "fazes",
  "urgir",
  "solta",
  "farto",
  "torna",
  "demão",
  "diabo",
  "forro",
  "ousar",
  "valer",
  "pagar",
  "fugiu",
  "pluma",
  "sigla",
  "sexto",
  "bruxa",
  "sabiá",
  "canil",
  "xampu",
  "reler",
  "gueto",
  "repor",
  "fátuo",
  "choça",
  "míope",
  "bugre",
  "corar",
  "vário",
  "lento",
  "cardo",
  "hífen",
  "custo",
  "corte",
  "mania",
  "pular",
  "tumba",
  "versa",
  "rácio",
  "nesga",
  "voilà",
  "penca",
  "modal",
  "ferir",
  "sadio",
  "sócio",
  "sugar",
  "harém",
  "focar",
  "digna",
  "ceifa",
  "pátio",
  "usual",
  // Inglês
  "apple",
  "alert",
  "array",
  "badge",
  "blast",
  "brain",
  "break",
  "bring",
  "broad",
  "candy",
  "chart",
  "chase",
  "check",
  "class",
  "clear",
  "cloud",
  "crate",
  "crush",
  "dance",
  "dream",
  "drive",
  "email",
  "event",
  "fetch",
  "frame",
  "globe",
  "grain",
  "green",
  "heart",
  "house",
  "laser",
  "lemon",
  "light",
  "music",
  "ocean",
  "paint",
  "point",
  "power",
  "pride",
  "quote",
  "raise",
  "robot",
  "scale",
  "score",
  "share",
  "shine",
  "slice",
  "smile",
  "space",
  "stack",
  "stone",
  "table",
  "taste",
  "think",
  "train",
  "truth",
  "tweet",
  "value",
  "video",
  "watch",
  "world",
  "yacht",
  "zebra",
  "zesty",

  "alert",
  "cache",
  "chart",
  "drive",
  "flash",
  "focus",
  "input",
  "laser",
  "model",
  "reset",
  "smart",
  "state",
  "track",
  "value",
  "virus",
  // Novas palavras em português
  "dados",
  "teste",
  "bytes",
  "código",
  "login",
  "cloud",
  "senha",
  "rede",
  "tecla",
  "ponto",
  "sinal",
  "driver",
  "debug",
  "atual",
  // Novas palavras em inglês
  "array",
  "block",
  "email",
  "query",
  "patch",
  "print",
  "link",
  "trace",
  "cable",
  "alert",
  "label",
  "robot",
  "scope",
  "image",
  "order",
  "table",
  "About",
  "Above",
  "Abuse",
  "Actor",
  "Acute",
  "Admit",
  "Adopt",
  "Adult",
  "After",
  "Again",
  "Agent",
  "Agree",
  "Ahead",
  "Alarm",
  "Album",
  "Boost",
  "Booth",
  "Bound",
  "Brain",
  "Brand",
  "Bread",
  "Break",
  "Breed",
  "Brief",
  "Bring",
  "Broad",
  "Broke",
  "Brown",
  "Build",
  "Built",
  "Debut",
  "Delay",
  "Depth",
  "Doing",
  "Doubt",
  "Dozen",
  "Draft",
  "Drama",
  "Drawn",
  "Dream",
  "Dress",
  "Drill",
  "Drink",
  "Drive",
  "Drove",
  "Dying",
  "Eager",
  "Early",
  "Earth",
  "Eight",
  "Elite",
  "Empty",
  "Enemy",
  "Enjoy",
  "Enter",
  "Judge",
  "Known",
  "Label",
  "Large",
  "Laser",
  "Later",
  "Laugh",
  "Layer",
  "Learn",
  "Lease",
  "Least",
  "Leave",
  "Legal",
  "Level",
  "Light",
  "Limit",
  "Peace",
  "Panel",
  "Phase",
  "Phone",
  "Photo",
  "Piece",
  "Pilot",
  "Pitch",
  "Place",
  "Plain",
  "Plane",
  "Plant",
  "Plate",
  "Point",
  "Pound",
  "Sheet",
  "Shelf",
  "Shell",
  "Shift",
  "Shirt",
  "Shock",
  "Shoot",
  "Short",
  "Shown",
  "Sight",
  "Since",
  "Sixty",
  "Sized",
  "Skill",
  "Sleep",
  "Slide",
  "Small",
  "Smart",
  "Smile",
  "Smith",
  "Smoke",
  "Solid",
  "Solve",
  "Sorry",
  "Sound",
  "South",
  "Space",
  "Upset",
  "Urban",
  "Usage",
  "Usual",
  "Valid",
  "Value",
  "Video",
  "Virus",
  "Visit",
  "Alert",
  "Alike",
  "Alive",
  "Allow",
  "Alone",
  "Along",
  "Alter",
  "Among",
  "Anger",
  "Angle",
  "Angry",
  "Apart",
  "Apple",
  "Apply",
  "Arena",
  "Buyer",
  "Cable",
  "Calif",
  "Carry",
  "Catch",
  "Cause",
  "Chain",
  "Chair",
  "Chart",
  "Chase",
  "Cheap",
  "Check",
  "Chest",
  "Chief",
  "Child",
  "Entry",
  "Equal",
  "Error",
  "Event",
  "Every",
  "Exact",
  "Exist",
  "Extra",
  "Faith",
  "FALSE",
  "Fault",
  "Fibre",
  "Field",
  "Fifth",
  "Fifty",
  "Fight",
  "Final",
  "First",
  "Fixed",
  "Flash",
  "Fleet",
  "Floor",
  "Fluid",
  "Focus",
  "Force",
  "Metal",
  "Local",
  "Logic",
  "Loose",
  "Lower",
  "Lucky",
  "Lunch",
  "Lying",
  "Magic",
  "Major",
  "Maker",
  "March",
  "Music",
  "Match",
  "Mayor",
  "Meant",
  "Power",
  "Press",
  "Price",
  "Pride",
  "Prime",
  "Print",
  "Prior",
  "Prize",
  "Proof",
  "Proud",
  "Prove",
  "Queen",
  "Sixth",
  "Quiet",
  "Quite",
  "Spare",
  "Speak",
  "Speed",
  "Spend",
  "Spent",
  "Split",
  "Spoke",
  "Sport",
  "Staff",
  "Stage",
  "Stake",
  "Start",
  "State",
  "Steam",
  "Steel",
  "Stick",
  "Still",
  "Stock",
  "Stone",
  "Stood",
  "Store",
  "Storm",
  "Story",
  "Strip",
  "Stuck",
  "Study",
  "Stuff",
  "Whole",
  "Whose",
  "Woman",
  "Train",
  "World",
  "Worry",
  "Worse",
  "Worst",
  "Would",
  "Argue",
  "Arise",
  "Array",
  "Aside",
  "Asset",
  "Audio",
  "Audit",
  "Avoid",
  "Award",
  "Aware",
  "Badly",
  "Baker",
  "Bases",
  "Basic",
  "Basis",
  "China",
  "Chose",
  "Civil",
  "Claim",
  "Class",
  "Clean",
  "Clear",
  "Click",
  "Clock",
  "Close",
  "Coach",
  "Coast",
  "Could",
  "Count",
  "Court",
  "Forth",
  "Forty",
  "Forum",
  "Found",
  "Frame",
  "Frank",
  "Fraud",
  "Fresh",
  "Front",
  "Fruit",
  "Fully",
  "Funny",
  "Giant",
  "Given",
  "Glass",
  "Globe",
  "Going",
  "Grace",
  "Grade",
  "Grand",
  "Grant",
  "Grass",
  "Great",
  "Green",
  "Gross",
  "Media",
  "Might",
  "Minor",
  "Minus",
  "Mixed",
  "Model",
  "Money",
  "Month",
  "Moral",
  "Motor",
  "Mount",
  "Mouse",
  "Mouth",
  "Movie",
  "Needs",
  "Never",
  "Radio",
  "Raise",
  "Range",
  "Rapid",
  "Ratio",
  "Reach",
  "Ready",
  "Refer",
  "Right",
  "Rival",
  "River",
  "Quick",
  "Stand",
  "Roman",
  "Rough",
  "Style",
  "Sugar",
  "Suite",
  "Super",
  "Sweet",
  "Table",
  "Taken",
  "Taste",
  "Taxes",
  "Teach",
  "Teeth",
  "Texas",
  "Thank",
  "Theft",
  "Their",
  "Theme",
  "There",
  "These",
  "Thick",
  "Thing",
  "Think",
  "Third",
  "Those",
  "Three",
  "Threw",
  "Throw",
  "Tight",
  "Waste",
  "Watch",
  "Water",
  "Wheel",
  "Where",
  "Which",
  "While",
  "White",
  "Vital",
  "Beach",
  "Began",
  "Begin",
  "Begun",
  "Being",
  "Below",
  "Bench",
  "Billy",
  "Birth",
  "Black",
  "Blame",
  "Blind",
  "Block",
  "Blood",
  "Board",
  "Cover",
  "Craft",
  "Crash",
  "Cream",
  "Crime",
  "Cross",
  "Crowd",
  "Crown",
  "Curve",
  "Cycle",
  "Daily",
  "Dance",
  "Dated",
  "Dealt",
  "Death",
  "Group",
  "Grown",
  "Guard",
  "Guess",
  "Guest",
  "Guide",
  "Happy",
  "Harry",
  "Heart",
  "Heavy",
  "Hence",
  "Night",
  "Horse",
  "Hotel",
  "House",
  "Human",
  "Ideal",
  "Image",
  "Index",
  "Inner",
  "Input",
  "Issue",
  "Irony",
  "Juice",
  "Joint",
  "Newly",
  "Noise",
  "North",
  "Noted",
  "Novel",
  "Nurse",
  "Occur",
  "Ocean",
  "Offer",
  "Often",
  "Order",
  "Other",
  "Ought",
  "Paint",
  "Paper",
  "Party",
  "Round",
  "Route",
  "Royal",
  "Rural",
  "Scale",
  "Scene",
  "Scope",
  "Score",
  "Sense",
  "Serve",
  "Seven",
  "Shall",
  "Shape",
  "Share",
  "Sharp",
  "Times",
  "Tired",
  "Title",
  "Today",
  "Topic",
  "Total",
  "Touch",
  "Tough",
  "Tower",
  "Track",
  "Trade",
  "Treat",
  "Trend",
  "Trial",
  "Tried",
  "Tries",
  "Truck",
  "Truly",
  "Trust",
  "Truth",
  "Twice",
  "Under",
  "Undue",
  "Union",
  "Unity",
  "Until",
  "Upper",
  "Wound",
  "Write",
  "Wrong",
  "Wrote",
  "Yield",
  "Young",
  "Youth",
  "Worth",
  "Voice",
  "mouse",
  "senai",
  "enter",
  "lenon",
  "linux",

];

// Lista de palavras selecionadas para o jogo (5 letras) - apenas palavras relacionadas a TI
const palavrasSelecionadas = [
  "alert",
  "cache",
  "chart",
  "drive",
  "flash",
  "focus",
  "input",
  "laser",
  "model",
  "reset",
  "smart",
  "state",
  "track",
  "value",
  "virus",
  // Novas palavras em português
  "dados",
  "teste",
  "bytes",
  "código",
  "login",
  "cloud",
  "senha",
  "rede",
  "tecla",
  "ponto",
  "sinal",
  "driver",
  "debug",
  "atual",
  // Novas palavras em inglês
  "array",
  "block",
  "email",
  "query",
  "patch",
  "print",
  "link",
  "trace",
  "cable",
  "alert",
  "label",
  "robot",
  "scope",
  "image",
  "order",
  "table",
  "mouse",
  "senai",
  "enter",
  "lenon",
  "linux",
];
// Função para sortear uma palavra da lista de palavras selecionadas
function sortearPalavra() {
  const randomIndex = Math.floor(Math.random() * palavrasSelecionadas.length);
  return palavrasSelecionadas[randomIndex].toUpperCase();
}

// Função para verificar se a palavra do dia deve ser atualizada
function getPalavraDoDia() {
  const agora = new Date();
  const horarioAtual = agora.getHours() * 60 + agora.getMinutes(); // Minutos desde a meia-noite
  const horarioAtualizacao = [480, 810, 1080]; // Horários de atualização em minutos: 08:00, 13:30, 18:00

  // Obtém a data da última atualização
  const ultimaAtualizacao = localStorage.getItem("ultimaAtualizacao");

  // Se não existe uma palavra armazenada ou a data é diferente da atual
  if (!ultimaAtualizacao) {
    // Primeira execução, sorteia uma palavra e armazena
    const palavraDoDia = sortearPalavra();
    localStorage.setItem("palavraDoDia", palavraDoDia);
    localStorage.setItem("ultimaAtualizacao", agora.toISOString());
    return palavraDoDia;
  } else {
    const ultimaData = new Date(ultimaAtualizacao);
    // Se a data é diferente da atual
    if (
      agora.getDate() !== ultimaData.getDate() ||
      agora.getMonth() !== ultimaData.getMonth() ||
      agora.getFullYear() !== ultimaData.getFullYear()
    ) {
      // Limpa o localStorage para permitir novas tentativas
      localStorage.clear();
      const palavraDoDia = sortearPalavra();
      localStorage.setItem("palavraDoDia", palavraDoDia);
      localStorage.setItem("ultimaAtualizacao", agora.toISOString());
      return palavraDoDia;
    }
  }

  // Verifica se a palavra deve ser atualizada baseado no horário
  const palavraDoDia = localStorage.getItem("palavraDoDia");
  if (
    horarioAtualizacao.includes(horarioAtual) &&
    agora.getTime() - ultimaData.getTime() >= 0
  ) {
    // Se estamos no horário de atualização, mas a palavra já está fixa
    return palavraDoDia;
  }

  // Retorna a palavra do dia armazenada
  return palavraDoDia;
}

// Palavra do dia, sorteada
const palavraDoDia = getPalavraDoDia();

// Inicializa a variável tentativaAtual
let tentativaAtual = 1;

// Exporta a palavra do dia, as listas de palavras e a tentativa atual
export {
  palavraDoDia,
  palavrasPermitidas,
  palavrasSelecionadas,
  tentativaAtual,
};
