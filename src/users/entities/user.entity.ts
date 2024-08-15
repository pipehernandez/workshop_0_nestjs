import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //Indica que la clase es una entidad de la base de datos, esto significa que se creará una tabla con los campos de la clase
export class User {
  @PrimaryGeneratedColumn() //Indica que el campo es una clave primaria y que se autogenera
  id: number;

  @Column() //Indica que el campo es una columna de la tabla
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true }) //Indica que el campo es una columna de la tabla y que por defecto es true
  isActive: boolean;
}
