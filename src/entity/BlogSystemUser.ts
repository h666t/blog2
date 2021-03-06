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
import 'reflect-metadata';

import {AppDataSource} from '../data-source';
import md5 from 'md5';

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
  create_at: Date | undefined;

  @UpdateDateColumn()
  update_at: Date | undefined;

  @OneToMany('Blog', 'author')
  blogs: Blog[] | undefined;

  @OneToMany('Comment', 'user')
  comments: Comment[] | undefined;

  // =================================================================================================
  error = '';
  password = '';
  password_for_confirm = '';

  async validate() {
    if (!this.username) {
      this.error = '用户名为空';
    } else if (!this.password) {
      this.error = '密码为空';
    } else if (!this.password_for_confirm) {
      this.error = '确认密码为空';
    } else if (this.username.length > 100) {
      this.error = '用户名太长，超过100个字';
    } else if (this.password !== this.password_for_confirm) {
      this.error = '两次密码不一致';
    } else if (this.password.length > 100) {
      this.error = '密码太长，超过100个字';
    }
    if (this.password !== this.password_for_confirm) {
      this.error = '密码不一致';
    }

    if (!this.error) {
      let {manager} = AppDataSource;
      let existUser = await manager.findBy('BlogSystemUser', {
        username: this.username
      });
      if (existUser && existUser.length > 0) {
        this.error = '用户名已存在';
      }
    }
    return this.error;
  };

  generatePasswordDigest() {
    this.password_digest = md5(this.password);
  }
}
