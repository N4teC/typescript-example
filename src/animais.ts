export interface Animal {
  nome: string;
  emitirSom(): string;
}

export class Cachorro implements Animal {
  nome: string;
  raca: string;
  porte: string;

  constructor(nome: string, raca: string, porte: string) {
    this.nome = nome;
    this.raca = raca;
    this.porte = porte;
  }

  public emitirSom(): string {
    return `${this.nome} (${this.raca}): Au au!`;
  }
}

export class Gato implements Animal {
  nome: string;
  pelagem: string;
  corDosOlhos: string;

  constructor(nome: string, pelagem: string, corDosOlhos: string) {
    this.nome = nome;
    this.pelagem = pelagem;
    this.corDosOlhos = corDosOlhos;
  }

  public emitirSom(): string {
    return `${this.nome} (pelagem ${this.pelagem}): Miau!`;
  }
}