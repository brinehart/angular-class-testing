import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularClassTesting';

  constructor(
    private charactersService: CharactersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters();
  }
}
