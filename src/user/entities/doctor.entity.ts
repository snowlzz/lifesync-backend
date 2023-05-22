import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: 'doctor'})
export class DoctorEntity{

    

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: "name", nullable: false})
    name: string;

    @Column({name: "email", nullable: false})
    email: string;

    @Column({name: "crm", nullable: false})
    crm: string;

    @Column({name: "phone"})
    phone: string;

    @Column({name: "pacients", nullable: false, default: "[]"})
    pacients: string[];

    
    

    

}