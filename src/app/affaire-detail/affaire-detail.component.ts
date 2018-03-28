import { Component, OnInit } from '@angular/core';
import { Affaire } from '../Affaire';
import { NgForm, FormsModule } from '@angular/forms';
import { AffaireServiceService } from '../affaire-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-affaire-detail',
  templateUrl: './affaire-detail.component.html',
  styleUrls: ['./affaire-detail.component.css']
})
export class AffaireDetailComponent implements OnInit {
  id:string;
  affaire = new Affaire();

  constructor(private affaireService: AffaireServiceService, 
              private router: Router,
              private apiService: ApiService,
              private route: ActivatedRoute) { }

  //Initiatisation du composant
  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
    const affaireIdAsInt = parseInt(this.id, 10);

    
    this.affaireService
      .getAffaire(affaireIdAsInt)
      .subscribe(
         affaire => (this.affaire = affaire),
      );
    });

  }

  // Suppression de l'affaire
  deleteAffaire() {
    this.affaireService.deleteAffaire(this.affaire.id).subscribe(
      () => this.router.navigate(['/affaires'])  //Redirige vers la route "/affaires" à l'aide d'un callBack
    );
  }

  // Mise à jour affaire
  updateAffaire(affaire:Affaire) {
    this.affaireService.updateAffaire(this.affaire).subscribe(
      () => this.router.navigate(['/affaires'])
    );
  }

}
