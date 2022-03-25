import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Blogs {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column() public title: string | undefined | null

  @Column()
  content: string | undefined | null;

  @Column()
  delete_date: number | undefined | null;

  constructor(attr?: Omit<Blogs, 'id'> ) {
    Object.assign(this, attr)
  }

}
