import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'pacient'})
export class PacientEntity{
    
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: "name", nullable: false})
    name: string;

    @Column({name: "email", nullable: false})
    email: string;

    @Column({name: "cpf", nullable: false})
    cpf: string;

    @Column({name: "doctor", nullable: false}) 
    doctor: string;

    @Column({name: "appointments", nullable: false, default: "[]"})
    appointments: string[];

    @Column({name: "prescriptions", nullable: false, default: "[]"})
    prescriptions: string[];
}