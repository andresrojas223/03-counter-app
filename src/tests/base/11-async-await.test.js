import { getImagen } from "../../base-pruebas/11-async-await"

describe("Pruebas con async-waity fetch ", () => {


   test('debe de retornar el url de la imagen', async() => {
        
       const url = await getImagen()

      expect (typeof url).toBe("string")

   })
   

})