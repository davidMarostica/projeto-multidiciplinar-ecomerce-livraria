import { EntidadeBase } from '../models/EntidadeBase';
import { RepositoryInterface } from './RepositoryInterface';

export abstract class BaseRepository<T extends EntidadeBase> implements RepositoryInterface<T> {
    protected entidades: Map<number, T> = new Map();
    private proximoId: number = 1;

    public criar(entidade: T): T {
        entidade.setId(this.proximoId++);
        this.entidades.set(entidade.getId(), entidade);
        return entidade;
    }

    public buscarPorId(id: number): T | null {
        return this.entidades.get(id) || null;
    }

    public listarTodos(): T[] {
        return Array.from(this.entidades.values());
    }

    public atualizar(id: number, entidade: T): boolean {
        if (this.entidades.has(id)) {
            entidade.setId(id);
            this.entidades.set(id, entidade);
            return true;
        }
        return false;
    }

    public deletar(id: number): boolean {
        return this.entidades.delete(id);
    }

    public contar(): number {
        return this.entidades.size;
    }
}