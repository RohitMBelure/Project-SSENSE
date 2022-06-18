


let category

let categories = document.querySelectorAll(".elements>a")

// console.log(categories)
categories.forEach(function (el) {
  let dd_content = el.nextElementSibling
  // console.log(dd_content)
  el.addEventListener("click", function click() {
    if (dd_content.style.display == "block") {
      dd_content.style.display = "none"
      el.style.borderBottom = "0px"
    }
    else {
      dd_content.style.display = "block"
      el.style.borderBottom = "1px solid black"
    }

  })
})

const designers = [
  '032c',
  '1017 ALYX 9SM',
  '11 by Boris Bidjan Saberi',
  '132 5. ISSEY MIYAKE',
  '3.1 Phillip Lim',
  '3MAN',
  '424',
  '44 Label Group',
  '4SDESIGNS',
  '99% IS',
  'A BETTER FEELING',
  'A PERSONAL NOTE 73',
  'A-COLD-WALL*',
  'A. A. Spectrum',
  'A.P.C.',
  'AAPE by A Bathing Ape',
  'Acne Studios',
  'ACRONYM',
  'ADER error',
  'adidas Originals',
  'adidas x Human Made',
  'adidas x Humanrace by Pharrell Williams',
  'adidas x IVY PARK',
  'Adieu',
  'ADISH',
  'Advisory Board Crystals',
  'ADYAR',
  'ænrmòus',
  'AFFXWRKS',
  'Afield Out',
  'Agnona',
  'AGR',
  'Ahluwalia',
  'Ahluwalia &PaulSmith',
  'AïE',
  'AIREI',
  'Aitor Throup’s TheDSA',
  'Alan Crocetti',
  'Alchemist',
  'Alexander McQueen',
  'Alighieri',
  'All Blues',
  'AMBUSH',
  'AMI Alexandre Mattiussi',
  'AMIRI',
  'AMOMENTO',
  'and wander',
  'Andersson Bell',
  'ANDREĀDAMO',
  'Ann Demeulemeester',
  'Another Aspect',
  'Aries',
  'Arnar Már Jónsson',
  'ARTURO OBEGERO',
  'Ashley Williams',
  'Asics',
  'ASPESI',
  'AURALEE',
  'Awake NY',
  'Axel Arigato',
  'Aztech Mountain',
  'Balenciaga',
  'Bally Hike',
  'Balmain',
  'Bao Bao Issey Miyake',
  'BAPE',
  'Barbour',
  'Barena',
  'Bather',
  'BEAMS PLUS',
  'BED J.W. FORD',
  'Belstaff',
  'Benjamin Edgar',
  'Bethany Williams',
  'Bianca Saunders',
  'Billionaire Boys Club',
  'Birkenstock',
  'Blackmerle',
  'Bless',
  'Bleue Burnham',
  'BLK DNM',
  'Bloke',
  'Bode',
  'BONNIE CLYDE',
  'Boramy Viguier',
  'Boris Bidjan Saberi',
  'Boss',
  'both',
  'Bottega Veneta',
  'Botter',
  'Brain Dead',
  'Brioni',
  'Brownstone',
  'Brunello Cucinelli',
  'BRYAN JIMENÈZ',
  'Burberry',
  'By Walid',
  'BYBORRE',
  'C.P. Company',
  'C2H4',
  'Calvin Klein Underwear',
  'CALVINLUO',
  'Camber USA',
  'Camiel Fortgens',
  'CamperLab',
  'Canada Goose',
  'Carhartt Work In Progress',
  'Carlota Barrera',
  'Carne Bollente',
  'CARSON WACH',
  'Cartier',
  'Casablanca',
  'Castañer',
  'CAYL',
  'CDLP',
  'CFCL',
  'Champion Reverse Weave',
  'Charles Jeffrey Loverboy',
  'Chemist Creations',
  'Chen Peng',
  'Chet Lo',
  'Children of the Discordance',
  'CHIMI',
  'Chin Teo',
  'Chopova Lowena',
  'Christian Louboutin',
  'Clarks Originals',
  'Clot',
  'CMMN SWDN',
  'Coach 1941',
  'Collina Strada',
  'Come Back as a Flower',
  'COMMAS',
  'Comme des Garçons Homme',
  'Comme des Garçons Homme Deux',
  'Comme des Garçons Homme Plus',
  'Comme des Garçons Play',
  'Comme des Garçons Shirt',
  'Comme des Garçons Wallets',
  'Commission',
  'Common Projects',
  'Completedworks',
  'Connor McKnight',
  'Converse',
  'Coperni',
  'Cornerstone',
  'Corridor',
  'Côte&Ciel',
  'COTTON CITIZEN',
  'Courrèges',
  'Cowgirl Blue Co',
  'Craig Green',
  'Crocs',
  'Cutler And Gross',
  "D'heygere",
  'Daniel W. Fletcher',
  'Danner',
  'Davi Paris',
  'De Bonne Facture',
  'Dear Letterman',
  'Denim Tears',
  'Descente Allterrain',
  'DEVÁ STATES',
  'DEVEAUX NEW YORK',
  'Diemme',
  'Diesel',
  'Dime',
  'Dion Lee',
  'District Vision',
  'Dita',
  'Dolce & Gabbana',
  'DOPPIAA',
  'Double Rainbouu',
  'Doublet',
  'Dr. Martens',
  "Drake's",
  'drew house',
  'Dries Van Noten',
  'Drôle De Monsieur',
  'Dsquared2',
  'Dunhill',
  'Eastwood Danso',
  'Eckhaus Latta',
  'EDEN power corp',
  'Edward Cuming',
  'EGONlab',
  'Eidos',
  'éliou',
  'Emanuele Bicocchi',
  'Endless Joy',
  'Enfants Riches Déprimés',
  'Engineered Garments',
  'Entire Studios',
  'Erdem',
  'ERL',
  'Ermenegildo Zegna',
  'Ermenegildo Zegna Couture',
  'Ernest W. Baker',
  'Essentials',
  'Etro',
  'Études',
  'Evisu',
  'extreme cashmere',
  'Eytys',
  'F-LAGSTUF-F',
  "Factor's",
  'Faith Connexion',
  'FARIS',
  'FDMTL',
  'Fear of God',
  'Feit',
  'Fendi',
  'Feng Chen Wang',
  'FLATLIST EYEWEAR',
  'FRAME',
  'Frédérique Constant',
  'FREI-MUT',
  'Frenckenberger',
  'Fumito Ganryu',
  'Gabriela Hearst',
  'Garrett Leight',
  'GAUCHERE',
  'GCDS',
  'Gentle Fullness',
  'Gentle Monster',
  'Georges Wendell',
  'Georgia Kemball',
  'Gianvito Rossi',
  'Gil Rodriguez',
  'Gimaguas',
  'Giorgio Armani',
  'Giuseppe Zanotti',
  'Givenchy',
  'GmbH',
  'Golden Goose',
  'Goldwin',
  'Good News',
  'Goodfight',
  'GR10K',
  'Gramicci',
  'Greg Lauren',
  'Grey Ant',
  'Gucci',
  'Guidi',
  'Haider Ackermann',
  'Han Kjobenhavn',
  'Hannah Jewett',
  'HANREJ',
  'HARAGO',
  'Harmony',
  'Harris Wharf London',
  'Hatton Labs',
  'Hed Mayner',
  'HELIOT EMIL',
  'Helmut Lang',
  'Henrik Vibskov',
  'Herno',
  'Heron Preston',
  'Heron Preston for Calvin Klein',
  'HH-118389225',
  'Holden',
  'Holubar',
  'Homme Plissé Issey Miyake',
  'Honey Fucking Dijon',
  'Hood by Air',
  'HOPE',
  'House of the Very Islands',
  'Hugo',
  'Human Recreational Services',
  'Husbands',
  'Hyein Seo',
  'ICECREAM',
  'IN GOLD WE TRUST PARIS',
  'Innerraum',
  'Isabel Benenato',
  'Isabel Marant',
  'Isaia',
  'Izzue',
  'Jacquemus',
  'JACQUES',
  'JACQUES MARIE MAGE',
  'Jam',
  'Jan-Jan Van Essche',
  'Jean Paul Gaultier',
  'JERIH',
  'JieDa',
  'Jil Sander',
  'JiyongKim',
  'John Elliott',
  'Johnlawrencesullivan',
  'Judy Turner',
  'Julius',
  'Junya Watanabe',
  'Just Cavalli',
  'Juun.J',
  'JW Anderson',
  'Kanghyuk',
  'Kanuk',
  'KARA',
  'Karu Research',
  'KASSL Editions',
  'Keenkee',
  'Kenzo',
  'KIDILL',
  'Kids Worldwide',
  'KidSuper',
  'Kiko Kostadinov',
  'King & Tuckfield',
  'Klättermusen',
  'Ksubi',
  'Kuboraum',
  'Kuro',
  'KUSIKOHC',
  "L'Homme Rouge",
  'Label Under Construction',
  'Labrum',
  'Lacoste',
  'Lady White Co.',
  'Landlord',
  'Lanvin',
  'Le Gramme',
  'LE17SEPTEMBRE',
  'Lemaire',
  'Les Tien',
  "Levi's",
  "Levi's Made & Crafted",
  "Levi's Vintage Clothing",
  'Lexxola',
  'Li-Ning',
  'Liam Hodges',
  'Liberal Youth Ministry',
  'Loewe',
  'Lorette Colé Duprat',
  "LU'U DAN",
  'Luar',
  'Ludovic de Saint Sernin',
  'Lukhanyo Mdingi',
  'M.A. Martin Asbjørn',
  'MAAP',
  'Mackage',
  'Mackintosh',
  'MAD Paris',
  'Magliano',
  'Mainline:RUS/Fr.CA/DE',
  'Maison Kitsuné',
  'Maison Margiela',
  'Malibu Sandals',
  'Manolo Blahnik',
  'Manors Golf',
  'Marc Jacobs',
  'Marc Jacobs Heaven',
  'Marcelo Burlon County of Milan',
  'Margaret Howell',
  'Marine Serre',
  'Marni',
  'Marsèll',
  'Marshall Columbia',
  'Martin Asbjørn',
  'Martine Ali',
  'Martine Rose',
  'Maryam Nassir Zadeh',
  'Massimo Alba',
  'Master-Piece Co',
  'mastermind JAPAN',
  'mastermind WORLD',
  'Matsuda',
  'Max Mara',
  'Maximilian Davis',
  'MCQ',
  'McQ Alexander McQueen',
  'Merrell 1TRL',
  'Meta Campania Collective',
  'mfpen',
  'MHL by Margaret Howell',
  'Miharayasuhiro',
  'MISBHV',
  'Missoni',
  'Missoni Sport',
  'MM6 Maison Margiela',
  'Molly Goddard',
  'Moncler',
  'Moncler Genius',
  'Moncler Grenoble',
  'Moose Knuckles x Eckhaus Latta',
  'Moschino',
  'Moussy Vintage',
  'Mowalola',
  'Mr. Saturday',
  'MSGM',
  'Mugler',
  'Mühle-Glashütte',
  'Museum of Peace & Quiet',
  'Mykita',
  'N.Hoolywood',
  'Nahmias',
  'Naked & Famous Denim',
  'Namacheko',
  'NAMESAKE',
  'Nanamica',
  'Nanushka',
  'NAPA by Martine Rose',
  'Native Sons',
  'Needles',
  'Neighborhood',
  'Neil Barrett',
  'NEMEN®',
  'New Balance',
  'Nicholas Daley',
  'Nike Jordan',
  'Noah',
  'Nobis',
  'NOMA t.d.',
  'non',
  'nonnative',
  'Noon Goons',
  'Norda',
  'Norse Projects',
  'NotSoNormal',
  'Nudie Jeans',
  'Numbering',
  'Oakley',
  'OAMC',
  'Off-White',
  'Officine Creative',
  'Officine Générale',
  'Ole Mathiesen',
  'Oliver Peoples',
  'On',
  'Online Ceramics',
  'Opening Ceremony',
  'Ostrya',
  'Ottolinger',
  'Our Legacy',
  'OVERCOAT',
  'Paco Rabanne',
  'Padmore & Barnes',
  'Palm Angels',
  'PALMER',
  'Palmes',
  'Paloma Wool',
  'Palomo Spain',
  'Panconesi',
  'PANGAIA',
  'PARADIS PERDUS',
  'Parajumpers',
  'paria /FARZANEH',
  'Pas Normal Studios',
  'Paul Smith',
  'Paul Smith + Christoph Niemann',
  'Paul Smith 50th Anniversary',
  'Paul Stuart',
  'Pearls Before Swine',
  'PEdALED',
  'Peter Do',
  'Phileo',
  'PHIPPS',
  'Phlemuns',
  'Pierre Hardy',
  'Polo Ralph Lauren',
  'Port Tanger',
  'Post Archive Faction (PAF)',
  'Praying',
  "PRESIDENT's",
  'PROJEKT PRODUKT',
  'PS by Paul Smith',
  'Psychworld',
  'Pyer Moss',
  'Quiet Golf',
  'R13',
  'RAEN',
  'Raf Simons',
  'rag & bone',
  'RAINS',
  'Ralph Lauren Purple Label',
  'Random Identities',
  'RANDT',
  'Rassvet',
  'RÄTHEL & WOLF',
  'Ray-Ban',
  'Re/Done',
  'Recto',
  'Red Wing Heritage',
  'Reebok by Pyer Moss',
  'Reebok Classics',
  'Reese Cooper',
  'Remi Relief',
  'RETROSUPERFUTURE',
  'Rhude',
  'Rick Owens',
  'Rick Owens Drkshdw',
  'Ring Jacket',
  'rito structure',
  'RK',
  'RLX Ralph Lauren',
  'ROA',
  'Rochambeau',
  'Rochas Homme',
  'ROGIC',
  'Rombaut',
  'RRL',
  's.k. manor hill',
  'S.R. STUDIO. LA. CA.',
  'S.S.Daley',
  'sacai',
  'Saint Laurent',
  'Saintwoods',
  'Salie 66',
  'Salomon',
  'Salvatore Ferragamo',
  'Sankuanz',
  'Santangelo',
  'Santoni',
  'Sasquatchfabrix.',
  'Satisfy',
  'Satta',
  'Saturdays NYC',
  'Saul Nash',
  'SC103',
  "Schnayderman's",
  'Schott',
  'Sean Suen',
  'Seb Brown',
  'Sebago',
  'Sebastien Ami.',
  'Sébline',
  'Second/Layer',
  'SEEKINGS',
  'Séfr',
  'Serapis',
  'Sergio Tacchini',
  'Shinola',
  'Sies Marjan',
  'Situationist',
  'Sky High Farm Workwear',
  'Smythson',
  'Snow Peak',
  'Soar Running',
  'Solid & Striped',
  'Solid Homme',
  'Song for the Mute',
  'Sophie Buhai',
  'SOPHNET.',
  'Soulland',
  'South2 West8',
  'SPENCER BADU',
  'Sporty & Rich',
  'SSENSE WORKS',
  'St-Henri',
  'Stay Made',
  'Stefan Cooke',
  'Stella McCartney',
  'Stockholm (Surfboard) Club',
  'Stolen Girlfriends Club',
  'Stone Island',
  'Stone Island Shadow Project',
  'Story mfg.',
  'Stray Rats',
  'Stüssy',
  'Stutterheim',
  'SUBU',
  'Suicoke',
  'Sulvam',
  'Sunflower',
  'Sunnei',
  'Sunspel',
  'SWEETLIMEJUICE',
  'System',
  'Taiga Takahashi',
  'TAION',
  'TAKAHIROMIYASHITA TheSoloist.',
  'Tanaka',
  'Tanner Fletcher',
  'Tekla',
  'Ten c',
  'Teva',
  'Thames MMXX.',
  'The Conspires',
  'The Elder Statesman',
  'The Farmers Market Global',
  'The North Face',
  'The Row',
  'The Very Warm',
  'The Viridi-anne',
  'THEBE MAGUGU',
  'Theophilio',
  'Theory',
  'Thierry Lasry',
  'thisisneverthat',
  'Thom Browne',
  'Tibi',
  'Tiger of Sweden',
  'Tiger of Sweden Jeans',
  'Toga Virilis',
  'Tokyo James',
  'TOM FORD',
  'Tom Sachs',
  'Tom Wood',
  'Toogood',
  'Total Luxury Spa',
  'True Tribe',
  'ts(s)',
  'Ugo Cacciatori',
  'Undercover',
  'Undercoverism',
  'Uniform Experiment',
  'UNIFORME',
  'Valentino',
  'Valentino Garavani',
  'Vans',
  'VEERT',
  'Veilance',
  'VEJA',
  'Vejas Maksimas',
  'Versace',
  'Versace Jeans Couture',
  'Versace Underwear',
  'VETEMENTS',
  'Vince',
  'Virón',
  'Visvim',
  'VITELLI',
  'VIVENDII',
  'Vivienne Westwood',
  'VTMNTS',
  'Vyner Articles',
  'WACKO MARIA',
  'Wales Bonner',
  'WARDROBE.NYC',
  'We11done',
  'Wekaforé',
  'WESTERN HYDRODYNAMIC RESEARCH',
  'White Mountaineering',
  'Who Decides War by MRDR BRVDO',
  'Winnie New York',
  'Wolford',
  'Won Hundred',
  'Wood Wood',
  'Wooyoungmi',
  'WWW.WILLSHOTT',
  'Xander Zhou',
  'XLIM',
  'Y-3',
  'Y/Project',
  'YMC',
  'Yohji Yamamoto',
  'Youths in Balaclava',
  'Yuichi Toyama',
  'Yuki Hashimoto',
  'Yves Salomon',
  'Yves Salomon - Army',
  'Z Zegna',
  'ZAYN x ARNETTE',
  'ZEGNA'
]


function display_designers(data) {
  data.forEach(function (el) {
    let li = document.createElement("li")
    li.setAttribute("class", "design")
    let a = document.createElement("a")
    a.innerText = el

    let designer_div = document.querySelector("#designers ul")
    li.append(a)
    designer_div.append(li)
  })
}

display_designers(designers)

function display_products(data) {

  let products = document.querySelector("#products")

  products.innerHTML = null

  data.forEach(function (el) {

    let card = document.createElement("div")

    let image_div = document.createElement("div")
    image_div.setAttribute("class", "image")

    let content_div = document.createElement("div")
    content_div.setAttribute("class", "content")

    let image = document.createElement("img")
    image.src = el.image
    image_div.append(image)
    let designer = document.createElement("p")
    designer.innerText = el.designer.toUpperCase()
    let name = document.createElement("p")
    name.innerText = el.name
    let price = document.createElement("p")
    price.innerText = el.price

    content_div.append(designer, name, price)

    card.append(image_div, content_div)

    products.append(card)
  })

}


const prod = [
  {
    image:
      'https://img.ssensemedia.com/images/222188F054009_1/mm6-maison-margiela-undefined.jpg',
    name: 'Beige Wool Dress',
    designer: 'MM6 Maison Margiela',
    price: '$690',
    category: 'Dresses'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F054010_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Cotton Midi Dress',
    designer: 'MM6 Maison Margiela',
    price: '$310',
    category: 'Dresses'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F070003_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Gray Cotton Overalls',
    designer: 'Carhartt Work In Progress',
    price: '$170',
    category: 'Jumpsuits'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F070017_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Pink Cotton Overalls',
    designer: 'Carhartt Work In Progress',
    price: '$160',
    category: 'Jumpsuits'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221820F070000_1/ambush-undefined.jpg',
    name: 'Black Nylon Jumpsuit',
    designer: 'AMBUSH',
    price: '$480',
    category: 'Jumpsuits'
  },
  {
    image:
      'https://img.ssensemedia.com/images/221190F283005_1/marc-jacobs-undefined.jpg',
    name: 'Silver \'The Bold Charm\' Shoulder Strap',
    designer: "Marc Jacobs",
    price: '$155',
    category: 'Bag Accessories'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221190F283000_1/marc-jacobs-undefined.jpg',
    name: 'Black \'The Logo Webbing\' Shoulder Strap',
    designer: "Marc Jacobs",
    price: '$105',
    category: 'Bag Accessories'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221190F283002_1/marc-jacobs-undefined.jpg',
    name: 'Black \'The Thin Logo\' Shoulder Strap',
    designer: "Marc Jacobs",
    price: '$90',
    category: 'Bag Accessories'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221190F283003_1/marc-jacobs-undefined.jpg',
    name: 'Black \'The Teddy\' Shoulder Strap',
    designer: "Marc Jacobs",
    price: '$155',
    category: 'Bag Accessories'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221190F283004_1/marc-jacobs-undefined.jpg',
    name: 'Gold \'The Charm\' Shoulder Strap',
    designer: "Marc Jacobs",
    price: '$135',
    category: 'Bag Accessories'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222483F001012_1/alaia-undefined.jpg',
    name: 'Black Two-Buckle Corset Belt',
    designer: 'ALAÏA',
    price: '$535',
    category: 'Belts & Suspenders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221168F001007_1/maison-margiela-undefined.jpg',
    name: 'Reversible White Logo  Belt',
    designer: 'Maison Margiela',
    price: '$239',
    category: 'Belts & Suspenders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221168F001008_1/maison-margiela-undefined.jpg',
    name: 'Reversible Gray Leather Belt',
    designer: 'Maison Margiela',
    price: '$239',
    category: 'Belts & Suspenders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221648F001009_1/paloma-wool-undefined.jpg',
    name: 'Black Genova Belt',
    designer: 'Paloma Wool',
    price: '$115',
    category: 'Belts & Suspenders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221648F001008_1/paloma-wool-undefined.jpg',
    name: 'Gray Georgia Belt',
    designer: 'Paloma Wool',
    price: '$125',
    category: 'Belts & Suspenders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221451F002000_1/gucci-beige-gg-supreme-ophidia-cosmetic-case.jpg',
    name: 'Beige GG Supreme Ophidia Cosmetic Case',
    designer: 'Gucci',
    price: '$735',
    category: 'Cosmetic Case'
  }
  ,

  {
    image:
      'https://img.ssensemedia.com/images/222451F004010_1/gucci-undefined.jpg',
    name: 'Tortoiseshell GG0264S Aviator Glasses',
    designer: 'Gucci',
    price: '$330',
    category: 'Eyewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222451F005034_1/gucci-undefined.jpg',
    name: 'Gold GG Mask Sunglasses',
    designer: 'Gucci',
    price: '$1215',
    category: 'Eyewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222451F005035_1/gucci-undefined.jpg',
    name: 'Gold & Silver GG Mask Sunglasses',
    designer: 'Gucci',
    price: '$1215',
    category: 'Eyewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222451F005043_1/gucci-undefined.jpg',
    name: 'Black GG1251S Sunglasses',
    designer: 'Gucci',
    price: '$580',
    category: 'Eyewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221418F004016_1/saint-laurent-undefined.jpg',
    name: 'Black SL 478 Jerry Glasses',
    designer: 'Saint Laurent',
    price: '$340',
    category: 'Eyewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/212232F028012_1/rick-owens-undefined.jpg',
    name: 'Black Cupro Long Mask',
    designer: 'Rick Owens',
    price: '$175',
    category: 'Face Masks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221981F723002_1/vaillant-studio-undefined.jpg',
    name: 'SSENSE Exclusive Beige Lace Capsule Sleep Mask',
    designer: 'VAILLANT',
    price: '$105',
    category: 'Face Masks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/212937F028001_1/misbhv-undefined.jpg',
    name: 'Brown Monogram Face Mask',
    designer: 'MISBHV',
    price: '$21',
    category: 'Face Masks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/212404F028011_1/versace-undefined.jpg',
    name: 'Khaki Logo Face Mask',
    designer: 'Versace',
    price: '$165',
    category: 'Face Masks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/212376F028029_1/burberry-undefined.jpg',
    name: 'Beige Vintage Check Face Mask',
    designer: 'Burberry',
    price: '$335',
    category: 'Face Masks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221791F010019_1/brent-neale-undefined.jpg',
    name: 'Gold & Sapphire Medium Petal Necklace',
    designer: 'BRENT NEALE',
    price: '$4310',
    category: 'Fine Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221106F011002_1/sansoeurs-undefined.jpg',
    name: 'Gold Miki Ring',
    designer: 'Sansoeurs',
    price: '$4285',
    category: 'Fine Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221098F024000_1/shuting-qiu-undefined.jpg',
    name: 'Blue Crystal Bracelet',
    designer: 'SHUTING QIU',
    price: '$365',
    category: 'Fine Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221106F009001_1/sansoeurs-undefined.jpg',
    name: 'Gold Sapphire Bangle Single Right Earring',
    designer: 'Sansoeurs',
    price: '$915',
    category: 'Fine Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221106F009002_1/sansoeurs-undefined.jpg',
    name: 'White Gold Sphere Single Earring',
    designer: 'Sansoeurs',
    price: '$915',
    category: 'Fine Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221770F012001_1/poster-girl-undefined.jpg',
    name: 'Off-White Gracie Gloves',
    designer: 'Poster Girl',
    price: '$140',
    category: 'Gloves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221188F012001_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black & White Distorted Chess Gloves',
    designer: 'MM6 Maison Margiela',
    price: '$240',
    category: 'Gloves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221362F012024_1/paolina-russo-undefined.jpg',
    name: 'Black & White Illusion Knit Fingerless Gloves',
    designer: 'Paolina Russo',
    price: '$250',
    category: 'Gloves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221981F012000_1/vaillant-studio-undefined.jpg',
    name: 'SSENSE Exclusive Black Elbow Gloves',
    designer: 'VAILLANT',
    price: '$255',
    category: 'Gloves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222600F012000_1/isabel-marant-undefined.jpg',
    name: 'Black Mulfi Mittens',
    designer: 'Isabel Marant',
    price: '$370',
    category: 'Gloves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F014004_1/mm6-maison-margiela-undefined.jpg',
    name: 'Gray Knit Beanie',
    designer: 'MM6 Maison Margiela',
    price: '$160',
    category: 'Hats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F014000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Beige Alpaca Balaclava',
    designer: 'MM6 Maison Margiela',
    price: '$265',
    category: 'Hats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F014003_1/mm6-maison-margiela-undefined.jpg',
    name: 'Beige Knit Beanie',
    designer: 'MM6 Maison Margiela',
    price: '$160',
    category: 'Hats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F014001_1/mm6-maison-margiela-undefined.jpg',
    name: 'Red Alpaca Balaclava',
    designer: 'MM6 Maison Margiela',
    price: '$265',
    category: 'Hats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F014002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Alpaca Balaclava',
    designer: 'MM6 Maison Margiela',
    price: '$265',
    category: 'Hats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F020002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Silver Logo Cuff Bracelet',
    designer: 'MM6 Maison Margiela',
    price: '$200',
    category: 'Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F020005_1/mm6-maison-margiela-undefined.jpg',
    name: 'Silver Cuff Bracelet',
    designer: 'MM6 Maison Margiela',
    price: '$200',
    category: 'Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222451F022001_1/gucci-undefined.jpg',
    name: 'Silver Interlocking G Earrings',
    designer: 'Gucci',
    price: '$245',
    category: 'Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F023005_1/mm6-maison-margiela-undefined.jpg',
    name: 'Silver Metal Bead Necklace',
    designer: 'MM6 Maison Margiela',
    price: '$265',
    category: 'Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F023004_1/alexander-mcqueen-undefined.jpg',
    name: 'Gunmetal Skull Necklace',
    designer: 'Alexander McQueen',
    price: '$425',
    category: 'Jewelry'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221798F025003_1/bottega-veneta-undefined.jpg',
    name: 'Yellow Lambskin Key Ring',
    designer: 'Bottega Veneta',
    price: '$315',
    category: 'Keychains'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221231F025004_1/saks-potts-undefined.jpg',
    name: 'Red India AirPods Pro Case',
    designer: 'Saks Potts',
    price: '$172',
    category: 'Keychains'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221188F025000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Card Holders Keychain',
    designer: 'MM6 Maison Margiela',
    price: '$347',
    category: 'Keychains'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221482F025000_1/ami-alexandre-mattiussi-undefined.jpg',
    name: 'Green Ami de Cœur Keychain',
    designer: 'AMI Alexandre Mattiussi',
    price: '$130',
    category: 'Keychains'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221482F025001_1/ami-alexandre-mattiussi-undefined.jpg',
    name: 'Blue Ami de Cœur Keyring',
    designer: 'AMI Alexandre Mattiussi',
    price: '$130',
    category: 'Keychains'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F028003_1/alexander-mcqueen-undefined.jpg',
    name: 'Navy & White Bellflower Scarf',
    designer: 'Alexander McQueen',
    price: '$240',
    category: 'Scarves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F029005_1/alexander-mcqueen-undefined.jpg',
    name: 'Black Bellflower Scarf',
    designer: 'Alexander McQueen',
    price: '$270',
    category: 'Scarves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F029006_1/alexander-mcqueen-undefined.jpg',
    name: 'White Bellflower Scarf',
    designer: 'Alexander McQueen',
    price: '$270',
    category: 'Scarves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222381F028000_1/thom-browne-undefined.jpg',
    name: 'Gray 4-Bar Scarf',
    designer: 'Thom Browne',
    price: '$695',
    category: 'Scarves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222278F029003_1/givenchy-undefined.jpg',
    name: 'Tan & Beige 4G Scarf',
    designer: 'Givenchy',
    price: '$460',
    category: 'Scarves'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F076000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Logo Socks',
    designer: 'MM6 Maison Margiela',
    price: '$55',
    category: 'Socks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F076001_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Logo Socks',
    designer: 'MM6 Maison Margiela',
    price: '$55',
    category: 'Socks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F076002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Tan Logo Socks',
    designer: 'MM6 Maison Margiela',
    price: '$55',
    category: 'Socks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F076003_1/mm6-maison-margiela-undefined.jpg',
    name: 'Red Logo Socks',
    designer: 'MM6 Maison Margiela',
    price: '$55',
    category: 'Socks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222359F076004_1/the-row-undefined.jpg',
    name: 'Black Calf Socks',
    designer: 'The Row',
    price: '$195',
    category: 'Socks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F037005_1/maison-margiela-undefined.jpg',
    name: 'Gray Leather Card Holder',
    designer: 'Maison Margiela',
    price: '$255',
    category: 'Wallets & Card Holders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F037007_1/maison-margiela-undefined.jpg',
    name: 'Black Leather Card Holder',
    designer: 'Maison Margiela',
    price: '$255',
    category: 'Wallets & Card Holders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F037030_1/maison-margiela-undefined.jpg',
    name: 'Black Zip Card Holder',
    designer: 'Maison Margiela',
    price: '$295',
    category: 'Wallets & Card Holders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F040002_1/maison-margiela-undefined.jpg',
    name: 'Black Compact Bifold Wallet',
    designer: 'Maison Margiela',
    price: '$445',
    category: 'Wallets & Card Holders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F040012_1/maison-margiela-undefined.jpg',
    name: 'Black Envelope Wallet',
    designer: 'Maison Margiela',
    price: '$505',
    category: 'Wallets & Card Holders'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222129F042001_1/acne-studios-undefined.jpg',
    name: 'Black Ripstop Backpack',
    designer: 'Acne Studios',
    price: '$200',
    category: 'Backpacks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222187F042001_1/alexander-wang-undefined.jpg',
    name: 'Black Wangsport Backpack',
    designer: 'Alexander Wang',
    price: '$410',
    category: 'Backpacks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222941F042000_1/pleats-please-issey-miyake-undefined.jpg',
    name: 'Black Polyester Backpack',
    designer: 'Pleats Please Issey Miyake',
    price: '$565',
    category: 'Backpacks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221359F042002_1/the-row-undefined.jpg',
    name: 'Taupe Calfskin Backpack',
    designer: 'The Row',
    price: '$4430',
    category: 'Backpacks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221168F042004_1/maison-margiela-undefined.jpg',
    name: 'Black Mini Glam Slam Backpack',
    designer: 'Maison Margiela',
    price: '$1345',
    category: 'Backpacks'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222386F046137_1/staud-undefined.jpg',
    name: 'Black Mini Shirley Bag',
    designer: 'Staud',
    price: '$280',
    category: 'Duffle & Top Handle Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222386F046138_1/staud-undefined.jpg',
    name: 'Brown Mini Shirley Bag',
    designer: 'Staud',
    price: '$280',
    category: 'Duffle & Top Handle Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222386F046139_1/staud-undefined.jpg',
    name: 'Beige Mini Shirley Bag',
    designer: 'Staud',
    price: '$280',
    category: 'Duffle & Top Handle Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222386F046140_1/staud-undefined.jpg',
    name: 'Brown Shirley Bag',
    designer: 'Staud',
    price: '$330',
    category: 'Duffle & Top Handle Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222359F046000_1/the-row-undefined.jpg',
    name: 'Black E/W Top Handle Bag',
    designer: 'The Row',
    price: '$3280',
    category: 'Duffle & Top Handle Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F045010_1/maison-margiela-undefined.jpg',
    name: 'Black Small Leather Pouch',
    designer: 'Maison Margiela',
    price: '$340',
    category: 'Clutches & Pouches'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F044002_1/alexander-mcqueen-undefined.jpg',
    name: 'Orange Skull Clutch',
    designer: 'Alexander McQueen',
    price: '$1630',
    category: 'Clutches & Pouches'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F044004_1/alexander-mcqueen-undefined.jpg',
    name: 'Black Four Ring Clutch',
    designer: 'Alexander McQueen',
    price: '$1955',
    category: 'Clutches & Pouches'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222387F045004_1/kenzo-undefined.jpg',
    name: 'Black Mini Kampus Tiger Belt Bag',
    designer: 'Kenzo',
    price: '$195',
    category: 'Clutches & Pouches'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222359F045003_1/the-row-undefined.jpg',
    name: 'Brown XL Bourse Pouch',
    designer: 'The Row',
    price: '$1030',
    category: 'Clutches & Pouches'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222338F047002_1/chloe-undefined.jpg',
    name: 'Khaki Small Tess Day Messenger Bag',
    designer: 'Chloé',
    price: '$1395',
    category: 'Messenger Bags & Satchels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222338F047003_1/chloe-undefined.jpg',
    name: 'Taupe Mini Tess Day Bag',
    designer: 'Chloé',
    price: '$1395',
    category: 'Messenger Bags & Satchels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221338F047000_1/chloe-undefined.jpg',
    name: 'Black Small Tess Day Bag',
    designer: 'Chloé',
    price: '$1760',
    category: 'Messenger Bags & Satchels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221338F047004_1/chloe-undefined.jpg',
    name: 'Yellow Mini Tess Day Bag',
    designer: 'Chloé',
    price: '$1635',
    category: 'Messenger Bags & Satchels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221283F047007_1/31-phillip-lim-undefined.jpg',
    name: 'Pink Mini Pashli Satchel',
    designer: '3.1 Phillip Lim',
    price: '$433',
    category: 'Messenger Bags & Satchels'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222359F048013_1/the-row-undefined.jpg',
    name: 'Black Bourse Phone Case Bag',
    designer: 'The Row',
    price: '$770',
    category: 'Shoulder Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F048002_1/maison-margiela-undefined.jpg',
    name: 'Navy Mini 5AC Camera Bag',
    designer: 'Maison Margiela',
    price: '$1085',
    category: 'Shoulder Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F048065_1/maison-margiela-undefined.jpg',
    name: 'Navy Small Leather Shoulder Bag',
    designer: 'Maison Margiela',
    price: '$650',
    category: 'Shoulder Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F048002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Ergo Shoulder Bag',
    designer: 'MM6 Maison Margiela',
    price: '$625',
    category: 'Shoulder Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222190F048009_1/marc-jacobs-undefined.jpg',
    name: 'Taupe \'The Snapshot\' Shoulder Bag',
    designer: 'Marc Jacobs',
    price: '$385',
    category: 'Shoulder Bags'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F049022_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Flat Tote',
    designer: 'MM6 Maison Margiela',
    price: '$520',
    category: 'Tote Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F049006_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Black Small Bayfield Tote',
    designer: 'Carhartt Work In Progress',
    price: '$65',
    category: 'Tote Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F049007_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Purple Small Bayfield Tote',
    designer: 'Carhartt Work In Progress',
    price: '$65',
    category: 'Tote Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222190F049007_1/marc-jacobs-undefined.jpg',
    name: 'Khaki \'The Mini Tote Bag\' Tote',
    designer: 'Marc Jacobs',
    price: '$210',
    category: 'Tote Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221169F049000_1/bode-undefined.jpg',
    name: 'Brown Board Game Tote',
    designer: 'Bode',
    price: '$1790',
    category: 'Tote Bags'
  },
  {
    image:
      'https://img.ssensemedia.com/images/221111F050000_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Black Jake Travel Bag',
    designer: 'Carhartt Work In Progress',
    price: '$110',
    category: 'Travel Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221802F050002_1/the-north-face-undefined.jpg',
    name: 'Pink Small Base Camp Travel Bag',
    designer: 'The North Face',
    price: '$140',
    category: 'Travel Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/212482F049000_1/tekla-undefined.jpg',
    name: 'Off-White Canvas Tote',
    designer: 'Tekla',
    price: '$143',
    category: 'Travel Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221802F050004_1/the-north-face-undefined.jpg',
    name: 'Blue KAWS Edition Duffle Bag',
    designer: 'The North Face',
    price: '$265',
    category: 'Travel Bags'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/202171F050042_1/moncler-genius-undefined.jpg',
    name: 'Moncler Rimowa \'Reflection\' Silver Suitcase',
    designer: 'Moncler Genius',
    price: '$3310',
    category: 'Travel Bags'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222017F531000_1/wolford-undefined.jpg',
    name: 'Pink GCDS Edition Sport Leggings',
    designer: 'Wolford',
    price: '$215',
    category: 'Activewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221585F581000_1/on-running-undefined.jpg',
    name: 'Grey Ripstop Explorer Jacket',
    designer: 'On',
    price: '$535',
    category: 'Activewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222277F531000_1/wardrobenyc-undefined.jpg',
    name: 'Black Nylon Sport Leggings',
    designer: 'WARDROBE.NYC',
    price: '$250',
    category: 'Activewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222733F561009_1/satisfy-undefined.jpg',
    name: 'Pink Organic Cotton Top',
    designer: 'Satisfy',
    price: '$165',
    category: 'Activewear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222733F541002_1/satisfy-undefined.jpg',
    name: 'Black Nylon Shorts',
    designer: 'Satisfy',
    price: '$220',
    category: 'Activewear'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F054012_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Cotton Midi Dress',
    designer: 'MM6 Maison Margiela',
    price: '$310',
    category: 'Dresses'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F054001_1/mm6-maison-margiela-undefined.jpg',
    name: 'Beige Wool Dress',
    designer: 'MM6 Maison Margiela',
    price: '$625',
    category: 'Dresses'
  }
  ,

  {
    image:
      'https://img.ssensemedia.com/images/222188F054011_1/mm6-maison-margiela-undefined.jpg',
    name: 'Blue Cotton Midi Dress',
    designer: 'MM6 Maison Margiela',
    price: '$310',
    category: 'Dresses'
  },
  {
    image:
      'https://img.ssensemedia.com/images/221111F058004_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Gray Sante Fe Bomber',
    designer: 'Carhartt Work In Progress',
    price: '$225',
    category: 'Jackets & Coats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F059005_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Black Medley Coat',
    designer: 'Carhartt Work In Progress',
    price: '$275',
    category: 'Jackets & Coats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F060001_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Navy Double Front Denim Jacket',
    designer: 'Carhartt Work In Progress',
    price: '$215',
    category: 'Jackets & Coats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F060002_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Off-White Double Front Denim Jacket',
    designer: 'Carhartt Work In Progress',
    price: '$200',
    category: 'Jackets & Coats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F063001_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Beige Michigan Jacket',
    designer: 'Carhartt Work In Progress',
    price: '$170',
    category: 'Jackets & Coats'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F069002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Wide-Leg Jeans',
    designer: 'MM6 Maison Margiela',
    price: '$310',
    category: 'Jeans'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F069005_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Off-White Pierce Jeans',
    designer: 'Carhartt Work In Progress',
    price: '$100',
    category: 'Jeans'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F069006_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Black Pierce Jeans',
    designer: 'Carhartt Work In Progress',
    price: '$100',
    category: 'Jeans'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F069008_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Purple Pierce Jeans',
    designer: 'Carhartt Work In Progress',
    price: '$100',
    category: 'Jeans'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F069009_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Blue Double Knee Jeans',
    designer: 'Carhartt Work In Progress',
    price: '$110',
    category: 'Jeans'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F070000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Coated Jumpsuit',
    designer: 'MM6 Maison Margiela',
    price: '$1270',
    category: 'Jumpsuits'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F070001_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Purple Cotton Overalls',
    designer: 'Carhartt Work In Progress',
    price: '$170',
    category: 'Jumpsuits'
  }
  ,

  {
    image:
      'https://img.ssensemedia.com/images/221879F073003_1/kye-intimates-undefined.jpg',
    name: 'White Daily Triangle Bra',
    designer: 'KYE Intimates',
    price: '$105',
    category: 'Jumpsuits'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222017F073002_1/wolford-undefined.jpg',
    name: 'Black GCDS Edition Bra',
    designer: 'Wolford',
    price: '$150',
    category: 'Jumpsuits'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222017F073000_1/wolford-undefined.jpg',
    name: 'Pink GCDS Edition Bra',
    designer: 'Wolford',
    price: '$150',
    category: 'Jumpsuits'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222017F074002_1/wolford-undefined.jpg',
    name: 'Black GCDS Edition Briefs',
    designer: 'Wolford',
    price: '$150',
    category: 'Jumpsuits'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222545F079009_1/skims-undefined.jpg',
    name: 'White Shirt & Lounge Pants Set',
    designer: 'SKIMS',
    price: '$140',
    category: 'Jumpsuits'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F085000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Faux-Leather Leggings',
    designer: 'MM6 Maison Margiela',
    price: '$235',
    category: 'Pants'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F086002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Rib Lounge Pants',
    designer: 'MM6 Maison Margiela',
    price: '$585',
    category: 'Pants'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F087006_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Polyester Trousers',
    designer: 'MM6 Maison Margiela',
    price: '$415',
    category: 'Pants'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F087000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Pinstripe Trousers',
    designer: 'MM6 Maison Margiela',
    price: '$475',
    category: 'Pants'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F085005_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Flared Leggings',
    designer: 'MM6 Maison Margiela',
    price: '$340',
    category: 'Pants'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F088000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Faux-Leather Shorts',
    designer: 'MM6 Maison Margiela',
    price: '$180',
    category: 'Shorts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221944F088010_1/constanca-entrudo-undefined.jpg',
    name: 'Green Printed Shorts',
    designer: 'Constança Entrudo',
    price: '$420',
    category: 'Shorts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F088004_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Black Cargo Shorts',
    designer: 'Carhartt Work In Progress',
    price: '$100',
    category: 'Shorts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221111F088013_1/carhartt-work-in-progress-undefined.jpg',
    name: 'Purple Pierce Shorts',
    designer: 'Carhartt Work In Progress',
    price: '$90',
    category: 'Shorts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221278F088005_1/givenchy-undefined.jpg',
    name: 'Brown Polyester Shorts',
    designer: 'Givenchy',
    price: '$1805',
    category: 'Shorts'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222386F092003_1/staud-undefined.jpg',
    name: 'Navy & Blue Lorraine Midi Skirt',
    designer: 'Staud',
    price: '$185',
    category: 'Skirts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/201399F067012_1/vip-ssense-exclusive-black-puffer-jacket.jpg',
    name: 'SSENSE Exclusive Black Puffer Jacket',
    designer: 'VIP',
    price: '$335',
    category: 'Dog Accessories'
  }

  ,
  {
    image:
      'https://img.ssensemedia.com/images/221596F092003_1/a-roege-hove-undefined.jpg',
    name: 'White Nylon & Cotton Midi Skirt',
    designer: 'a. roege hove',
    price: '$390',
    category: 'Skirts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222111F090000_1/moncler-undefined.jpg',
    name: 'Blue Quilted Miniskirt',
    designer: 'Moncler',
    price: '$650',
    category: 'Skirts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222417F090011_1/dion-lee-undefined.jpg',
    name: 'Black Cotton Short Skirt',
    designer: 'Dion Lee',
    price: '$495',
    category: 'Skirts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222666F093001_1/low-classic-undefined.jpg',
    name: 'Tan Wool Midi Skirt',
    designer: 'LOW CLASSIC',
    price: '$275',
    category: 'Skirts'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222666F093000_1/low-classic-undefined.jpg',
    name: 'Gray Wool Midi Skirt',
    designer: 'LOW CLASSIC',
    price: '$275',
    category: 'Skirts'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F097005_1/mm6-maison-margiela-undefined.jpg',
    name: 'Gray Rib Sweater',
    designer: 'MM6 Maison Margiela',
    price: '$585',
    category: 'Sweaters'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F097006_1/mm6-maison-margiela-undefined.jpg',
    name: 'Blue Rib Sweater',
    designer: 'MM6 Maison Margiela',
    price: '$585',
    category: 'Sweaters'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F097014_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Open Back Hoodie',
    designer: 'MM6 Maison Margiela',
    price: '$340',
    category: 'Sweaters'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F099004_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Metallic Fringe Turtleneck',
    designer: 'MM6 Maison Margiela',
    price: '$445',
    category: 'Sweaters'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F100002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Navy Paneled Sweater',
    designer: 'MM6 Maison Margiela',
    price: '$445',
    category: 'Sweaters'
  },
  {
    image:
      'https://img.ssensemedia.com/images/221342F103001_1/balenciaga-undefined.jpg',
    name: 'Black Nylon One-Piece Swimsuit',
    designer: 'Balenciaga',
    price: '$655',
    category: 'Swimwear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221342F103002_1/balenciaga-undefined.jpg',
    name: 'Black Sporty B Swimsuit',
    designer: 'Balenciaga',
    price: '$520',
    category: 'Swimwear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221980F105002_1/le-petit-trou-undefined.jpg',
    name: 'Black Palmier Bikini Top',
    designer: 'Le Petit Trou',
    price: '$140',
    category: 'Swimwear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221980F105003_1/le-petit-trou-undefined.jpg',
    name: 'Black Croton Bikini Bottom',
    designer: 'Le Petit Trou',
    price: '$110',
    category: 'Swimwear'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221980F105004_1/le-petit-trou-undefined.jpg',
    name: 'Black Flot Bikini Top',
    designer: 'Le Petit Trou',
    price: '$110',
    category: 'Swimwear'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F358000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Beige Nylon Bodysuit',
    designer: 'MM6 Maison Margiela',
    price: '$235',
    category: 'Tops'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F109001_1/mm6-maison-margiela-undefined.jpg',
    name: 'White Cotton Shirt',
    designer: 'MM6 Maison Margiela',
    price: '$375',
    category: 'Tops'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F109002_1/mm6-maison-margiela-undefined.jpg',
    name: 'White Backwards Shirt',
    designer: 'MM6 Maison Margiela',
    price: '$375',
    category: 'Tops'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F109000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Cropped Shirt',
    designer: 'MM6 Maison Margiela',
    price: '$395',
    category: 'Tops'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F110014_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Cut-Out T-Shirt',
    designer: 'MM6 Maison Margiela',
    price: '$180',
    category: 'Tops'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222168F113012_1/maison-margiela-undefined.jpg',
    name: 'Black Leather Tabi Boots',
    designer: 'Maison Margiela',
    price: '$905',
    category: 'Boots'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F113003_1/mm6-maison-margiela-undefined.jpg',
    name: 'Brown Anatomic Ankle Boots',
    designer: 'MM6 Maison Margiela',
    price: '$555',
    category: 'Boots'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F113000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Anatomic Ankle Boots',
    designer: 'MM6 Maison Margiela',
    price: '$500',
    category: 'Boots'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F113001_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Anatomic Ankle Boots',
    designer: 'MM6 Maison Margiela',
    price: '$500',
    category: 'Boots'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F113002_1/mm6-maison-margiela-undefined.jpg',
    name: 'Brown Anatomic Ankle Boots',
    designer: 'MM6 Maison Margiela',
    price: '$520',
    category: 'Boots'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222359F118004_1/the-row-undefined.jpg',
    name: 'Black Heeled Ballerina Flats',
    designer: 'The Row',
    price: '$1000',
    category: 'Flats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F118000_1/maison-margiela-undefined.jpg',
    name: 'Black Tabi Buckle Ballerina Flats',
    designer: 'Maison Margiela',
    price: '$760',
    category: 'Flats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F120002_1/maison-margiela-undefined.jpg',
    name: 'Brown Leather Tabi Oxfords',
    designer: 'Maison Margiela',
    price: '$875',
    category: 'Flats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F120003_1/maison-margiela-undefined.jpg',
    name: 'Green Leather Tabi Oxfords',
    designer: 'Maison Margiela',
    price: '$875',
    category: 'Flats'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222168F120010_1/maison-margiela-undefined.jpg',
    name: 'Black Leather Tabi Oxfords',
    designer: 'Maison Margiela',
    price: '$875',
    category: 'Flats'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222188F122000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White Anatomical Ballerina Heels',
    designer: 'MM6 Maison Margiela',
    price: '$395',
    category: 'Heels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F122001_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Anatomical Ballerina Heels',
    designer: 'MM6 Maison Margiela',
    price: '$395',
    category: 'Heels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221140F122004_1/manolo-blahnik-undefined.jpg',
    name: 'Pink Satin Hangisi Heels',
    designer: 'Manolo Blahnik',
    price: '$945',
    category: 'Heels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221140F122029_1/manolo-blahnik-undefined.jpg',
    name: 'Brown Maysale Pumps',
    designer: 'Manolo Blahnik',
    price: '$820',
    category: 'Heels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/221140F122009_1/manolo-blahnik-undefined.jpg',
    name: 'Black Hangisimu 50 Heeled Sandals',
    designer: 'Manolo Blahnik',
    price: '$1020',
    category: 'Heels'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222168F124002_1/maison-margiela-undefined.jpg',
    name: 'Black Tabi Slippers',
    designer: 'Maison Margiela',
    price: '$340',
    category: 'Sandals'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F124001_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black Hotel Pool Slides',
    designer: 'MM6 Maison Margiela',
    price: '$145',
    category: 'Sandals'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222187F125000_1/alexander-wang-undefined.jpg',
    name: 'Black AW Wedge Flip Flop Sandals',
    designer: 'Alexander Wang',
    price: '$160',
    category: 'Sandals'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222187F124001_1/alexander-wang-undefined.jpg',
    name: 'Black AW Flip Flop Sandals',
    designer: 'Alexander Wang',
    price: '$135',
    category: 'Sandals'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222187F124004_1/alexander-wang-undefined.jpg',
    name: 'Black Crystal Anya Flat Sandals',
    designer: 'Alexander Wang',
    price: '$540',
    category: 'Sandals'
  },
  {
    image:
      'https://img.ssensemedia.com/images/222168F128016_1/maison-margiela-undefined.jpg',
    name: 'White & Gray Replica Sneakers',
    designer: 'Maison Margiela',
    price: '$470',
    category: 'Sneakers'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F128000_1/mm6-maison-margiela-undefined.jpg',
    name: 'Off-White 6 Court Sneakers',
    designer: 'MM6 Maison Margiela',
    price: '$360',
    category: 'Sneakers'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222188F128003_1/mm6-maison-margiela-undefined.jpg',
    name: 'Black 6 Court Sneakers',
    designer: 'MM6 Maison Margiela',
    price: '$360',
    category: 'Sneakers'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F128018_1/alexander-mcqueen-undefined.jpg',
    name: 'White & Green Oversized Sneakers',
    designer: 'Alexander McQueen',
    price: '$620',
    category: 'Sneakers'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/222259F128020_1/alexander-mcqueen-undefined.jpg',
    name: 'White & Pink Oversized Low-Top Sneakers',
    designer: 'Alexander McQueen',
    price: '$665',
    category: 'Sneakers'
  },
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/221451F031000_1/gucci-beige-and-brown-gg-ophidia-airpods-case.jpg',
    name: 'Beige & Brown GG Ophidia AirPods Case',
    designer: 'Gucci',
    price: '$480',
    category: 'Tech'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/211376F032080_1/burberry-brown-iphone-11-pro-case.jpg',
    name: 'Brown iPhone 11 Pro Case',
    designer: 'Burberry',
    price: '$142',
    category: 'Tech'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/221251F104001_1/balmain-black-gold-logo-beach-towel.jpg',
    name: 'Black Gold Logo Beach Towel',
    designer: 'Balmain',
    price: '$364',
    category: 'Towels'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/221251F104000_1/balmain-black-allover-bb-beach-towel.jpg',
    name: 'Black Allover BB Beach Towel',
    designer: 'Balmain',
    price: '$364',
    category: 'Towels'
  },
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/221376F035000_1/burberry-beige-check-trafalgar-umbrella.jpg',
    name: 'Beige Check Trafalgar Umbrella',
    designer: 'Burberry',
    price: '$305',
    category: 'Umbrellas'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/211342F035358_1/balenciaga-black-all-over-logo-umbrella.jpg',
    name: 'Black All Over Logo Umbrella',
    designer: 'Balenciaga',
    price: '$500',
    category: 'Umbrellas'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/221451F041000_1/gucci-silver-and-gold-bee-g-timeless-watch.jpg',
    name: 'Silver & Gold Bee G-Timeless Watch',
    designer: 'Gucci',
    price: '$1520',
    category: 'Watches'
  }
  ,
  {
    image:
      'https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_1.3/221451F041001_1/gucci-silver-and-gold-bee-g-timeless-watch.jpg',
    name: 'Silver & Gold Bee G-Timeless Watch',
    designer: 'Gucci',
    price: '$1520',
    category: 'Watches'
  },
]


// console.log(prod[0].price.slice(1))

display_products(prod)

let all_cat = document.querySelector("#left-sidebar>a")
// console.log(all_cat.innerText)
all_cat.addEventListener("click",function(){
  category=""
  display_products(prod)
})

let cats = document.querySelectorAll(".elements li")

// console.log(cats)
cats.forEach(function (el) {
  el.addEventListener("click", catFun)
})

function catFun() {
  // console.log(this.innerText)
  category = event.target.innerText

  let newProd = prod.filter(function (el) {
    return el.category === event.target.innerText
  })
  // console.log(newProd)

  display_products(newProd)
}


let design = document.querySelectorAll(".design")

// console.log(design)
design.forEach(function (el) {
  el.addEventListener("click", designFun)
})

function designFun() {
  // console.log(this.innerText)
  let newProd = prod.filter(function (el) {
    if (category) {
      return (el.category == category) && (el.designer == event.target.innerText)
    }
    return el.designer == event.target.innerText
  })

  display_products(newProd)
}

let trending = document.querySelector("#sort li")
// console.log(trending)
trending.addEventListener("click", trendFun)

let lth = document.querySelector("#sort li+li")
// console.log(lth)
lth.addEventListener("click", lthFun)

let htl = document.querySelector("#sort li+li+li")
// console.log(htl)
htl.addEventListener("click", htlFun)


function lthFun() {
  if (category) {
    let newProd = prod.filter(function (el) {
      return el.category == category
    })
    newProd.sort(function (a, b) {
      return Number(a.price.slice(1)) - Number(b.price.slice(1))
    })
    display_products(newProd)
  }
  else {
    prod.sort(function (a, b) {

      return Number(a.price.slice(1)) - Number(b.price.slice(1))
    })

    display_products(prod)

  }

}

function htlFun() {
  if (category) {
    let newProd = prod.filter(function (el) {
      return el.category == category
    })
    newProd.sort(function (a, b) {
      return Number(b.price.slice(1)) - Number(a.price.slice(1))
    })
    display_products(newProd)
  }
  else {
    prod.sort(function (a, b) {

      return Number(b.price.slice(1)) - Number(a.price.slice(1))
    })

    display_products(prod)

  }

}

function trendFun() {
  if (category) {
    let newProd = prod.filter(function (el) {
      return el.category == category
    })
    newProd = newProd.filter(function (el) {
      return el.price.slice(1) < 400 && el.price.slice(1) > 50
    })
    display_products(newProd)
  }
  else {
    let newProd = prod.filter(function (el) {
      return el.price.slice(1) < 400 && el.price.slice(1) > 50
    })
    display_products(newProd)

  }

}

