import { Cachorro, Gato } from '../src/animais';

describe('Testes com Animais implementando a mesma interface', () => {

  it('deve instanciar um Cachorro, alterar atributos e testar o método da interface', () => {
    const cachorro = new Cachorro('Rex', 'Labrador', 'Grande');
    expect(cachorro.emitirSom()).toBe('Rex (Labrador): Au au!');

    cachorro.raca = 'Vira-lata';
    expect(cachorro.emitirSom()).toBe('Rex (Vira-lata): Au au!');
  });

  it('deve instanciar um Gato, alterar atributos e testar o método da interface', () => {
    const gato = new Gato('Mimi', 'Curta', 'Verde');
    expect(gato.emitirSom()).toBe('Mimi (pelagem Curta): Miau!');

    gato.pelagem = 'Longa';
    gato.nome = 'Garfield';
    expect(gato.emitirSom()).toBe('Garfield (pelagem Longa): Miau!');
  });

});