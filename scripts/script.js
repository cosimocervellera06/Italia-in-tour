document.addEventListener("DOMContentLoaded", function() {
  const caroselloContainer = document.querySelector(".carosello");
  const posizioneContainer = document.querySelector(".posizione");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const information = document.querySelector(".information");
  const cityButtons = document.querySelectorAll(".city");
  const toggleButton = document.getElementById('toggleButton');
  
  let index = 0;

  const immagini = [
    { src: "immagini/luoghi/ancona.jpg", nome: "Ancona", link:"https://www.comuneancona.it/" },
    { src: "immagini/luoghi/aosta.jpg", nome: "Aosta", link:"https://www.comune.aosta.it/it" },
    { src: "immagini/luoghi/aquila.jpg", nome: "L'Aquila", link:"https://www.comune.laquila.it/" },
    { src: "immagini/luoghi/bari.jpg", nome: "Bari", link:"https://www.comune.bari.it/" },
    { src: "immagini/luoghi/bologna.jpg", nome: "Bologna", link:"https://www.comune.bologna.it/" },
    { src: "immagini/luoghi/cagliari.jpg", nome: "Cagliari", link:"https://www.comune.cagliari.it/" },
    { src: "immagini/luoghi/campobasso.jpg", nome: "Campobasso", link:"https://www.comune.campobasso.it/" },
    { src: "immagini/luoghi/catanzaro.jpg", nome: "Catanzaro", link:"https://www.comune.catanzaro.it/" },
    { src: "immagini/luoghi/firenze.jpg", nome: "Firenze", link:"https://www.comune.firenze.it/" },
    { src: "immagini/luoghi/genova.jpg", nome: "Genova", link:"https://www.comune.genova.it/" },
    { src: "immagini/luoghi/milano.jpg", nome: "Milano", link:"https://www.comune.milano.it/" },
    { src: "immagini/luoghi/napoli.jpg", nome: "Napoli", link:"https://www.comune.napoli.it/" },
    { src: "immagini/luoghi/palermo.jpg", nome: "Palermo", link:"https://www.comune.palermo.it/" },
    { src: "immagini/luoghi/perugia.jpg", nome: "Perugia", link:"https://www.comune.perugia.it/" },
    { src: "immagini/luoghi/potenza.jpg", nome: "Potenza", link:"https://www.comune.potenza.it/" },
    { src: "immagini/luoghi/roma.jpg", nome: "Roma", link:"https://www.comune.roma.it/" },
    { src: "immagini/luoghi/torino.jpg", nome: "Torino", link:"https://www.comune.torino.it/" },
    { src: "immagini/luoghi/trento.jpg", nome: "Trento", link:"https://www.comune.trento.it/" },
    { src: "immagini/luoghi/trieste.jpg", nome: "Trieste", link:"https://www.comune.trieste.it/" },
    { src: "immagini/luoghi/venezia.jpg", nome: "Venezia", link:"https://www.comune.venezia.it/" }
  ];
  
  const posizioni = [
    { src: "immagini/posizioni/ancona.png", nome: "Ancona" },
    { src: "immagini/posizioni/aosta.png", nome: "Aosta" },
    { src: "immagini/posizioni/aquila.png", nome: "L'Aquila" },
    { src: "immagini/posizioni/bari.png", nome: "Bari" },
    { src: "immagini/posizioni/bologna.png", nome: "Bologna" },
    { src: "immagini/posizioni/cagliari.png", nome: "Cagliari" },
    { src: "immagini/posizioni/campobasso.png", nome: "Campobasso" },
    { src: "immagini/posizioni/catanzaro.png", nome: "Catanzaro" },
    { src: "immagini/posizioni/firenze.png", nome: "Firenze" },
    { src: "immagini/posizioni/genova.png", nome: "Genova" },
    { src: "immagini/posizioni/milano.png", nome: "Milano" },
    { src: "immagini/posizioni/napoli.png", nome: "Napoli" },
    { src: "immagini/posizioni/palermo.png", nome: "Palermo" },
    { src: "immagini/posizioni/perugia.png", nome: "Perugia" },
    { src: "immagini/posizioni/potenza.png", nome: "Potenza" },
    { src: "immagini/posizioni/roma.png", nome: "Roma" },
    { src: "immagini/posizioni/torino.png", nome: "Torino" },
    { src: "immagini/posizioni/trento.png", nome: "Trento" },
    { src: "immagini/posizioni/trieste.png", nome: "Trieste" },
    { src: "immagini/posizioni/venezia.png", nome: "Venezia" }
  ];
  
  const informazioni = [
      "Ancona è una città portuale situata lungo la costa adriatica dell'Italia centrale. Fondata dai Greci nell'VIII secolo a.C., ha una lunga storia di scambi commerciali con l'Oriente. Il suo porto naturale, protetto dalle intemperie, è stato un importante centro di navigazione fin dall'antichità. Oggi, oltre alla sua attività portuale, Ancona offre una vivace scena culturale con numerosi musei, teatri e festival annuali.",
      "Aosta è la capitale della regione autonoma della Valle d'Aosta, nel nord-ovest dell'Italia. Fondata dai Romani nel I secolo a.C., conserva ancora oggi numerosi resti dell'antica Roma, tra cui l'Arco di Augusto e il Teatro Romano. La città è circondata dalle maestose vette delle Alpi e offre numerose opportunità per escursioni, sport invernali e turismo naturalistico.",
      "L'Aquila è la capitale della regione Abruzzo, nel centro-sud Italia. Fondata dai Romani nel XIII secolo, è nota per il suo suggestivo centro storico medievale, caratterizzato da stradine tortuose e piazze pittoresche. Tuttavia, la città ha sofferto gravi danni a seguito del terremoto del 2009, e molte delle sue strutture storiche sono ancora in fase di ricostruzione. Nonostante le sfide, L'Aquila rimane un importante centro culturale e turistico, con una ricca tradizione enogastronomica e numerosi eventi culturali.",
      "Bari è una città portuale situata sulla costa adriatica del sud Italia. Fondata dai Romani nel III secolo a.C., ha una lunga storia di scambi commerciali con il Mediterraneo orientale. Il suo centro storico, conosciuto come Bari Vecchia, è un labirinto di stradine medievali, chiese e piazze storiche. La città è famosa per la sua cucina, che include piatti a base di pesce fresco, olio d'oliva e prodotti agricoli locali.",
      "Bologna è la capitale dell'Emilia-Romagna, nel nord Italia. Fondata dai Romani nel I secolo a.C., è una delle città più antiche d'Europa. La sua università, fondata nel 1088, è una delle più antiche del mondo. Bologna è conosciuta per la sua torre inclinata, Asinelli, e per la sua ricca tradizione culinaria, che include piatti come la pasta fresca, i tortellini e la mortadella.",
      "Cagliari è la capitale della Sardegna, un'isola al largo della costa occidentale dell'Italia. Fondata dai Fenici nel VIII secolo a.C., ha una lunga storia di dominazioni straniere, tra cui i Romani, i Bizantini, gli Arabi e gli Spagnoli. La città è nota per i suoi siti archeologici, le sue spiagge di sabbia bianca e la sua cucina, che include piatti a base di pesce, carne e verdure locali.",
      "Campobasso è la capitale della regione Molise, nel centro-sud Italia. Situata su una collina con vista sulla valle del fiume Biferno, ha una posizione panoramica e un'atmosfera tranquilla. La città è famosa per i suoi castelli medievali, le sue chiese storiche e la sua cucina tradizionale, che include piatti come la zuppa di ceci e la salsiccia di maiale.",
      "Catanzaro è la capitale della Calabria, nel sud Italia. Situata su una collina con vista sul Mar Ionio, offre panorami mozzafiato e una ricca storia. Fondata dai Bizantini nel X secolo, è stata una volta la capitale della Magna Grecia. La città è famosa per la sua cattedrale normanna, i suoi musei e le sue tradizioni culturali uniche. La cucina catanzarese è rinomata per i suoi piatti tradizionali calabresi, che includono specialità come la 'nduja, la salsiccia piccante e i formaggi locali.",
      "Firenze è la capitale della Toscana, nel centro-nord Italia. Fondata dai Romani nel I secolo a.C., è stata il centro del Rinascimento italiano. La sua cattedrale, il Duomo di Santa Maria del Fiore, è uno dei simboli più iconici della città. Firenze è famosa per i suoi capolavori artistici, la sua cucina toscana e i suoi splendidi giardini, come il Giardino di Boboli.",
      "Genova è la capitale della Liguria, nel nord-ovest Italia. Fondata dai Romani nel III secolo a.C., è stata uno dei principali porti del Mediterraneo nel Medioevo. La città è famosa per il suo centro storico, conosciuto come il Porto Antico, e per la sua storia marittima. Genova è rinomata per la sua cucina, che include piatti a base di pesce fresco, focaccia e pesto alla genovese, oltre a dolci come la pandolce genovese e i biscotti canestrelli.",
      "Milano è la capitale della Lombardia, nel nord Italia. Fondata dai Galli Cenomani nel III secolo a.C., è diventata un importante centro commerciale durante il periodo romano. Oggi, è conosciuta come la capitale della moda e del design italiano, nonché un centro finanziario e culturale. Milano è famosa per il suo Duomo, la Galleria Vittorio Emanuele II e per la sua vivace vita notturna. La città è anche rinomata per la sua cucina innovativa, che combina tradizione e modernità, e per i suoi numerosi ristoranti stellati Michelin.",
      "Napoli è la capitale della Campania, nel sud Italia. Fondata dai Greci nel V secolo a.C., è una delle città più antiche d'Europa. La sua storia è ricca di influenze culturali, tra cui greche, romane, bizantine e arabe. Napoli è famosa per la sua cucina, che include la pizza, la pasta e il caffè espresso, e per i suoi siti archeologici, come le rovine di Pompei e Ercolano.",
      "Palermo è la capitale della Sicilia, un'isola al largo della costa meridionale dell'Italia. Fondata dai Fenici nel VIII secolo a.C., è stata una volta una delle città più ricche e potenti del Mediterraneo. Palermo è famosa per la sua cucina, che include piatti come la pasta con le sarde e i cannoli, e per i suoi monumenti storici, come la Cattedrale di Palermo e il Palazzo dei Normanni.",
      "Perugia è la capitale dell'Umbria, nel centro Italia. Fondata dagli Etruschi nel VI secolo a.C., è famosa per il suo centro storico medievale, le sue chiese gotiche e i suoi musei d'arte. La città è anche nota per il suo festival annuale del cioccolato, che attira visitatori da tutto il mondo, e per la sua università per stranieri, fondata nel 1921. La cucina perugina è caratterizzata da piatti tradizionali umbri, come la porchetta, i pici al ragù e i dolci al cioccolato.",
      "Potenza è la capitale della Basilicata, nel sud Italia. Situata su una collina nella parte interna della regione, offre panorami mozzafiato e un'atmosfera tranquilla. La città è famosa per i suoi paesaggi montani, i suoi sentieri escursionistici e la sua cucina tradizionale, che include piatti come la pasta alla mollica, la salsiccia lucana e la peperonata. Potenza è anche conosciuta per la sua festa annuale della Madonna della Bruna, una celebrazione religiosa e culturale che si tiene ogni luglio.",
      "Roma è la capitale dell'Italia e una delle città più antiche del mondo. Fondata dai Romani nel VIII secolo a.C., è stata il centro dell'Impero Romano per secoli. Roma è famosa per i suoi monumenti storici, come il Colosseo e il Pantheon, e per la sua ricca storia artistica e culturale. La città è anche un importante centro religioso, con la Città del Vaticano, sede del Papa e della Chiesa cattolica.",
      "Torino è la capitale del Piemonte, nel nord-ovest Italia. Fondata dai Romani nel I secolo a.C., è stata la capitale del Regno di Sardegna e poi del Regno d'Italia. Torino è famosa per i suoi monumenti storici, i suoi musei d'arte e la sua cucina, che include piatti come il vitello tonnato e la bagna cauda. La città è anche nota per la sua industria automobilistica, con marchi come Fiat e Lancia.",
      "Trento è la capitale della provincia di Trentino, nel nord Italia. Situata tra le montagne delle Dolomiti, offre panorami mozzafiato e una ricca storia. Fondata dai Romani nel I secolo a.C., è stata un importante centro commerciale e culturale nel Medioevo. Oggi, è famosa per i suoi mercati natalizi, la sua architettura medievale e i suoi musei d'arte.",
      "Trieste è una città portuale situata nel nord-est Italia, vicino al confine con la Slovenia. Fondata dai Romani nel I secolo a.C., è stata un importante centro commerciale nel Medioevo. Trieste è famosa per la sua diversità culturale, la sua cucina fusion e il suo importante porto marittimo. La città offre anche splendide vedute panoramiche sul Mar Adriatico e sulle Alpi Giulie.",
      "Venezia è la capitale della regione Veneto, nel nord-est Italia. Fondata dai Romani nel V secolo, è stata una volta una delle città più potenti del Mediterraneo. Venezia è famosa per i suoi canali, le sue gondole e la sua architettura gotica, che la rendono una delle città più romantiche del mondo. La città è anche nota per la sua arte, la sua musica e la sua vivace cultura culinaria."
    ];

  //inserisco le immagini nei container
  for (let idx = 0; idx < immagini.length; idx++) {
    const immagine = immagini[idx];
    const divFoto = document.createElement("div");
    divFoto.classList.add("foto");
    if (idx === 0) divFoto.style.opacity = "1"; // Mostro solo la prima immagine 
    divFoto.innerHTML = `
      <img src="${immagine.src}" alt="${immagine.nome}">
      <div class="nome">${immagine.nome}</div>
    `;
    
    caroselloContainer.appendChild(divFoto);
    
    const posizione = posizioni[idx];
    const divPosizione = document.createElement("div");
    divPosizione.classList.add("foto");
    if (idx === 0){ 
      divPosizione.style.opacity = "1"; // Mostro solo la prima posizione
      divPosizione.style.zIndex = "1";
    }
    divPosizione.innerHTML = `
      <img src="${posizione.src}" alt="${posizione.nome}">
    `;
    divPosizione.addEventListener("click", function() {
      window.open(immagine.link, "_blank");
    });
    posizioneContainer.appendChild(divPosizione);
  }
  
  prevButton.addEventListener("click", function() {
    index = (index - 1 + immagini.length) % immagini.length;
    updateView();
  });

  nextButton.addEventListener("click", function() {
    index = (index + 1) % immagini.length;
    updateView();
  });

  function updateCarosello() {
    const fotoItems = document.querySelectorAll(".carosello .foto");
    fotoItems.forEach((item, idx) => {
      if (idx === index) {
        item.style.opacity = "1";
      } else {
        item.style.opacity = "0";
      }
    });
  }

  function updatePosizione() {
    const posizioneItems = document.querySelectorAll(".posizione .foto");
    posizioneItems.forEach((item, idx) => {
      if (idx === index) {
        item.style.opacity = "1";
        item.style.zIndex = "1";
      } else {
        item.style.opacity = "0";       
        item.style.zIndex = "-1";
      }
    });
  }

  function uptadeContatore() {
    const currentSpan = document.getElementById("current");
    const totalSpan = document.getElementById("total");
    currentSpan.textContent = index + 1;
    totalSpan.textContent = immagini.length;
  }

  function updateInformation(){
    const informationText = informazioni[index];
    information.textContent = informationText;
  }
  
  function updateView(){
    updateCarosello();
    updatePosizione();
    uptadeContatore();
    updateInformation();
  }

  // Aggiungo un event listener per ogni bottone della città
  cityButtons.forEach((button, idx) => {
    button.addEventListener("click", function() {
      index = idx; // Impostato in base al valore dell'attributo 'value' del bottone
      updateView(); // Aggiorno la vista con la città selezionata
    });
  });

  toggleButton.addEventListener("click", function() {
    var aside = document.getElementById("aside");
    var main = document.getElementById("main");
    var button = document.getElementById("toggleButton");
    if (aside.style.display === "none") {
      aside.style.display = "block"; // Mostra l'elemento
      main.style.width = "90%"; // Ridimensiona la larghezza del main
      aside.style.width = "10%";
      button.innerHTML = "&#9664";
      button.style.left = "9%";
    } else {
      aside.style.display = "none"; // Nasconde l'elemento
      aside.style.width = "0%";
      main.style.width = "100%"; // Ridimensiona la larghezza del main
      button.innerHTML = "&#9654;";
      button.style.left = "0%";
    }
  });

});
