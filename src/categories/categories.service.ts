import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) {}


  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto)
  }

  // TODO: ¿Qué usamos acá el DTO o la clase Category de los schemas??
  async findAll(): Promise<CreateCategoryDto[]> {
    const categories: Category[] = await this.categoryModel.find().exec()

    // if((await categories).length) throw new NotFoundException('Category not found')
    if(categories.length === 0)
      throw new NotFoundException('There is no categories')

    return categories

  }

  async findOne(id: string) {
    const findedCategory = await this.categoryModel.findById(id)

    if(!findedCategory) throw new NotFoundException('Category not found')

    return findedCategory
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id)

    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {new: true})
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id)
  }
}
