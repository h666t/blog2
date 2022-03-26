import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {BlogUser} from './BlogUser';
import {Blog} from './Blog';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @ManyToOne(() => BlogUser, (user) => user.comments)
  @JoinColumn({name: 'user_id'})
  user: BlogUser | undefined;

  @ManyToOne(() => Blog, (blog) => blog.comments)
  @JoinColumn({name: 'blog_id'})
  blog: Blog | undefined;

  @Column()
  content: string | undefined;

  @CreateDateColumn()
  create_at: Date | undefined;

  @UpdateDateColumn()
  update_at: Date | undefined;
}
