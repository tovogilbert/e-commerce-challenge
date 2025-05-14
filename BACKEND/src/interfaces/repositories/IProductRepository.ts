import { Product } from "../../core/entities/product/Product";
import { Categorie } from "../../core/entities/product/Categorie";
import { Marque } from "../../core/entities/product/Marque";
import { Couleur } from "../../core/entities/product/Couleur";
import { Taille } from "../../core/entities/product/Taille";

export interface IProductRepository {
  // Enregistrer un produit
  save(product: Product): Promise<void>;

  // Trouver un produit par son identifiant
  findById(id: number): Promise<Product | null>;

  // Supprimer un produit
  delete(id: number): Promise<void>;

  // Mettre à jour un produit
  update(product: Product): Promise<void>;

  // Lister tous les produits
  findAll(): Promise<Product[]>;

  // Rechercher par catégorie
  findByCategorie(categorieId: number): Promise<Product[]>;

  // Rechercher par marque
  findByMarque(marqueId: number): Promise<Product[]>;

  // Rechercher par couleur
  findByCouleur(couleurId: number): Promise<Product[]>;

  // Rechercher par taille
  findByTaille(tailleId: number): Promise<Product[]>;

  // Gérer les entités associées
  findAllCategories(): Promise<Categorie[]>;
  findAllMarques(): Promise<Marque[]>;
  findAllCouleurs(): Promise<Couleur[]>;
  findAllTailles(): Promise<Taille[]>;
}
