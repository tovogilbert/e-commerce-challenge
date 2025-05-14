import { IClientRepository } from "../../../interfaces/repositories/IClientRepository";
import { Client } from "../../entities/client/Client";
import { BusinessError } from "../../../shared/errors/BusinessError";

export class UpdateClient {
  constructor(private repo: IClientRepository) {}

  async execute(client: Client): Promise<void> {
    try {
      const existing = await this.repo.findById(client.id);
      if (!existing) {
        throw new BusinessError("Client non trouvé", {
          errorCode: "CLIENT_NOT_FOUND",
          details: [`ID: ${client.id}`]
        });
      }
      await this.repo.save(client);
    } catch (error) {
      if (error instanceof BusinessError) throw error;
      throw new BusinessError("Échec de la mise à jour du client", {
        errorCode: "CLIENT_UPDATE_FAILED",
        details: [error instanceof Error ? error.message : "Erreur inconnue"]
      });
    }
  }
}