import { OrderSchemas } from "./schemas";
import { BusinessError } from "../../shared/errors/BusinessError";
import { Commande } from "../entities/orders/Commande";
import { ProductCommande } from "../entities/orders/ProductCommande";


export class OrderValidator {
  static validateCommande(data: Partial<Commande>): void {
    try {
      OrderSchemas.base.validateSync(data, { abortEarly: false });
    } catch (err) {
      throw new BusinessError(this.formatErrors(err));
    }
  }

  static validateProductCommande(data: Partial<ProductCommande>): void {
    try {
      OrderSchemas.produitCommande.validateSync(data, { abortEarly: false });
    } catch (err) {
      throw new BusinessError(this.formatErrors(err));
    }
  }

  private static formatErrors(err: any): string {
    return err.errors.join(', ');
  }
}