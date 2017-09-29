import {Message} from "./io/msg/message";
import {TextMessage} from "./io/msg/textMessage";

var tm: Message = new TextMessage("Jo jo");

console.log("Message with text: " + tm.getPlainText());
