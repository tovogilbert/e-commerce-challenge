import { Router } from "express";
import { registerParticulier, registerEntreprise, getParticulier, getEntreprise, listParticuliers, listEntreprises, updateParticulier, updateEntreprise, deleteClient } from "../controllers/ClientController";

const router = Router();

// === Création ===
router.post("/particulier", (req, res, next) => {
  registerParticulier(req, res).catch(next);
});
router.post("/entreprise", (req, res, next) => {
  registerEntreprise(req, res).catch(next);
});

// === Lecture individuelle ===
router.get("/particulier/:id", (req, res, next) => {
  getParticulier(req, res).catch(next);
});
router.get("/entreprise/:id", (req, res, next) => {
  getEntreprise(req, res).catch(next);
});

// === Lecture en liste ===
router.get("/particuliers", (req, res, next) => {
  listParticuliers(req, res).catch(next);
});
router.get("/entreprises", (req, res, next) => {
  listEntreprises(req, res).catch(next);
});

// === Mise à jour ===
router.put("/particulier/:id", (req, res, next) => {
  updateParticulier(req, res).catch(next);
});
router.put("/entreprise/:id", (req, res, next) => {
  updateEntreprise(req, res).catch(next);
});

// === Suppression ===
router.delete("/:id", (req, res, next) => {
  deleteClient(req, res).catch(next);
});

export default router;