export default {
  message: 'Bonjour',
  error: {
    oops: 'Flûte !',
    help: 'Centre d\'aide',
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
    home: {
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
      creation: {
        attributes: {
          types: "Choisissez le type de l'experience parmi la liste",
          languages: 'Choisissez 3 languages',
          groupSize: 'Indiquez le nombre de personne maximum',
          theme: 'Choissisez 3 thèmes maximum parmi la liste',
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
          title: "CHOIX DE L'EXPERIENCE",
          subtitle: 'Choisissez votre expérience',
          date_input: 'CHOIX DE LA DATE',
          slot_input: 'CHOIX DU CRÉNEAU',
          validate: 'VALIDER',
        },
      },
    },
    account: {
      client: {
        reservations: {
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
        reservations: {
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
          reservations:
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
        reservation: 'Mes reservations',
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
