import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { interval, map, take } from 'rxjs';
import { EnComponent } from "./en/en.component";
import { CommonModule } from '@angular/common';
import { PtComponent } from "./pt/pt.component";
import { DeComponent } from "./de/de.component";
import { GetInTouchComponent } from "./get-in-touch/get-in-touch.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [LanguageSelectorComponent, EnComponent, CommonModule, PtComponent, DeComponent, GetInTouchComponent]
})
export class AppComponent implements OnInit{

  title = 'personal-portfolio-frontend';

  greeting = ''

  greetingEnglish = 'Hey there, I am '
  greetingPortuguese = 'Olá, eu sou o '
  greetingGerman = 'Hallöchen, ich bin '

  name = 'Leandro Filipe Lourenço Carvalho'
  
  selectedLanguage = signal('EN')

  ngOnInit(): void {
    this.greeting = this.getTitle()
  }

  public handleLanguageChange(language: string) {
    this.selectedLanguage.set(language)
    this.greeting = this.getTitle()
    console.log(this.getTitle())
  }


  public getTitle() {
    switch(this.selectedLanguage()) {
      case 'EN': {
        return this.greetingEnglish;
      }
      case 'PT': {
        return this.greetingPortuguese
      }
      case 'DE': {
        return this.greetingGerman
      }
      default: {
        return this.greetingEnglish;
      }
    }
  }
}
