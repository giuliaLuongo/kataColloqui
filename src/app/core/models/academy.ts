import {Students} from "./student";
import {Teachers} from "./teacher";

export interface Academy {
      "id": number,
      "title": string,
      "backTech": string,
      "frontTech": string,
      "teachers": Teachers,
      "students": Students
}
