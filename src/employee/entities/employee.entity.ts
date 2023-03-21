import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    TableForeignKey,OneToMany, JoinColumn
  } from 'typeorm';
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    EmployeeID: string;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    email: string;
    @Column()
    dob: Date;
  
    @Column()
    phone: number;
    @Column()
    addresses: string;
    @Column()
    position: string;
    @Column()
    NationalID: string;
    @Column()
    IDType: string;
    @Column()
      joinDate:Date;
           
      createdBy:string;
    @CreateDateColumn() createdOn?: Date;
    @CreateDateColumn() updatedOn?: Date;
}
