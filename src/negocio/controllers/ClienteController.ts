import { Cliente } from '../models/Cliente';

export class ClienteController {
    private clientes: Map<number, Cliente> = new Map();
    private proximoId: number = 1;

    constructor() {
        this.inicializarDados();
    }

    private inicializarDados(): void {
        const clientesIniciais = [
            new Cliente(0, "Joao Silva", "joao@email.com", "11999999999", "Rua A, 123"),
            new Cliente(0, "Maria Santos", "maria@email.com", "11888888888", "Rua B, 456"),
            new Cliente(0, "Pedro Oliveira", "pedro@email.com", "11777777777", "Rua C, 789")
        ];

        clientesIniciais.forEach(cliente => {
            this.cadastrar(cliente);
        });
    }

    public cadastrar(cliente: Cliente): Cliente {
        cliente.setId(this.proximoId++);
        this.clientes.set(cliente.getId(), cliente);
        return cliente;
    }

    public buscarPorId(id: number): Cliente | null {
        return this.clientes.get(id) || null;
    }

    public listarTodos(): Cliente[] {
        return Array.from(this.clientes.values());
    }

    public getClientesAtivos(): Cliente[] {
        return this.listarTodos().filter(cliente => cliente.ativo);
    }
}