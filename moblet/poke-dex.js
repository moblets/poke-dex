/* eslint no-undef: [0]*/
module.exports = {
  title: "pokeDex",
  style: "poke-dex.scss",
  template: 'poke-dex.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json"
  },
  link: function() {

  },
  controller: function(
    $scope
  ) {

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    $scope.pokeIcon = function(key, name) {
      return "pokeicons/" + pad(key, 3, 0) + " " + name + ".ico";
    };

    $scope.pokebadge = function(type) {
      var badge = "badge-dark";
      switch (type) {
        case "grama" :
          badge = "badge-balanced";
          break;
        case "fogo" :
          badge = "badge-assertive";
          break;
        case "agua" :
          badge = "badge-positive";
          break;
        case "gelo" :
          badge = "badge-positive";
          break;
        case "terra" :
          badge = "badge-dark";
          break;
        case "pedra" :
          badge = "badge-dark";
          break;
        case "dragão" :
          badge = "badge-dark";
          break;
        case "luta" :
          badge = "badge-dark";
          break;
        case "normal" :
          badge = "badge-stable";
          break;
        case "veneno" :
          badge = "badge-royal";
          break;
        case "fantasma" :
          badge = "badge-royal";
          break;
        case "psiquico" :
          badge = "badge-royal";
          break;
        case "inseto" :
          badge = "badge-royal";
          break;
        case "eletrico" :
          badge = "badge-energized";
          break;
        default:
          badge = "badge-dark";
      }
      return badge;
    };

    $scope.pokedex = {
      1: {
        name: "Bulbasaur",
        type: "grama"
      },
      2: {
        name: "Ivysaur",
        type: "grama"
      },
      3: {
        name: "Venusaur",
        type: "grama"
      },
      4: {
        name: "Charmander",
        type: "fogo"
      },
      5: {
        name: "Charmeleon",
        type: "fogo"
      },
      6: {
        name: "Charizard",
        type: "fogo"
      },
      7: {
        name: "Squirtle",
        type: "agua"
      },
      8: {
        name: "Wartortle",
        type: "agua"
      },
      9: {
        name: "Blastoise",
        type: "agua"
      },
      10: {
        name: "Caterpie",
        type: "inseto"
      },
      12: {
        name: "Butterfree",
        type: "inseto"
      },
      13: {
        name: "Weedle",
        type: "inseto"
      },
      16: {
        name: "Pidgey",
        type: "normal"
      },
      17: {
        name: "Pidgeotto",
        type: "normal"
      },
      18: {
        name: "Pidgeot",
        type: "normal"
      },
      19: {
        name: "Rattata",
        type: "normal"
      },
      20: {
        name: "Raticate",
        type: "normal"
      },
      21: {
        name: "Spearow",
        type: "normal"
      },
      22: {
        name: "Fearow",
        type: "normal"
      },
      23: {
        name: "Ekans",
        type: "veneno"
      },
      24: {
        name: "Arbok",
        type: "veneno"
      },
      26: {
        name: "Raichu",
        type: "eletrico"
      },
      27: {
        name: "Sandshrew",
        type: "terra"
      },
      28: {
        name: "Sandslash",
        type: "terra"
      },
      29: {
        name: "Nidoran",
        type: "veneno"
      },
      31: {
        name: "Nidoqueen",
        type: "veneno"
      },
      32: {
        name: "Nidoran",
        type: "veneno"
      },
      34: {
        name: "Nidoking",
        type: "veneno"
      },
      38: {
        name: "Ninetales",
        type: "fogo"
      },
      41: {
        name: "Zubat",
        type: "veneno"
      },
      42: {
        name: "Golbat",
        type: "veneno"
      },
      46: {
        name: "Paras",
        type: "inseto"
      },
      47: {
        name: "Parasect",
        type: "inseto"
      },
      48: {
        name: "Venonat",
        type: "inseto"
      },
      49: {
        name: "Venomoth",
        type: "inseto"
      },
      50: {
        name: "Diglett",
        type: "terra"
      },
      51: {
        name: "Dugtrio",
        type: "terra"
      },
      52: {
        name: "Meowth",
        type: "normal"
      },
      53: {
        name: "Persian",
        type: "normal"
      },
      54: {
        name: "Psyduck",
        type: "agua"
      },
      55: {
        name: "Golduck",
        type: "agua"
      },
      56: {
        name: "Mankey",
        type: "luta"
      },
      57: {
        name: "Primeape",
        type: "luta"
      },
      59: {
        name: "Arcanine",
        type: "fogo"
      },
      60: {
        name: "Poliwag",
        type: "agua"
      },
      62: {
        name: "Poliwrath",
        type: "agua"
      },
      65: {
        name: "Alakazam",
        type: "psiquico"
      },
      66: {
        name: "Machop",
        type: "luta"
      },
      68: {
        name: "Machamp",
        type: "luta"
      },
      69: {
        name: "Bellsprout",
        type: "grama"
      },
      71: {
        name: "Victreebel",
        type: "grama"
      },
      72: {
        name: "Tentacool",
        type: "agua"
      },
      73: {
        name: "Tentacruel",
        type: "agua"
      },
      74: {
        name: "Geodude",
        type: "pedra"
      },
      76: {
        name: "Golem",
        type: "pedra"
      },
      77: {
        name: "Ponyta",
        type: "fogo"
      },
      78: {
        name: "Rapidash",
        type: "fogo"
      },
      79: {
        name: "Slowpoke",
        type: "agua"
      },
      80: {
        name: "Slowbro",
        type: "agua"
      },
      81: {
        name: "Magnemite",
        type: "eletrico"
      },
      82: {
        name: "Magneton",
        type: "eletrico"
      },
      83: {
        name: "Farfetch'd",
        type: "normal"
      },
      84: {
        name: "Doduo",
        type: "normal"
      },
      85: {
        name: "Dodrio",
        type: "normal"
      },
      86: {
        name: "Seel",
        type: "agua"
      },
      87: {
        name: "Dewgong",
        type: "agua"
      },
      88: {
        name: "Grimer",
        type: "veneno"
      },
      89: {
        name: "Muk",
        type: "veneno"
      },
      91: {
        name: "Cloyster",
        type: "agua"
      },
      92: {
        name: "Gastly",
        type: "fantasma"
      },
      94: {
        name: "Gengar",
        type: "fantasma"
      },
      95: {
        name: "Onix",
        type: "pedra"
      },
      96: {
        name: "Drowzee",
        type: "psiquico"
      },
      97: {
        name: "Hypno",
        type: "psiquico"
      },
      98: {
        name: "Krabby",
        type: "agua"
      },
      99: {
        name: "Kingler",
        type: "agua"
      },
      100: {
        name: "Voltorb",
        type: "eletrico"
      },
      101: {
        name: "Electrode",
        type: "eletrico"
      },
      103: {
        name: "Exeggutor",
        type: "grama"
      },
      104: {
        name: "Cubone",
        type: "terra"
      },
      105: {
        name: "Marowak",
        type: "terra"
      },
      106: {
        name: "Hitmonlee",
        type: "luta"
      },
      107: {
        name: "Hitmonchan",
        type: "luta"
      },
      108: {
        name: "Lickitung",
        type: "normal"
      },
      109: {
        name: "Koffing",
        type: "veneno"
      },
      110: {
        name: "Weezing",
        type: "veneno"
      },
      111: {
        name: "Rhyhorn",
        type: "terra"
      },
      112: {
        name: "Rhydon",
        type: "terra"
      },
      113: {
        name: "Chansey",
        type: "normal"
      },
      114: {
        name: "Tangela",
        type: "grama"
      },
      115: {
        name: "Kangaskhan",
        type: "normal"
      },
      116: {
        name: "Horsea",
        type: "agua"
      },
      117: {
        name: "Seadra",
        type: "agua"
      },
      118: {
        name: "Goldeen",
        type: "agua"
      },
      119: {
        name: "Seaking",
        type: "agua"
      },
      121: {
        name: "Starmie",
        type: "agua"
      },
      122: {
        name: "Mr. mime",
        type: "psiquico"
      },
      123: {
        name: "Scyther",
        type: "inseto"
      },
      124: {
        name: "Jynx",
        type: "gelo"
      },
      125: {
        name: "Electabuzz",
        type: "eletrico"
      },
      126: {
        name: "Magmar",
        type: "fogo"
      },
      127: {
        name: "Pinsir",
        type: "inseto"
      },
      128: {
        name: "Tauros",
        type: "normal"
      },
      129: {
        name: "Magikarp",
        type: "agua"
      },
      130: {
        name: "Gyarados",
        type: "agua"
      },
      131: {
        name: "Lapras",
        type: "agua"
      },
      133: {
        name: "Eevee",
        type: "normal"
      },
      135: {
        name: "Jolteon",
        type: "eletrico"
      },
      136: {
        name: "Flareon",
        type: "fogo"
      },
      137: {
        name: "Porygon",
        type: "normal"
      },
      138: {
        name: "Omanyte",
        type: "pedra"
      },
      139: {
        name: "Omastar",
        type: "pedra"
      },
      140: {
        name: "Kabuto",
        type: "pedra"
      },
      141: {
        name: "Kabutops",
        type: "pedra"
      },
      142: {
        name: "Aerodactyl",
        type: "pedra"
      },
      143: {
        name: "Snorlax",
        type: "normal"
      },
      144: {
        name: "Articuno",
        type: "gelo"
      },
      145: {
        name: "Zapdos",
        type: "eletrico"
      },
      146: {
        name: "Moltres",
        type: "fogo"
      },
      147: {
        name: "Dratini",
        type: "dragão"
      },
      148: {
        name: "Dragonair",
        type: "dragão"
      },
      149: {
        name: "Dragonite",
        type: "dragão"
      }
    };
  }
};
