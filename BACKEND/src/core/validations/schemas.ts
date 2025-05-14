import * as yup from 'yup';

yup.setLocale({
  mixed: {
    "required": '${path} est obligatoire',
    "notType": '${path} doit être de type ${type}'
  },
  string: {
    "email": '${path} doit être un email valide',
    "min": '${path} doit contenir au moins ${min} caractères',
    "max": '${path} ne doit pas dépasser ${max} caractères',
    "matches": '${path} est invalide'
  },
  number: {
    "min": '${path} doit être supérieur ou égal à ${min}',
    "max": '${path} doit être inférieur ou égal à ${max}',
    "positive": '${path} doit être positif'
  },
  array: {
    "min": '${path} doit contenir au moins ${min} élément(s)'
  }
});

export const ClientSchemas = {
  particulier: yup.object().shape({
    "firstName": yup.string().min(2).max(50).required().label('Prénom'),
    "lastName": yup.string().min(2).max(50).required().label('Nom'),
    "email": yup.string().email().required().label('Email'),
    "telephone": yup.string().matches(/^[0-9]{10}$/).required().label('Téléphone'),
    "adresse": yup.string().min(5).max(200).required().label('Adresse')
  }),

  entreprise: yup.object().shape({
    "companyName": yup.string().min(2).max(100).required().label('Nom de l\'entreprise'),
    "nif": yup.string().matches(/^[0-9]{10,15}$/).required().label('NIF'),
    "stat": yup.string().min(3).max(20).required().label('STAT'),
    "email": yup.string().email().required().label('Email'),
    "telephone": yup.string().matches(/^[0-9]{10}$/).required().label('Téléphone'),
    "adresse": yup.string().min(5).max(200).required().label('Adresse')
  })
};

export const ProductSchemas = {
  base: yup.object().shape({
    "nomProd": yup.string().required().label('Nom du produit'),
    "descriptionProd": yup.string().nullable().label('Description'),
    "prixHt": yup.number().positive().required().label('Prix HT'),
    "qteStock": yup.number().integer().min(0).required().label('Quantité en stock'),
    "couleurs": yup.array().min(1).required().label('Couleurs'),
    "tailles": yup.array().min(1).required().label('Tailles')
  }),

  taille: yup.object().shape({
    "valeur": yup.string().required().label('Valeur de la taille')
  }),

  marque: yup.object().shape({
    "nomMarque": yup.string().required().label('Nom de la marque')
  }),

  couleur: yup.object().shape({
    "nomCouleur": yup.string().required().label('Nom de la couleur')
  }),

  categorie: yup.object().shape({
    "nomCtg": yup.string().required().label('Nom de la catégorie'),
    "description": yup.string().nullable().label('Description'),
    "imageCtg": yup.string().url().nullable().label('Image de la catégorie')
  })
};

export const OrderSchemas = {
  base: yup.object().shape({
    "statutCmd": yup.string().oneOf(['Non livrée', 'Livrée']).required().label('Statut'),
    "adresseLivraison": yup.string().required().label('Adresse de livraison'),
    "fraisDeLivraison": yup.number().min(0).required().label('Frais de livraison'),
    "produitsCommande": yup.array().min(1).required().label('Produits commandés')
  }),

  produitCommande: yup.object().shape({
    "qteCmd": yup.number().integer().min(1).required().label('Quantité'),
    "prixUnitaireHT": yup.number().positive().required().label('Prix unitaire')
  })
};

export const PaymentSchemas = {
  base: yup.object().shape({
    "montant": yup.number().positive().required().label('Montant'),
    "modePayment": yup.string().oneOf(['carte', 'paypal', 'virement']).required().label('Mode de paiement'),
    "refTransaction": yup.string().required().label('Référence')
  })
};

export const DeliverySchemas = {
  base: yup.object().shape({
    "modeDelivery": yup.string().required().label('Mode de livraison'),
    "nameLivreur": yup.string().required().label('Nom du livreur'),
    "dateDelivery": yup.date().max(new Date()).required().label('Date de livraison')
  })
};