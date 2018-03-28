import { Injectable } from '@angular/core';
import { Affaire } from './Affaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

   //Création d'une affaire
   createAffaire(affaire: Affaire): Observable<Affaire> {
    return this.http.post<Affaire>('http://localhost:8080/ajoutAffaire', affaire);
  }

  listerAffaires():Observable<Affaire[]> {
    return this.http.get<Affaire[]>('http://localhost:8080/affaires') as Observable<Affaire[]>;
  }

  afficherAffaire(id: number):Observable<Affaire> {
    return this.http.get<Affaire>('http://localhost:8080/affaire/' + id).pipe(delay(1000));
  }

  supprimerAffaire(id: number): Observable<Affaire> {
    return this.http.delete<Affaire>('http://localhost:8080/supprimeAffaires/' + id);
  }

 // modifierAffaire( affaire: Affaire): Observable<Affaire> {
 //   console.log(affaire.id);
  //  return this.http.put('http://localhost:8080/affaire/edit/' + affaire.id, affaire) as Observable<Affaire>; // Paramètres (URL , et le body de la requete)
  //}
}