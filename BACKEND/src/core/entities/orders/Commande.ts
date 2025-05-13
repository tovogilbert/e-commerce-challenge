import { Client } from "../client/Client";
import { ProduitCommande } from "./ProductCommande";
import { Payment } from "../payment/Payment";

export class Commande {
  constructor(
    public readonly idCommande: number,
    public client: Client,
    public dateCommande: Date = new Date(),
    public statutCmd: 'Non livrée' | 'Livrée' = 'Non livrée',
    public adresseLivraison: string,
    public fraisDeLivraison: number,
    public adresseFacturation: string,
    public payement: Payment,
    public montantRemise: number,
    public totalHt: number,
    public montantTaxe: number,
    public totalTtc: number,
    public produitsCommande: ProduitCommande[] = [],
  ) {}
}
