import { Agiota, Emprestador, Cobrador } from '../src/agiotas';

describe('Testes com Agiotas herdando de uma classe abstrata', () => {

  it('deve testar o método estático com uma instância de Emprestador', () => {
    const emprestador = new Emprestador('Seu Zé', 'Mão de Ferro', 0.20);
    const relatorio = Agiota.gerarRelatorioDeCobranca(emprestador, 1000, 3);
    expect(relatorio).toBe('Relatório para Seu Zé, o "Mão de Ferro": a dívida final em 3 meses é de R$1728.00.');

    emprestador.taxaJurosCompostos = 0.25;
    const novoRelatorio = Agiota.gerarRelatorioDeCobranca(emprestador, 1000, 2);
    expect(novoRelatorio).toBe('Relatório para Seu Zé, o "Mão de Ferro": a dívida final em 2 meses é de R$1562.50.');
  });

  it('deve testar o método estático com uma instância de Cobrador', () => {
    const cobrador = new Cobrador('Tião', 'Carrasco', 100, 500);
    const relatorio = Agiota.gerarRelatorioDeCobranca(cobrador, 5000, 4);
    expect(relatorio).toBe('Relatório para Tião, o "Carrasco": a dívida final em 4 meses é de R$6400.00.');

    cobrador.multaPorVisita = 600;
    const novoRelatorio = Agiota.gerarRelatorioDeCobranca(cobrador, 5000, 4);
    expect(novoRelatorio).toBe('Relatório para Tião, o "Carrasco": a dívida final em 4 meses é de R$6600.00.');
  });

});