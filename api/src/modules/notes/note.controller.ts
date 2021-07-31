import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
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
        @Body() body
    ){
        return this.noteService.create(body)
    }

    @Put(':id')
    update(
        @Param() params,
        @Body() body
    ){
        return this.noteService.update(params.id, body)
    }

    @Delete(':id')
    delete(
        @Param() params
    ){
        return this.noteService.delete(params.id)
    }
}