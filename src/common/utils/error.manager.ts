
import { HttpException, HttpStatus } from "@nestjs/common";

// El type es el key del  enum HttpStatus (el cual tiene muchos atributos, su nombre es el key y su valor es un numero de status code)
export class ErrorManager extends Error {
  constructor ({type, message}:{type: keyof typeof HttpStatus, message: string}) {
    super(`${type} ::  ${message}`)
  }

  // Con "public static" me aseguro de no tener que instanciar la clase para llamar a la fn
  public static createSignatureError(message: string){
    const name = message.split(' :: ')[0]
    if (name) {
      throw new HttpException(message, HttpStatus[name])
    } else {
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}