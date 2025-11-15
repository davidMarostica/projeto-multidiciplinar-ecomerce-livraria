export class RegrasNegocioService {
    
    public static calcularDescontoProgressivo(valorTotal: number): number {
        if (valorTotal > 500) return 15;
        if (valorTotal > 200) return 10;
        if (valorTotal > 100) return 5;
        return 0;
    }
}