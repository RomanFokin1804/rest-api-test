import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'books' })
export class BookEntity extends Model {
  @Column
  title: string;

  @Column
  author: string;

  @Column
  count: number;
}
