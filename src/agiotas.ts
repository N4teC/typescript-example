export abstract class Agiota {
  constructor(public nome: string, public apelido: string) {}

  abstract calcularDividaFinal(valorInicial: number, meses: number): number;

  public static gerarRelatorioDeCobranca(agente: Agiota, valorInicial: number, meses: number): string {
    const divida = agente.calcularDividaFinal(valorInicial, meses);
    return `Relatório para ${agente.nome}, o "${agente.apelido}": a dívida final em ${meses} meses é de R$${divida.toFixed(2)}.`;
  }
}

export class Emprestador extends Agiota {
  public taxaJurosCompostos: number;

  constructor(nome: string, apelido: string, taxaJurosCompostos: number) {
    super(nome, apelido);
    this.taxaJurosCompostos = taxaJurosCompostos;
  }

  public calcularDividaFinal(valorInicial: number, meses: number): number {
    return valorInicial * Math.pow((1 + this.taxaJurosCompostos), meses);
  }
}

export class Cobrador extends Agiota {
  public taxaFixaMensal: number;
  public multaPorVisita: number;

  constructor(nome: string, apelido: string, taxaFixaMensal: number, multaPorVisita: number) {
    super(nome, apelido);
    this.taxaFixaMensal = taxaFixaMensal;
    this.multaPorVisita = multaPorVisita;
  }

  public calcularDividaFinal(valorInicial: number, meses: number): number {
    const visitas = Math.ceil(meses / 2);
    return valorInicial + (this.taxaFixaMensal * meses) + (this.multaPorVisita * visitas);
  }
}