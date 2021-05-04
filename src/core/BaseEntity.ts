import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';

abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  readonly created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updated_at: Date;
}

export { BaseEntity };
