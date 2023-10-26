import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: any) {
    console.log(value)
    if (!isValidObjectId(value)) throw new BadRequestException(`${value} is not a valid ObjectId`)

    return value;
  }
}
