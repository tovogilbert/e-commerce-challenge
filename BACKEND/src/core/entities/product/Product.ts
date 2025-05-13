import { Categorie } from "./Categorie";
import { Marque } from "./Marque";
import { Couleur } from "./Couleur";
import { Taille } from "./Taille";


export class Product{
    constructor(
        public readonly idProd: number,
        public nomProd: string,
        public descriptionProd: string,
        public prixHt: number,
        public marque: Marque,
        public imageProd: string,
        public qteStock: number,
        public categorie: Categorie,
        public couleurs: Couleur[],
        public tailles:Taille[]
    ){}
}