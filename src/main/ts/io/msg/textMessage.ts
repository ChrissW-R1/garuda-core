import {Message} from "./message";

export class TextMessage
	implements Message {
	public text: string;

	public constructor(text: string) {
		this.text = text;
	}

	public getPlainText() {
		return this.text;
	}
}
