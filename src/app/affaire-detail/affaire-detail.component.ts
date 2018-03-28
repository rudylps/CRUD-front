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

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
     const affaireIdAsInt = parseInt(this.id, 10);

      console.log('suspectId' + this.id);
      this.affaireService
       .getAffaire(affaireIdAsInt)
       .subscribe(
         affaire => (this.affaire = affaire),
      );
    });

  }

  deleteAffaire() {
    this.affaireService.deleteAffaire(this.affaire.id).subscribe(
      () => this.router.navigate(['/affaires'])
    );
  }

  updateAffaire(affaire:Affaire) {

    this.affaireService.updateAffaire(this.affaire).subscribe(
      () => this.router.navigate(['/affaires'])
    );
  }

}
