import { Request, Response } from "express";
import { CreateParticularClientDTO } from "../dtos/requests/CreateParticularClient.dto";
import { CreateBusinessClientDTO } from "../dtos/requests/CreateBusinessClient.dto";
import { UpdateClientDTO } from "../dtos/requests/UpdateClient.dto";
import { ClientRepository } from "../../repositories/ClientRepository";
import { CreateParticularClient } from "../../../core/usecases/client/CreateParticularClient";
import { CreateBusinessClient } from "../../../core/usecases/client/CreateBusinessClient";
import { GetClient } from "../../../core/usecases/client/GetClient";
import { ListClients } from "../../../core/usecases/client/ListClients";
import { UpdateClient } from "../../../core/usecases/client/UpdateClient";
import { DeleteClient } from "../../../core/usecases/client/DeleteClient";
import { ClientMapper } from "../mappers/ClientMapper";
import { BusinessClient } from "../../../core/entities/client/BusinessClient";
import { ParticularClient } from "../../../core/entities/client/ParticularClient";

const clientRepo = new ClientRepository();

// In your ClientController.ts
export const registerParticulier = async (req: Request, res: Response) => {
  try {
    const dto: CreateParticularClientDTO = req.body;
    const useCase = new CreateParticularClient(clientRepo);
    const client = await useCase.execute(dto);
    return res.status(201).json(ClientMapper.toDTO(client));
  } catch (err: any) {
    
  }
};

export const registerEntreprise = async (req: Request, res: Response) => {
  try {
    const dto: CreateBusinessClientDTO = req.body;
    const useCase = new CreateBusinessClient(clientRepo);
    const client = await useCase.execute(dto);
    return res.status(201).json(ClientMapper.toDTO(client));
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const getParticulier = async (req: Request, res: Response) => {
  try {
    const useCase = new GetClient(clientRepo);
    const client = await useCase.execute(req.params.id);
    if (client.getClientType() !== "particulier") {
      return res.status(404).json({ error: "Client non trouvé" });
    }
    return res.json(ClientMapper.toDTO(client));
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
};

export const getEntreprise = async (req: Request, res: Response) => {
  try {
    const useCase = new GetClient(clientRepo);
    const client = await useCase.execute(req.params.id);
    if (client.getClientType() !== "entreprise") {
      return res.status(404).json({ error: "Client non trouvé" });
    }
    return res.json(ClientMapper.toDTO(client));
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
};

export const listParticuliers = async (_req: Request, res: Response) => {
  try {
    const useCase = new ListClients(clientRepo);
    const clients = await useCase.getAllParticuliers();
    return res.json(clients.map(ClientMapper.toDTO));
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const listEntreprises = async (_req: Request, res: Response) => {
  try {
    const useCase = new ListClients(clientRepo);
    const clients = await useCase.getAllEntreprises();
    return res.json(clients.map(ClientMapper.toDTO));
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateParticulier = async (req: Request, res: Response) => {
  try {
    const getClient = new GetClient(clientRepo);
    const existing = await getClient.execute(req.params.id);
    if (existing.getClientType() !== "particulier") {
      return res.status(400).json({ error: "Type de client invalide" });
    }

    const dto: UpdateClientDTO = req.body;
    const client = existing as ParticularClient;

    if (dto.firstName) client.firstName = dto.firstName;
    if (dto.lastName) client.lastName = dto.lastName;
    if (dto.email) client.email = dto.email;
    if (dto.telephone) client.telephone = dto.telephone;
    if (dto.adresse) client.adresse = dto.adresse;

    const update = new UpdateClient(clientRepo);
    await update.execute(client);

    return res.json(ClientMapper.toDTO(client));
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const updateEntreprise = async (req: Request, res: Response) => {
  try {
    const getClient = new GetClient(clientRepo);
    const existing = await getClient.execute(req.params.id);
    if (existing.getClientType() !== "entreprise") {
      return res.status(400).json({ error: "Type de client invalide" });
    }

    const dto: UpdateClientDTO = req.body;
    const client = existing as BusinessClient;

    if (dto.companyName) client.companyName = dto.companyName;
    if (dto.nif) client.nif = dto.nif;
    if (dto.stat) client.stat = dto.stat;
    if (dto.email) client.email = dto.email;
    if (dto.telephone) client.telephone = dto.telephone;
    if (dto.adresse) client.adresse = dto.adresse;

    const update = new UpdateClient(clientRepo);
    await update.execute(client);

    return res.json(ClientMapper.toDTO(client));
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const useCase = new DeleteClient(clientRepo);
    await useCase.execute(req.params.id);
    return res.status(204).send();
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

