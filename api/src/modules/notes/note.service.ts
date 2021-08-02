import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateNoteDTO } from "./dto/create-note.dto";
import { UpdateNoteDTO } from "./dto/update-note.dto";
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

    create(createNoteDTO: CreateNoteDTO): Promise<Note>{
        const note = this.noteRepository.create(createNoteDTO);
        return this.noteRepository.save(note)
    }

    async update(id: number, updateNoteDTO: UpdateNoteDTO): Promise<Note>{
        const note = await this.get(id)
        Object.assign(note, updateNoteDTO)
        return this.noteRepository.save(note)
    }

    async delete(id: number): Promise<Note>{
        const note = await this.get(id)
        const removedNote = await this.noteRepository.remove(note)
        return removedNote
    }
}