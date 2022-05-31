export default {
  message: 'Bonjour',
  components: {
    experience: {
      price: 'A partir de {n}€ par personne',
    },
    account: {
      client: {
        reservations: {
          footer: {
            download: 'Mon E-ticket',
            review: 'Donner mon avis !',
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
