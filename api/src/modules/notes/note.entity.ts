import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('notes')
export class Note extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    text: string

    @Column('timestamp')
    created_at: Timestamp
}