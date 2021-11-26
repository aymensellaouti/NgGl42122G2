import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger(message) {
    console.log('Logged From Logger Service :');
    console.log(message);
  }
};
