const { expect } = require("@jest/globals");

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test("Testando uppercase",(done) => {
      uppercase('lucas',(str) =>{
          try{
              expect(str).toBe('LUCAS');
              done();
          } catch (error){
              done(error);
          }
      })
  })