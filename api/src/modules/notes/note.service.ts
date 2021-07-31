import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Note } from "./note.entity";

@Injectable()
export class NoteService{
    constructor(
        @InjectRepository(Note) private noteRepository: Repository<Note>
    ){}

    index(): Promise<Note[]>{
        return this.noteRepository.find();
    }
    
    async get(id: number): Promise<Note>{
        try{
            const note = await this.noteRepository.findOneOrFail(id);
            return note
        }catch(err){
            throw err
        }
    }

    create(noteData: Object): Promise<Note>{
        const note = this.noteRepository.create(noteData);
        return this.noteRepository.save(note)
    }

    async update(id: number, noteData: Object): Promise<Note>{
        const note = await this.get(id)
        Object.assign(note, noteData)
        return this.noteRepository.save(note)
    }

    async delete(id: number): Promise<Note>{
        const note = await this.get(id)
        const removedNote = await this.noteRepository.remove(note)
        return removedNote
    }
}