import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from "rxjs/operators";
import { Character } from 'src/app/services/character.model';

export enum CharacterType {
  Bad = 'bad',
  Good = 'good',
  Support = 'support'
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private charactersSubject = new BehaviorSubject<Character[]>([]);
  private characters$ = this.charactersSubject.asObservable()

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('http://localhost:3000/characters').pipe(
      tap((characters: Character[]) => this.charactersSubject.next(characters))
    );
  }

  getGoodCharacters(): Observable<Character[]> {
    return this.characters$.pipe(
      map(characters => characters.filter(x => x.type === CharacterType.Good))
    )
  }

  getBadCharacters(): Observable<Character[]> {
    return this.characters$.pipe(
      map(characters => characters.filter(x => x.type === CharacterType.Good))
    )
  }

  getCharacters(): Observable<Character[]> {
    return this.characters$.pipe(
      map(characters => characters.filter(x => x.type === CharacterType.Good))
    )
  }
}
