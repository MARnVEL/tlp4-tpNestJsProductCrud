/* import { Column, Entity, OneToMany } from 'typeorm';

import { ROLES } from '../../config/roles';
import { IUser } from '../../interfaces/user.interface';
import { BaseEntity } from '../../config/base.entity';
import { UsersProjectsEntity } from './usersProjects.entity';

@Entity({ name: 'products' })
export class ProductsEntity extends BaseEntity implements IProduct {

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @OneToMany(() => UsersProjectsEntity, (usersProjects) => usersProjects.user)
  projectsIncludes: UsersProjectsEntity[];

}
 */