import {Message} from "./message";

export class TextMessage implements Message {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    getPlainText = function () {
        return this.text;
    }
}
