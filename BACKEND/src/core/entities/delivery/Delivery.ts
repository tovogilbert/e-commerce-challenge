import { Commande } from "../orders/Commande";

export class Delivery {
  constructor(
    public readonly idDelivery: number,
    public commande: Commande,
    public modeDelivery: string,
    public nameLivreur: string,
    public dateDelivery: Date = new Date()
  ) {}
}