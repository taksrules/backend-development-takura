import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, TableForeignKey } from 'typeorm';
export enum Status{
  ACTIVE="ACTIVE",
  ARCHIEVED="ARCHIVED",
  INACTIVE="INACTIVE"
}
export enum User_type {
  
  ARCHIEVED = "OTHER",
  INACTIVE = "EMPLOYEE",
  ADMIN = "ADMIN"
}

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  @Column({default:null })
  firstname:string;
  @Column({default:null })
  lastname:string;




  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({type:'enum',enum:Status, default: Status.ACTIVE})
  status:Status;
  @Column({type:'enum',enum:User_type, default: User_type.ADMIN})
  user_type:User_type;
  @CreateDateColumn({type:'timestamptz'})
  createdAT:Date;
  @CreateDateColumn({type:'timestamptz', default:()=>'NOW()'})
  updatedAT:Date;
}