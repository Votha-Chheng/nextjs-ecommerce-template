
const products = [
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    description : "Lampe à poser en bois flotté avec spot intégré, formant un joli jeu de lumières et d'ombres. Ampoule spot fournie.",
    prix : 70,
    stock : 1,
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L19012.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/22-1.jpg',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/abcdefgh.jpg',
        aspectRatio:'portrait'
      } 
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 1,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    description : "Lampe à poser en bois flotté idéale pour une lumière d'appoint sur une table basse. Abat-jour fabriqué en France sur-mesure, trois coloris au choix. Finition soignée. Modèle unique.",
    livraison : true,
    images : [
      {
        url: '/images/L18016.jpg',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/L18016-1.jpg',
        aspectRatio: 'paysage'
      },
      {
        url: '/images/L18016-2.jpg',
        aspectRatio:'paysage'
      }]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 95,
    stock : 1,
    couleurs : [],
    description : "Lampe de table en bois flotté idéale pour une lumière d'appoint sur une table basse. Abat-jour fabriqué en France sur-mesure (25cm*25cm). Modèle unique. Cordon électrique non visible, finitions soignées.",
    livraison : true,
    images : [
      {
        url: '/images/L18017.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18017-1.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/L18017-2.jpg',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    nom : "Lampe de chevet",
    category : "lampes en bois brut et autres",
    prix : 80,
    stock : 1,
    description : "Petite lampe de chevet en bois de récupération. Rien ne se perd, tout se transforme! Une deuxième vie pour ce bois de palette. Abat-jour fabriqué en France sur mesure.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18018.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18018-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18018-2.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 95,
    stock : 1,
    description : "Lampe à poser en bois flotté, idéale pour agrémenter votre bureau ! Abat-jour fabriqué en France sur mesure, trois coloris au choix. Patins sous le socle. Finitions soignée. Modèle unique.",
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    livraison : true,
    images : [
      {
        url: '/images/L18020.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18020-1.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 95,
    stock : 1,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    description : "Lampe de table en bois flotté, formant une géode. Parfaite pour vous accompagner sur votre bureau. Abat-jour rectangulaire fabriqué sur mesure en France. 3 coloris au choix. Patins sous le socle. Finitions soignées. Modèle unique.",
    livraison : true,
    images : [
      {
        url: '/images/L18021.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18021-1.jpg',
        aspectRatio: "portrait" 
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 1,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    description : "Jolie lampe à poser en bois flotté, aux bois naturellement travaillés par les éléments. Abat-jour fabriqué en France sur-mesure, 3 coloris au choix. Patins sous le socle. Finitions soignées. Modèle unique.",
    livraison : true,
    images : [
      {
        url: '/images/L18022.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18022-1.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/L18022-2.jpg',
        aspectRatio: "paysage"
      }  
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 3,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    description : "Lampes à poser aux bois flottés, lui donnant un style épuré et élégant. Parfaite pour agrémenter votre bureau ou une table basse. Modèle unique. Abat-jour fabriqué en France, sur mesure. 3 coloris au choix.",
    livraison : true,
    images : [
      {
        url: '/images/L18026.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18026-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18026-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Racines flottées",
    category : "lampes en bois flotté",
    prix : 70,
    stock : 1,
    description : "Les racines polies par les eaux donnent toujours des bois flottés très originaux. Mi-sculpture, mi-lampe cette lampe à poser avec spot intégré sera très appréciée. Ampoule spot fournie.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L19015.jpg',
        aspectRatio: "paysage" 
      },
      {
        url: '/images/L19015-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L19015-2.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "Les Mouettes",
    category : "lampes en bois flotté",
    prix : 95,
    stock : 0,
    description : "Lampe qui n'est plus en vente.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/les-mouettes.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/les-mouettes-1.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/les-mouettes-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "L'encadrée",
    category : "lampes en bois brut et autres",
    prix : 110,
    stock : 1,
    description : "Attention création originale! Lampe à poser en pin. Inspirée par mes \"boites lumineuses\", cette lampe reprend le jeu des trous et lumières associé à un cadre. Mi-sculpture moderne , mi-lampe.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/l-encadree.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/l-encadree-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/l-encadree-2.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "Boite à lumières couleur blanche",
    category : "lampes en bois brut et autres",
    prix : 50,
    stock : 2,
    description : "Jolie lampe d'ambiance créée à partir de bois de récupération. Ambiance cosy et intimiste assurée. Version blanche. Ampoule fournie.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L19006-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L19006-2.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L19006.jpg',
        aspectRatio: "portrait"
      },
    ]
  },
  {
    nom : "Boite à lumières couleur noire",
    category : "lampes en bois brut et autres",
    prix : 50,
    stock : 1,
    description : "Jolie lampe d'ambiance créée à partir de bois de récupération. Ambiance cosy et intimiste assurée. Version noire. Ampoule fournie.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/boite-a-lumieres.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "Colonne lumineuse",
    category : "lampadaires",
    prix : 120,
    stock : 1,
    description : "Jolie colonne en bois brut (pin). Inspirée de mes boites lumineuses, elle se décline comme un lampadaire, pour un très beau jeu de lumières sur les murs et meubles autour d'elle. Via sa grande ampoule, fournie, elle éclaire aussi bien en bas qu'en haut de la colonne.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L19003-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L19003.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/L19003-2.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "L'Elégante",
    category : "lampes en bois flotté",
    prix : 90,
    description : "Une lampe très élégante qui n'est plus en vente.",
    couleurs : [],
    stock : 0,
    livraison : true,
    images : [
      {
        url: '/images/L19001.jpg',
        aspectRatio: 'portrait'
      }
      ]
  },
  {
    nom : "Flammes dansantes",
    category : "lampes en bois flotté",
    prix : 55,
    stock : 1,
    description : "Posée contre un mur, elle jouera avec ses ombres pour donner une ambiance chaleureuse à votre intérieur.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18044.jpg',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/L18044-1.jpg',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/L18044-2.jpg',
        aspectRatio: 'portrait'
      },
    ]
  },
  {
    nom : "Lampe de sol en bois flotté",
    category : "lampadaires",
    prix : 55,
    description : "De taille intermédiaire entre un lampadaire et une lampe à poser, cette jolie lampe de sol donnera une atmosphère chaleureuse à votre pièce. Idéale contre un mur pour un jeu d'ombres et de lumières.",
    stock : 2,
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18042.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18042-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18042-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    description : "Des bois flottés originaux, travaillés par les éléments forment cette lampe à poser du plus bel effet. Le rustique des bois flottés mis en scène pour une lampe moderne. Abat-jour fabriqué en France, trois coloris (blanc, taupe ou bleu) au choix. Patins sous le socle. Finitions soignées.",
    stock : 3,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    livraison : true,
    images : [
      {
        url: '/images/L18038.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18038-1.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/L18038-2.jpg',
        aspectRatio: "portrait"
      },
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    description : "Jolie lampe à poser en bois flottés. Originale par ses bois, sa structure, cette lampe à un air de sculpture moderne. Parfaite pour votre bureau. Abat-jour fabriqué en France sur mesure, trois coloris au chois (blanc, bleu, taupe). Patins sous le socle. Finitions soignées.",
    stock : 5,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    livraison : true,
    images : [
      {
        url: '/images/L18037.jpg',
        aspectRatio: "paysage"

      },
      {
        url: '/images/L18037-1.jpg',
        aspectRatio: "paysage"

      },
      {
        url: '/images/L18037-2.jpg',
        aspectRatio: "paysage"

      }
    ]
  },
  {
    
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    description : "Jolie lampe en bois flottés, aux forme épurées. Abat-jour fabriqué en France sur mesure, trois coloris au choix. Modèle unique.",
    stock : 1,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    livraison : true,
    images : [
      {
        url: '/images/L18027.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18027-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18027-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 95,
    stock : 1,
    description : "Tels des cristaux, ces bois flottés donnent une allure minérale à cette lampe. Abat-jour carré fabriqué en France sur mesure. Un seul coloris possible. Finitions soignées. Pièce unique.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18029.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18029-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18029-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Ca va trancher!",
    category : "lampes en bois flotté",
    prix : 80,
    stock : 3,
    description : "Lampe originale en bois flotté. Ou plutôt en tranche de bois flotté! Idéale comme lampe de chevet, seule ou avec son double de l'autre coté du lit. Abat-jour cubique, fabriqué en France sur mesure. Finitions soignées.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18023.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18023-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18023-2.jpg',
        aspectRatio: "portrait"
      },
    ]
  },
  {  
    nom : "Lampe à poser",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 5,
    description : "Un belle lampe à poser.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18004.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 95,
    stock : 1,
    description : "Jolie lampe à poser où des bois flottés dansent autour du pied de lampe. Abat-jour carré fabriqué en France sur mesure. Finitions soignées. Modèle unique.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18006.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18006-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18006-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Double",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 1,
    description : "Lampe en bois flotté. Celui-ci tel le cours d'eau où je l'ai trouvé se divise en deux. Câbles électriques non visibles. Abat-jours rond fabriqués en France. Plusieurs coloris au choix : blanc, taupe, bleu, crème. Combinaison de couleur selon votre choix. Modèle unique.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18008.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18008-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18008-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 3,
    description : "Jolie lampe aux bois flotté très découpés, aériens, donnant un air de structure artistique à l'ensemble. Abat-jour rectangulaire fabriqué en France sur mesure, trois coloris au choix. Finitions soignées. Modèle unique.",
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    livraison : true,
    images : [
      {
        url: '/images/L18009.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18009-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18009-2.jpg',
        aspectRatio: "paysage"
      }
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 3,
    description : "Lampe à poser sur socle en bois brut. Pied de lampe en métal. Abat-jour rectangulaire fabriqué en France sur mesure. Trois coloris au choix.",
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    livraison : true,
    images : [
      {
        url: '/images/L18011.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18011-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18011-2.jpg',
        aspectRatio: "paysage"
      },
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 50,
    stock : 1,
    description : "Simple et efficace ! Lampe en bois flotté, créant un jeu de lumière et d'ombres par projection sur les murs ou meubles avoisinants.",
    couleurs : [],
    livraison : true,
    images : [
      {
        url: '/images/L18012.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18012-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L18012-2.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "L'Eléphant",
    category : "lampes en bois flotté",
    prix : 105,
    stock : 1,
    livraison : true,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    description : "Parfois les éléments naturels se rapprochent de notre imagination, et nous offrent des bois flottés aux formes étonnantes. Abat-jour rectangulaire fabriqué sur mesure en France. Trois coloris d'abat-jour au choix. Modèle unique.",
    images : [
      {
        url: '/images/L19002.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L19002(1).jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/L19002(2).jpg',
        aspectRatio: "portrait"
      },
    ]
  },
  {
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 105,
    description : "Lampe en bois flottés selon une structure originale, donnant un mélange de style très réussi. Abat-jour rectangulaire fabriqué en France sur mesure. Trois coloris au choix. Modèle unique.",
    stock : 1,
    livraison : true,
    couleurs : ['beige', 'blanc', 'bleu-clair'],
    images : [
      {
        url: '/images/L18014-1.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/L18014.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/L18014-2.jpg',
        aspectRatio: "portrait"
      }
    ]
  },
  {
    nom : "Le chevron flotté",
    category : "lampes en bois flotté",
    prix : 105,
    description : "Lampe qui n'est plus en vente.",
    stock : 0,
    couleurs : [],
    images : [
      {
        url: '/images/le-chevron-flotte.jpg',
        aspectRatio: "portrait"
      }
      ],
    livraison : true,
  },
  {
    
    nom : "L'Hydre",
    category : "lampes en bois flotté",
    prix : 155,
    stock : 1,
    couleurs : [],
    description : 'Modèle original de lampe à trois têtes! Issue de la mythologie? Non, cette lampe est bien réelle. Cables non visibles, finitions soignées. Les abats-jours sont fabriqués en France. Modèle unique.',
    images : [
      {
        url: '/images/l-hydre.jpg', 
        aspectRatio: "portrait"
      },
      {
        url: '/images/l-hydre1.jpg', 
        aspectRatio: "portrait"
      },
      {
        url: '/images/l-hydre2.jpg', 
        aspectRatio: "paysage"
      }
    ],
    livraison : true,
  },
  {
    nom : "Casque ailé",
    category : "lampes en bois flotté",
    prix : 120,
    stock : 1,
    livraison : true,
    couleurs : [],
    description : "Jolie lampe de bureau en bois flotté, aux formes originales, laissant libre court à l'imagination. Personnellement je vois dans le premier bois l'aile du casque d'Astérix ! Si si, regardez bien ! Abat-jour fabriqué sur mesure en France. Cable non visible. Finitions soignées. Pièce unique.",
    images : [
      {
        url: '/images/casque-aile.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/casque-aile1.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/casque-aile2.jpg',
        aspectRatio: "paysage"
      },
    ]
  },
  {
    nom : "Lampadaire en bois flotté",
    category : "lampadaires",
    prix : 95,
    stock : 1,
    description : "Un lampadaire en bois flotté très original. Une véritable sculpture lumineuse. Des bois aux formes découpées et aériennes surmontent un socle colonne, équipé d'un spot. La lumière venant du bas, elle créée avec les bois un très beau jeu de lumières et d'ombres projetés sur les murs environnants. Pièce unique. Socle fabriqué par mes soins. Ampoule spot fournie.",
    couleurs : [],
    images : [
      {
        url: '/images/lampadaire-en-bois-flotte(1).jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/lampadaire-en-bois-flotte2-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/lampadaire-en-bois-flotte2-2.jpg',
        aspectRatio: "portrait"
      },
    ],
    livraison : false
  },
  {
   
    nom : "Lampadaire en bois flotté",
    category : "lampadaires",
    prix : 95,
    description : "Un lampadaire en bois flotté très original. Une véritable sculpture lumineuse. Des bois aux formes découpées et aériennes surmontent un socle colonne, équipé d'un spot. La lumière venant du bas, elle créée avec les bois un très beau jeu de lumières et d'ombres projetés sur les murs environnants. Pièce unique. Socle fabriqué par mes soins. Ampoule spot fournie.",
    stock : 1,
    couleurs : [],
    images : [
      {
        url: '/images/lampadaire-en-bois-flotte.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/lampadaire-en-bois-flotte-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/lampadaire-en-bois-flotte-2.jpg',
        aspectRatio: "portrait"
      }
    ],
    livraison : false
  },
  {
    nom : "PVC étoilé",
    category : "lampes en bois brut et autres",
    prix : 40,
    description : "Recyclage ! Tube PVC recyclé pour faire une jolie lampe d'ambiance moderne. Et oui, d'un simple et moche tuyau en PVC on peut obtenir un résultat plutôt sympa ! Comme d'habitude, socles faits \"maison\". Ampoule fournie.",
    stock : 1,
    couleurs : [],
    images : [
      {
        url: '/images/lampe-en-pvc-recycle.jpg',
        aspectRatio: "paysage"
      },
      {
        url: '/images/lampe-en-pvc-recycle-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/lampe-en-pvc-recycle-2.jpg',
        aspectRatio: "portrait"
      }
    ],
    livraison : true,
  },
  {
    
    nom : "Lampe en bois flotté",
    category : "lampes en bois flotté",
    prix : 95,
    description : "Un bois qui vous tend les bras!",
    stock : 1,
    couleurs : [],
    images : [
      {
        url: '/images/lampe-en-bois-flotte.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/lampe-en-bois-flotte-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/lampe-en-bois-flotte-2.jpg',
        aspectRatio: "portrait"
      }
    ],
    livraison : true,
  },

  {
    nom : "Conifère flotté",
    category : "lampadaires",
    prix : 105,
    description : "Lampadaire de caractère ! Pourquoi de caractère ? De par son pied en bois de conifère, qui a gardé ses caractéristiques et qui a été légèrement poli par son trajet dans l'eau, il ne s'est pas laissé percer facilement le bougre! Les mèches ont fumé... Câble non visible, abat-jour made in France. Interrupteur à tirette. Triple socle pour assurer une totale stabilité.",
    stock : 1,
    couleurs : [],
    images : [
      {
        url: '/images/conifere-flotte.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/conifere-flotte-1.jpg',
        aspectRatio: "portrait"
      },
      {
        url: '/images/conifere-flotte-2.jpg',
        aspectRatio: "portrait"
      },
    ],
    livraison : false,
  },

]

export default products