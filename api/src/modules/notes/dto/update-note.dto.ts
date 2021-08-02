import { IsNotEmpty, IsString } from "class-validator";

export class UpdateNoteDTO{
    @IsNotEmpty()
    @IsString()
    text: string
}