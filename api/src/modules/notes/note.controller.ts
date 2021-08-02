import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { CreateNoteDTO } from "./dto/create-note.dto";
import { UpdateNoteDTO } from "./dto/update-note.dto";
import { NoteService } from "./note.service";

@Controller('notes')
export class NoteController {

    constructor(private noteService: NoteService){}

    @Get()
    index(){
        return this.noteService.index()
    }
    
    @Get(':id')
    get(
        @Param() params
    ){
        return this.noteService.get(params.id)
    }

    @Post()
    create(
        @Body(new ValidationPipe({errorHttpStatusCode: 422})) createNoteDTO: CreateNoteDTO
    ){
        return this.noteService.create(createNoteDTO)
    }

    @Put(':id')
    update(
        @Param() params,
        @Body(new ValidationPipe({errorHttpStatusCode: 422})) updateNoteDTO: UpdateNoteDTO
    ){
        return this.noteService.update(params.id, updateNoteDTO)
    }

    @Delete(':id')
    delete(
        @Param() params
    ){
        return this.noteService.delete(params.id)
    }
}