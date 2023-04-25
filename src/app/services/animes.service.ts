import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, collectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Anime } from '../model/anime';
import { doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private firebase: Firestore) { }

  getAnimes(): Observable<Anime[]> {
    const animeRef = collection(this.firebase, 'animes');
    return collectionData(animeRef, { idField: 'id' }) as Observable<Anime[]>
  }

  addAnime(anime: Anime) {
    const animeRef = collection(this.firebase, 'animes');
    return addDoc(animeRef, anime)
  }

  getAnime(id: string): Observable<Anime[]> {
    const animeRef = collection(this.firebase, 'animes');
    return collectionData(animeRef, { idField: id }) as Observable<Anime[]>
  }
}
