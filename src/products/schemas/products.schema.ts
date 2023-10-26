
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/categories/entities/category.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true, versionKey: false })
export class Product {

  @Prop({ required: [true, 'El nombre del producto es requerido para guardarse en la base de datos.'] })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true, type: Types.ObjectId, ref: Category.name })
  category: Category
}

export const ProductSchema = SchemaFactory.createForClass(Product);