const { expect } = require('chai');
const fs = require('fs');
const leArquivo = require('./leArquivo');
const sinon = require('sinon');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('LeArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs,'readFileSync').returns(CONTEUDO_DO_ARQUIVO);

    });
    after(() => {
      fs.readFileSync.restore();
    })

    describe('a resposta', () => {
      

      it('É uma string', () => {
        const resposta = leArquivo('arquivo.txt');
        expect(resposta).to.be.a('string');

      });
      it('é igual ao conteudo do arquivo', ()=> {
        const resposta = leArquivo('arquivo.txt');
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });
});

describe('Quando o arquivo não existe', () => {
before(() => {
  sinon
  .stub(fs,'readFileSync')
  .throws(new Error('Arquivo não encontrado'));
});

after(() => {
  fs.readFileSync.restore();
})


  describe('a reposta', ()=> {
    it('É igual a "null"',() => {
      const reposta = leArquivo('arquivo_que_nao_existe.txt');
      expect(reposta).to.be.equal(null);
    });
  });
});