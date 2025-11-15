export abstract class EntidadeBase {
    constructor(public id: number) {}
    
    public getId(): number {
        return this.id;
    }
    
    public setId(id: number): void {
        this.id = id;
    }
    
    public abstract toString(): string;
}