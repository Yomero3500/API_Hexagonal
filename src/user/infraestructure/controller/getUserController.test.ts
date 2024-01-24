// Importa las dependencias necesarias para las pruebas
import { Request, Response } from "express";
import { GetUserUseCase } from "../../application/getUserUseCase";
import { GetUserController } from "./getUserController";

// Crea una prueba unitaria para el controlador GetUserController
describe("getUserController", () => {
  // Crea una prueba para el método run()
  it("debería devolver un usuario existente", async () => {
    // Crea un objeto simulado para Reqest y Response
    const req: Partial<Request> = {
      body: {
        id: 1, // ID del usuario que deseas buscar
      },
    };
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // Crea un objeto simulado para GetUserUseCase
    const getUserUseCase: Partial<GetUserUseCase> = {
      run: jest.fn().mockResolvedValue({
        name: "John",
        last_name: "Doe",
      }),
    };

    // Crea una instancia del controlador con los objetos simulados
    const controller = new GetUserController(getUserUseCase as GetUserUseCase);

    // Ejecuta el método run() del controlador
    await controller.run(req as Request, res as Response);

    // Verifica que se haya llamado a res.status() con el código 200
    expect(res.status).toHaveBeenCalledWith(200);

    // Verifica que se haya llamado a res.send() con los datos del usuario
    expect(res.send).toHaveBeenCalledWith({
      status: "success",
      data: {
        name: "John",
        last_name: "Doe",
      },
      message: "Usuario encontrado",
    });
  });
});