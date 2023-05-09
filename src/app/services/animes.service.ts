import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, collectionGroup, getDoc, updateDoc } from '@angular/fire/firestore';
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

  getAnime(id: string): Observable<Anime> {
    const animeRef = doc(this.firebase, 'animes', id);
    return new Observable<Anime>(observer => {
      getDoc(animeRef).then(doc => {
        if (doc.exists()) {
          const anime = doc.data() as Anime;
          observer.next(anime)
        } else {
          observer.error('Anime não encontrado')
        }
      }).catch(error => observer.error(error))
    })

  }

  updateAnime(id: string, anime: Anime) {
    const animeRef = collection(this.firebase, 'animes');
    const document = doc(animeRef, `animes/${id}`)
    updateDoc(document, { anime })

  }
}
