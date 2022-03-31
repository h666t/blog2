import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';
import {Blog} from './Blog';
import {Comment} from './Comment';
@Entity()
@Unique(['username'])
export class BlogSystemUser {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    unique: true,
  })
  username: string | undefined;

  @Column()
  password_digest: string | undefined;

  @CreateDateColumn()
  create_at: Date | undefined

  @UpdateDateColumn()
  update_at: Date | undefined

  @OneToMany(() => Blog, (blog) => blog.author)
  blogs: Blog[] | undefined

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[] | undefined

}
