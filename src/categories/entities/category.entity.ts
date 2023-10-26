
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>

@Schema({ timestamps: true, versionKey: false })
export class Category {
  @Prop({ required: [true, 'La categoría es requerida para guardarse en la base de datos.'] })
  category_name: string

  @Prop({ required: true })
  category_description: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)
