import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe("Pruebas en desetructuracion", () => {

  test('debe retornar un string y un numbero', () => {
      
    const [letras, numeros] = retornaArreglo();
    
     console.log(typeof numeros)

     expect(letras).toBe( 'ABC');
     expect (typeof letras ).toBe("string");
     
     expect(numeros).toBe(123);
     expect (typeof numeros ).toBe("number");

  })
  


})