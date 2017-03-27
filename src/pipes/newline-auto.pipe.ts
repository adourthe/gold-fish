import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'newlineauto'})
export class NewLineAuto implements PipeTransform {

    transform(text: string, maxLineLength: number): string {
        console.log(text);
        let words = text.split(' ');
        let lines = [];
        let actualLine = "";
        while (words.length > 0) {
            let newWordLength = words[0].length;
            if (actualLine.length > 0) {
                newWordLength += 1;
            }

            if (actualLine.length + newWordLength > maxLineLength) {
                lines.push(actualLine);
                actualLine = "";
            }else{
                if (actualLine.length > 0) {
                    words[0] = ' ' + words[0];
                }
                actualLine += words.shift();
            }
        }
        lines.push(actualLine);
        return lines.join('<br/>');
    }

}