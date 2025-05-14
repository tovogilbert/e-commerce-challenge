import { ProductSchemas } from "./schemas";
import { BusinessError } from "../../shared/errors/BusinessError";
import { Product } from "../entities/product/Product";
import { Taille } from "../entities/product/Taille";
import { Marque } from "../entities/product/Marque";
import { Couleur } from "../entities/product/Couleur";
import { Categorie } from "../entities/product/Categorie";

export class ProductValidator {
  static validateProduct(data: Partial<Product>): void {
    try {
      ProductSchemas.base.validateSync(data, { abortEarly: false });
    } catch (err) {
      throw new BusinessError(this.formatErrors(err));
    }
  }

  static validateTaille(data: Partial<Taille>): void {
    try {
      ProductSchemas.taille.validateSync(data, { abortEarly: false });
    } catch (err) {
      throw new BusinessError(this.formatErrors(err));
    }
  }

  static validateMarque(data: Partial<Marque>): void {
    try {
      ProductSchemas.marque.validateSync(data, { abortEarly: false });
    } catch (err) {
      throw new BusinessError(this.formatErrors(err));
    }
  }

  static validateCouleur(data: Partial<Couleur>): void {
    try {
      ProductSchemas.couleur.validateSync(data, { abortEarly: false });
    } catch (err) {
      throw new BusinessError(this.formatErrors(err));
    }
  }

  static validateCategorie(data: Partial<Categorie>): void {
    try {
      ProductSchemas.categorie.validateSync(data, { abortEarly: false });
    } catch (err) {
      throw new BusinessError(this.formatErrors(err));
    }
  }

  private static formatErrors(err: any): string {
    return err.errors.join(', ');
  }
}