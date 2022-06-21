const { expect } = require('chai');
const calculaSituacao = require('./calculaSituacao');

describe('Quando media for menor que 7', ()=>{
  it('Retorna "Reprovado"', () => {
    const resposta = calculaSituacao(4);
    expect(resposta).to.be.equals('reprovado');
  });
});

describe('quando a média for maior que 7', ()=>{
  it('returna "aprovação"', () => {
    const resposta = calculaSituacao(8);
    expect(resposta).to.be.equals('aprovado');
  })
})

describe('quando a media foi igual a 7', () =>{
  it('Retorna aprovado', ()=>{
    const resposta = calculaSituacao(7);
    expect(resposta).to.be.equals('aprovado');
  })
})
