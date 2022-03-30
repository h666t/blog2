import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {BlogSystemUser} from './BlogSystemUser';
import {Blog} from './Blog';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  user_id: number | undefined | null;

  @ManyToOne(() => BlogSystemUser, (user) => user.comments)
  @JoinColumn({name: 'user_id'})
  user: BlogSystemUser | undefined;

  @Column()
  blog_id: number | undefined | null;
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
