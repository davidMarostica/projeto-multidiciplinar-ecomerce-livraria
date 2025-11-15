import { EntidadeBase } from '../models/EntidadeBase';

export interface RepositoryInterface<T extends EntidadeBase> {
    criar(entidade: T): T;
    buscarPorId(id: number): T | null;
    listarTodos(): T[];
    atualizar(id: number, entidade: T): boolean;
    deletar(id: number): boolean;
}