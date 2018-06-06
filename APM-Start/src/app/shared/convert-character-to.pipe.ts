import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertCharacterTo'
})
export class ConvertCharacterToPipe implements PipeTransform {
    transform(value: string, currentCharacter: string, replaceCharacter: string):string {
        return value.replace(currentCharacter, replaceCharacter);
    }
}