import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
  standalone: true,
  imports: [FormsModule, NgFor]
})
export class LanguageSelectorComponent implements OnInit {

  @Output() languageMessageEvent = new EventEmitter()
  @Input() currentLanguage = 'EN'
  selectedLanguage: string | null = this.currentLanguage
  languages: string[] = ['EN', 'PT', 'DE']

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang')
    console.log(localStorage.getItem('lang'))
    console.log('initiated')
  }

  public sendNewLanguage(language: string) {
    this.languageMessageEvent.emit(language)
    localStorage.setItem('lang', language)
    this.selectedLanguage = language
  }

}
