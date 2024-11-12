import { Component, OnInit, signal, NgZone } from '@angular/core';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { EnComponent } from "./en/en.component";
import { CommonModule } from '@angular/common';
import { PtComponent } from "./pt/pt.component";
import { DeComponent } from "./de/de.component";
import { GetInTouchComponent } from "./get-in-touch/get-in-touch.component";
import { WindowComponent } from "./window/window.component";
import { DragDropModule } from "@angular/cdk/drag-drop"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [LanguageSelectorComponent, 
            EnComponent, 
            CommonModule, 
            PtComponent, 
            DeComponent, 
            GetInTouchComponent, 
            WindowComponent,
            DragDropModule
          ],
})
export class AppComponent implements OnInit {

  title = 'personal-portfolio-frontend';

  greeting = ''
  langSettings = ''
  appearanceSettings = ''
  helpSettings = ''
  aboutSettings = ''
  networkSettings = ''

  greetingEnglish = 'Hey there, I am '
  greetingPortuguese = 'Olá, eu sou o '
  greetingGerman = 'Hallöchen, ich bin '

  name = 'Leandro Filipe Lourenço Carvalho'
  
  selectedLanguage = signal('EN')
  selectedSettingsMenu = "lang"

  isSettingsOpen = false;

  ngOnInit(): void {
    this.updateTexts()
  }

  public handleLanguageChange(language: string) {
    this.selectedLanguage.set(language)
    this.updateTexts()
  }

  public updateTexts() {
    this.greeting = this.getTitle()
    this.langSettings = this.getLangSettingsTitle()
    this.aboutSettings = this.getAboutSettingsTitle()
    this.appearanceSettings = this.getAppearanceSettingsTitle()
    this.helpSettings = this.getHelpSettingsTitle()
    this.networkSettings = this.getNetworkSettingsTitle()

    this.getInitLanguage()
  }

  public getInitLanguage() {
    var valInStore = localStorage.getItem('lang')

    if (valInStore) {
      this.selectedLanguage = signal(valInStore)
    }
  }

  public openSettings() {
    this.isSettingsOpen = true
  }

  public handleCloseEvent(close: string) {
    if (close == "close") {
      this.isSettingsOpen = false
    }
  }

  public openLangSettings () {
    this.selectedSettingsMenu = 'lang';
  }

  public openAppSettings () {
    this.selectedSettingsMenu = 'app';
  }

  public openNetSettings () {
    this.selectedSettingsMenu = 'net';
  }

  public openHelpSettings () {
    this.selectedSettingsMenu = 'help';
  }

  public openAboutSettings () {
    this.selectedSettingsMenu = 'about';
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

  public getLangSettingsTitle() {
    switch(this.selectedLanguage()) {
      case 'EN': {
        return "Language & Region";
      }
      case 'PT': {
        return "Idioma e Região"
      }
      case 'DE': {
        return "Sprache und Region"
      }
      default: {
        return "Language & Region";
      }
    }
  }

  public getAppearanceSettingsTitle() {
    switch(this.selectedLanguage()) {
      case 'EN': {
        return "Appearance";
      }
      case 'PT': {
        return "Personalização"
      }
      case 'DE': {
        return "Aussehen"
      }
      default: {
        return "Appearance";
      }
    }
  }

  public getNetworkSettingsTitle() {
    switch(this.selectedLanguage()) {
      case 'EN': {
        return "Network";
      }
      case 'PT': {
        return "Rede"
      }
      case 'DE': {
        return "Netzwerk"
      }
      default: {
        return "Network";
      }
    }
  }

  public getHelpSettingsTitle() {
    switch(this.selectedLanguage()) {
      case 'EN': {
        return "Help";
      }
      case 'PT': {
        return "Ajuda"
      }
      case 'DE': {
        return "Hilfe"
      }
      default: {
        return "Help";
      }
    }
  }

  public getAboutSettingsTitle() {
    switch(this.selectedLanguage()) {
      case 'EN': {
        return "About";
      }
      case 'PT': {
        return "Sobre"
      }
      case 'DE': {
        return "Info"
      }
      default: {
        return "About";
      }
    }
  }
}
