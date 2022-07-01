export default {
  message: 'Bonjour',
  error: {
    oops: 'Flûte !',
    help: "Centre d'aide",
    404: 'Erreur 404',
    home: 'Page d’accueil',
    description: `Nous sommes désolés mais la page que vous recherchez semble malheureusement introuvable…
Vous pouvez revenir à la page d’accueil ou accéder au centre d’aide. `,
  },
  common: {
    validate: 'Valider',
    add: 'Ajouter',
    delete: 'Supprimer',
  },
  components: {
    guide: {
      background: 'Son parcours et ses spécialités',
      abstract: {
        workExperiences: 'Formation et expérience',
        specialties: 'Spécialités',
        languages: 'Langues',
        interests: 'Centres d’intérêts',
      },
    },
    booking: {
      success: {
        title: 'Merci pour votre réservation !',
        text: `Vous et tous les participants inscrits à cette expérience culturelle allez recevoir un mail contenant votre récapitulatif de réservation, votre facture ainsi que vos billets.

Toutes ces informations sont également accessibles sur votre compte dans l’onglet mes réservations.

Votre guide rentrera en contact directement avec vous par le mail rattaché à votre compte ou sur votre numéro de téléphone si besoin

Si vous avez la moindre question, n’hésitez pas à contacter votre guide ou à nous écrire à l’adresse suivante : contact@museeup.com`,
        account: 'Retrouvez votre e-ticket',
      },
    },
    contact: {
      faq: {
        title: 'Centre d’aide',
      },
      contact: {
        staffing: {
          title: '🚀  Rejoignez notre équipe !',
          description: `Vous voulez rejoindre l’aventure Musée Up’ ? Envoyez-nous votre candidature à l’adresse suivante :`,
        },
        support: {
          title: 'Support client',
          description: `Besoin d’aide ? Notre service client vous répondra aussi vite que possible sur les réseaux sociaux et à l’adresse suivante : `,
        },
        press: {
          title: '📝   Presse et influenceurs',
          description: `Vous êtes journalistes ou influenceurs et notre projet vous intéresse ? Envoyez-nous un message à l’adresse suivante :`,
        },
      },
    },
    home: {
      experiences: {
        title: 'Découvrez des expériences uniques',
      },
      partnership: {
        title: 'Nos soutiens et partenaires',
      },
      navbar: {
        register: {
          button: "S'enregistrer",
          title: 'Inscription',
          firstname: 'Prénom',
          lastname: 'Nom',
          email: 'Email',
          password: 'Mot de passe',
          close: 'Fermer',
          submit: "S'enregistrer",
          description: '*indicates required field',
        },
        login: {
          button: 'Me connecter',
          title: 'Bienvenue sur Musée up',
          password: 'Mot de passe',
          close: 'Fermer',
          login: 'Se connecter',
          email: 'Email',
        },
        userActions: {
          client: 'Compte Client',
          guide: 'Compte Guide',
          logout: 'Se déconnecter',
        },
        visitorActions: {
          help: 'Aide',
          contact: 'Nous contacter',
          becomeGuide: "Devenez guide Musée'up",
        },
      },
    },
    experience: {
      price: 'A partir de {n}€ par personne',
      booking: {
        summary: 'Récapitulatif',
        submit: 'Valider et payer'
      },
      creation: {
        attributes: {
          types: "Choisissez le type de l'experience parmi la liste",
          languages: 'Choisissez 3 languages',
          groupSize: 'Indiquez le nombre de personne maximum',
          themes: 'Choissisez 3 thèmes maximum parmi la liste',
        },
        thresholdPicker: {
          title: 'Montant/Nbr. de personnes min.',
        },
        template: {
          incomplete: 'Incomplète',
          title:
            'Indiquez le titre de votre expérience (maximum 40 caractères espaces compris)',
          description: {
            title: "Présentation de l'experience",
            input:
              'Ecrivez-ici la présentation de votre expérience. (maximum 700 caractères espaces compris).',
          },
        },
        pricePicker: {
          title: 'À partir de {price}€ par personne',
          item: {
            title: 'Adultes',
            description: '18 ans et plus',
          },
        },
      },
      calendar: {
        form: {
          button: 'Ajouter une expérience',
          title: "Choix de l'experience",
          subtitle: 'Choisissez votre expérience',
          date_input: 'Choix de la date',
          slot_input: 'Choix du créneau',
          validate: 'Valider',
        },
      },
    },
    account: {
      client: {
        bookings: {
          review: {
            title: 'Votre avis compte beaucoup pour nous !',
            description:
              'Notez et donnez votre avis sur votre expérience et votre guide du',
          },
          footer: {
            download: 'Mon E-ticket',
            review: {
              button: 'Donner mon avis',
              title: 'Votre avis compte beaucoup pour nous !',
              description:
                ' Notez et donnez votre avis sur votre experience et votre guide du ',
              comment: 'Écrivez votre commentaire ici',
              cancel: 'Annuler',
              submit: 'Envoyer',
            },
            address: 'Obtenir l’itinéraire Google Maps',
            print: 'Imprimer ma réservation',
            receipt: 'Mon reçu',
          },
          cancel: {
            title: 'Conditions d’annulation',
            detail: 'En savoir plus',
            action: 'Annuler',
          },
          reference: {
            title: 'Numéro de réservation',
          },
          group: {
            title: 'Mon groupe',
            action: 'Afficher le détail',
          },
          address: {
            title: 'Lieu de rendez-vous',
          },
          attributes: {
            title: 'Date, horaires et tarifs',
            price: 'Total  : {total}€ TTC, soit {unit}€ par personne',
          },
          guide: {
            title: 'Mon guide',
            action: 'Afficher son profil',
          },
          experience: {
            title: 'Ma réservation',
            action: 'Afficher l’expérience',
          },
        },
      },
      guide: {
        profile: {
          headline: 'Titre de votre profil (visible en dehors de votre profil)',
          description:
            'Description de votre profil (visible en dehors de votre profil)',
          background:
            'Ecrivez un texte explicatifs de votre parcours et vos spécialités',
          favoritePlace:
            'Son lieu préféré : indiquez-ici un de vos endroits favoris',
        },
        resume: {
          lastname: 'Nom',
          firstname: 'Prénom',
          birthday: 'Date de naissance',
          mail: 'Addresse mail',
          address: 'Addresse Postale',
          phone: 'Téléphone',
          password: 'Mot de passe',
        },
      },
    },
  },
  pages: {
    about: {
      title: 'Qui sommes-nous ?',
      description:
        'Musée Up’, c’est avant tout une vision : participer à l’émergence d’un tourisme éthique, responsable et durable à l’opposé d’un tourisme de masse et impersonnel. Cette idée vient d’un constat : les guides-conférenciers et les clients ont dû mal à se connecter alors que le numérique peut faciliter les contacts d’un bout à l’autre du monde. Musée Up’, la marketplace de la culture, veut faciliter leur rencontre.',
      detail: 'En savoir plus',
      demo: 'Regarder notre démo',
      history: {
        title: 'Notre Histoire',
        description: `Chez Musée Up’, notre ambition est de révolutionner la médiation culturelle et de participer à l’émergence d’un tourisme durable et responsable qui prend en compte l’enjeu fondamental de la sauvegarde du patrimoine.
<br/><br/>
En découvrant les nombreuses difficultés de la sœur de Lucile, guide-conférencière pourtant sortie de la prestigieuse École du Louvre à Paris, et le manque de repères des clients face à une offre culturelle complexe, Alexandre et Lucile ont imaginé Musée Up’
<br/><br/>
Jean les a ensuite rejoint dans l’aventure et ont tous les 3 conçu ce projet à partir de mars 2020, aidés par Assas Lab’, Pépite France, 42 et Station F.  
<br/><br/>
Le résultat ? Musée Up’, la marketplace de la culture qui met en relation les meilleurs guides-conférenciers et le public et propose toute sorte d’expériences culturelles réservables en quelques clics.`,
      },
      stats: {
        woman:
          'des guides-conférenciers sont des femmes et subissent ces problèmes',
        consider: 'des guides-conférenciers songent à changer de métier',
        salary: 'des guides-conférenciers gagnent moins de 1500€ brut par mois',
        numeric:
          'du public souhaite une offre culturelle plus numérisée et simple',
        various:
          'du public veut une offre culturelle plus personnalisée et variée',
      },
      why: {
        title: 'Pourquoi Musée Up’ ?',
        description: `🏰Avec Musée Up’, on a une grande ambition : contribuer à la sauvegarde du patrimoine et aider ceux qui nous le font découvrir le mieux les guides-conférenciers ! C’est avec vous, les futurs utilisateurs que nous y parviendrons !
<br/><br/>
❔ Quand la sœur de notre associée Lucile, pourtant diplômée de la célèbre Ecole du Louvre, nous a raconté tous les problèmes que peuvent rencontrer les guides-conférenciers et leurs clients au quotidien, on s’est dit qu’on pouvait trouver une solution. Et cette solution, on a voulu l’associer à un autre enjeu éthique, la sauvegarde de nos vieilles pierres. 
<br/><br/>
📲💻Notre solution : @Musée Up’, la marketplace de la culture qui permet de réserver toutes sortes d’expériences culturelles avec un guide-conférencier de qualité tout en contribuant à la sauvegarde du patrimoine ! 
<br/><br/>
🌿L’objectif ultime : faire émerger un tourisme responsable et durable tout en favorisant à l’accès à la culture pour tous et partout 🙂`,
      },
      values: {
        title: 'Nos valeurs',
        cards: {
          ethics: {
            title: 'Un tourisme éthique, durable et responsable',
            description: `Chez Musée Up', on a une grande ambition : contribuer à la sauvegarde du patrimoine et aider ceux qui nous le font découvrir le mieux les guides-conférenciers ! Avec Musée Up', contribuons ensemble pour un tourisme éthique, durable et responsable !`,
          },
          protection: {
            title: 'Protection, Découverte, Partage, Innovation',
            description: `La culture est une richesse à partager. Les expériences culturelles disponibles sur Musée Up' sont d'excellentes occasion pour vous retrouver en famille, entre amis ou entre collègue pour passer un moment convivial et inoubliable.`,
          },
          expertise: {
            title: 'Découvrez avec de véritables experts',
            description: `Nous avons sélectionné les meilleurs guides-conférenciers et experts certifiés pour vous faire (re)découvrir la culture et le patrimoine français de manière originale, ludique et éco-responsable. Rien de mieux pour passer une expérience immersive et de qualité !`,
          },
        },
      },
      team: {
        title: 'Notre équipe',
        description: `Musée Up’, c’est d’abord une jeune équipe complémentaire unie par une passion partagée pour la culture, l’histoire, l’art de notre pays et de ses territoires. Découvrez-nous ici !`,
        members: {
          alexandre: {
            name: 'Alexandre Vincent',
            title: 'CEO et co-fondateur',
            description:
              'Alex comme on le surnomme est le couteau-suisse de l’équipe. En plus de s’occuper du développement commercial et de l’offre, ce thésard passionné par l’histoire, le courant romantique et l’écologie gère aussi une partie de la communication.',
          },
          lucile: {
            name: 'Lucile Doiteau',
            title: 'CCO et co-fondatrice',
            description: `Cette amoureuse de la culture gère toute la communication du projet. De par son esprit créatif, son statut de benjamine et le fait qu’elle soit l’unique esprit féminin de l’équipe, elle incarne la fraîcheur mais aussi le dynamisme de Musée Up’ !`,
          },
          jean: {
            name: 'Jean Ollivier',
            title: 'COO et co-fondateur',
            description: `Ce passionné de lecture et de nature s’initie pour les besoins de Musée Up’ aux joies de l’économie, du marketing et de la gestion. Globe-trotteur de l’équipe, il aime découvrir de nouvelles cultures autant que partager la sienne.`,
          },
        },
      },
      heritage: {
        title: 'Avec Musée Up’, sauvons le patrimoine français !',
        description: `Musée Up’ s’engage pour la sauvegarde du patrimoine. Par des actions de mécénat, des fonds reversés sur notre chiffre d’affaire et des expériences culturelles consacrées à la découverte et au sauvetage d’un monument en péril ou méconnus, Musée Up’ s’inscrit dans la logique d’un tourisme éthique, durable et responsable.`,
        buttons: {
          details: 'En savoir plus',
          list: 'Découverte et sauvetage',
        },
      },
      pbooking: {
        title: 'La sauvegarde du patrimoine en action',
        description: 'C’est la garantie de vivre des expériences culturelles…',
        cards: {
          discovery: {
            title: 'Découverte et sauvetage',
            description: `Par des expériences culturelles uniques dédiées à la découverte et au sauvetage de monuments menacés. Chaque réservation contribuera directement à la sauvegarde de notre patrimoine !🏰`,
          },
          patronage: {
            title: 'Mécénat et restauration',
            description: `Chaque année, Musée Up' reversa une partie de son chiffre d'affaires à des fondations et des associations du patrimoine pour préserver les richesses incroyables de notre pays ! 🌿`,
          },
          awareness: {
            title: 'Sensibilisation du public',
            description: `Musée Up' et ses guides sont engagés afin de sensibiliser au maximum le grand public à l'enjeu social et culturel que représente la sauvegarde du patrimoine. Une chance mais aussi un devoir ! 🍀`,
          },
        },
      },
      bookings: {
        title: "Réserver ou créer avec Musée Up'",
        description: 'C’est la garantie de vivre des expériences culturelles…',
        cols: [
          {
            title: 'Uniques et personnalisées',
            description: `Faciles et rapides à réserver, les expériences sont personnalisables pour s’adapter au mieux à vos envies. Avec l’option sur mesure, créez-la du début à la fin !`,
          },
          {
            title: 'Avec les meilleurs experts',
            description: `Les guides-conférenciers sont certifiés et sélectionnés pour vous faire découvrir la culture et le patrimoine français de manière originale, ludique et éco-responsable.`,
          },
          {
            title: 'De sauver le patrimoine',
            description: `Vivre une expérience avec Musée Up’, c’est contribuer en même temps à la sauvegarde du patrimoine !`,
          },
        ],
      },
    },
    account: {
      client: {
        payment: {
          card: {
            action: 'Ajouter un moyen de paiement',
            title: 'Mon mode de versement',
            text: 'Pour recevoir vos paiements, merci de nous indiquer ci-dessous vos coordonnées bancaires.',
          },
          title: 'Mes paiements',
          description:
            'Vous retrouverez ici vos modes de paiements. Payez et communiquez toujours par l’intermédiaire de Musée Up’ pour bénéficier de la protection proposée par nos services. En savoir plus.',
        },
        bookings: {
          id: {
            summary: 'Récapitulatif',
            title: 'Votre réservation le',
            description: [
              'Merci pour votre réservation ! Vous retrouverez ci-dessous toutes les',
              'informations',
              'dont vous avez besoin pour ',
              'votre expérience culturelle avec Musée Up’ ! ',
            ],
          },
          title: 'Mes réservations',
          description:
            'Vous retrouverez ici vos réservations et toutes les informations dont vous avez besoin pour profiter au mieux de vos expériences culturelles avec Musée Up’ !',
        },
        navigation_profile: 'Mon profile',
        navigation_help: 'Assistance et politique juridique',
        navigation_help2: 'Aide et contact',
        cards: {
          info: 'Gérez ici vos informations utiles et indiquez-nous vos contacts pour pouvoir vous joindre très facilement !',
          bookings:
            'Vous retrouverez ici vos réservations d’expériences et toutes les informations utiles, des contacts de votre guide au lieu de rencontre !',
          favorites:
            'Vous pourrez consulter ici tous vos favoris, expériences, guides et articles pour pouvoir les retrouver quand vous le souhaitez !',
          help: 'Vous pourrez retrouver ici des recommandations d’expériences culturelles choisies par nos soins selon vos goûts et vos favoris !',
        },
        help: "Besoin d'aide ?",
        general_conditions: 'Conditions générales',
        privacy: 'Confidentialité',
        headline:
          'Gérez vos informations personnelles et vos réservations très facilement et retrouvez tout ce dont vous avez besoin pour profiter au mieux des services Musée Up’ en toute sérénité !',
        info: 'Mes informations',
        booking: 'Mes réservations',
        messages: 'Mes messages',
        favorites: 'Mes favoris',
        friends: 'Ma famille, mes amis',
        payments: 'Mes paiements',
      },
      guide: {
        dashboard: 'Tableau de bord',
        experiences: 'Mes annonces',
        calendar: 'Mon agenda',
        messages: 'Mes messages',
        account: 'Mon Compte',
        publish: 'Publier une annonce',
      },
    },
    experiences: {
      n_visite: "Jusqu'a {n} personnes (visite partagée)",
    },
    guides: {
      reserve: 'Réserver',
      create: 'Créer avec elle',
    },
  },
}
