import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

export enum ExerciseType {
  BARBELL,
  DUMBBELL,
  BODYWEIGHT,
  CARDIO,
}

@Entity("exercise")
export class ExerciseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false })
  hitChest: boolean;

  @Column({ nullable: false })
  hitLats: boolean;

  @Column({ nullable: false })
  hitUpperBack: boolean;

  @Column({ nullable: false })
  hitLowerBack: boolean;

  @Column({ nullable: false })
  hitShoulders: boolean;

  @Column({ nullable: false })
  hitQuads: boolean;

  @Column({ nullable: false })
  hitHamstrings: boolean;

  @Column({ nullable: false })
  hitBiceps: boolean;

  @Column({ nullable: false })
  hitTriceps: boolean;

  @Column({ nullable: false })
  hitForearms: boolean;

  @Column({ nullable: false })
  hitTraps: boolean;

  @Column({ nullable: false })
  hitGlutes: boolean;

  @Column({ nullable: false })
  exerciseType: ExerciseType;

  @Column()
  description: string;

  @Column({ nullable: false })
  createdByUserId: number;

  @Column({ nullable: false })
  shared: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
