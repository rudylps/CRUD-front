import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Affaire } from './Affaire';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AffaireServiceService {

  constructor(private api: ApiService, private http: HttpClient) { }

  selectedAffaire: Affaire = new Affaire();
  id = this.selectedAffaire.id;
  
  create(affaire: Affaire): Observable<Affaire> {
    return this.api.createAffaire(affaire);
  }

  getAffaires(listeAffaire: Affaire[]): Observable<Affaire[]> {
    return this.api.listerAffaires();
  }

  getAffaire(id: number): Observable<Affaire> {
    return this.api.afficherAffaire(id);
  }

  deleteAffaire(id: number): Observable<Affaire> {
    return this.api.supprimerAffaire(id);
  }

  updateAffaire( affaire: Affaire): Observable<Affaire> {
    return this.http.put<Affaire>('http://localhost:8080/affaire/edit/' + affaire.id, affaire,httpOptions) as Observable<Affaire>; // Paramètres (URL , et le body de la requete)
  }

  

}
