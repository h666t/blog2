import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne, OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {BlogSystemUser} from './BlogSystemUser';
import {Comment} from './Comment'

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  title: string | undefined | null

  @Column()
  content: string | undefined | null;

  @ManyToOne(() => BlogSystemUser, (user) => user.blogs)
  @JoinColumn({name: 'author_id'})
  author: BlogSystemUser | undefined

  @OneToMany(type => Comment, comment => comment.blog)
  comments: Comment[] | undefined;

  @CreateDateColumn()
  create_at: Date | undefined

  @UpdateDateColumn()
  update_at: Date | undefined

  constructor(attr?: Omit<Blog, 'id'> ) {
    Object.assign(this, attr)
  }
}

