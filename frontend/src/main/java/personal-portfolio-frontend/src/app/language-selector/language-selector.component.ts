import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
  standalone: true,
  imports: [FormsModule, NgFor]
})
export class LanguageSelectorComponent {

  @Output() languageMessageEvent = new EventEmitter()
  selectedLanguage: string = 'EN'
  languages: string[] = ['EN', 'PT', 'DE']

  public sendNewLanguage(language: string) {
    this.languageMessageEvent.emit(language)
  }

}
