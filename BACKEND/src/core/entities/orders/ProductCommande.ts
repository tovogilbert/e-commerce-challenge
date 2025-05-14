import { Product } from "../product/Product";
import { Taille } from "../product/Taille";
import { Couleur } from "../product/Couleur";
import { Commande } from "./Commande";

export class ProductCommande {
  constructor(
    public readonly idDetail: number,
    public commande: Commande,
    public product: Product,
    public qteCmd: number,
    public prixUnitaireHT: number,
    public taille: Taille,
    public couleur: Couleur
  ) {}
}
