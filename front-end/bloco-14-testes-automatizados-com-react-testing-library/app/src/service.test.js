const nomequeeuquero = require('./service')

describe('numeros aleatorios', ()=> {
  it('requisito 1', ()=> {
    nomequeeuquero.numberaleatorio = jest.fn().mockReturnValue(10); // obrigando a funcao me retornar um valor
    nomequeeuquero.numberaleatorio();
    expect(nomequeeuquero.numberaleatorio).toHaveBeenCalled(); //ver se a funcao foi chamada
    expect(nomequeeuquero.numberaleatorio()).toBe(10); // ve se retorna 10
    expect( nomequeeuquero.numberaleatorio).toHaveBeenCalledTimes(2); // ve quantas vezes a funcao foi chamada
  })
  test('requisito 2', ()=> {
    nomequeeuquero.numberaleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(nomequeeuquero.numberaleatorio(20,5)).toBe(4); 
  })
  it('requisito 3', ()=> {
    nomequeeuquero.numberaleatorio = jest.fn().mockImplementation((a,b,c) => a*b*c);
    expect(nomequeeuquero.numberaleatorio(2,5,3)).toBe(30);
    nomequeeuquero.numberaleatorio.mockReset();
    nomequeeuquero.numberaleatorio = jest.fn().mockImplementation((a) => a*2);
    expect(nomequeeuquero.numberaleatorio(6)).toBe(12);
  })
})
