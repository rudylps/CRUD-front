import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { AffaireServiceService } from '../affaire-service.service';
import { Affaire } from '../Affaire';

@Component({
  selector: 'app-add-affaire',
  templateUrl: './add-affaire.component.html',
  styleUrls: ['./add-affaire.component.css']
})
export class AddAffaireComponent implements OnInit {

  affaire: Affaire = new Affaire();
  editing: boolean;

  constructor(private affaireService:AffaireServiceService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    //const lastFragment = this.route.snapshot.url[this.route.snapshot.url.length - 1]; //Récupère le dernier élément du tableau de chemin URL
    
   
     //this.editing=false;
     //this.affaire.id=0,
     //this.affaire.nom=''
     //this.affaire.date_cloture='',
     //this.affaire.date_creation='',
     //this.affaire.lieu='',
     //this.affaire.rapport=''
    }
  


  onsubmit(form:NgForm) {
    this.affaireService.create(this.affaire).subscribe(
      () => this.router.navigate(['/affaires'])
    );
}

   //showSnack(affaire) {
   //    this.snackBar.open(`${this.editing ? 'Updated' : 'created' } affaire`, 'opération réussie' , { duration: 1000 }); // 2. Afficher un message de confirmation de ma mise a jour

   //setTimeout ( ()  => {
   //this.router.navigateByUrl(''); // Retourne sur le lien suivant: liste des users
   //},1000);
   //}

}
