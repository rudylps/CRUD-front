import { Component, OnInit } from '@angular/core';
import { Affaire } from '../Affaire';
import { AffaireServiceService } from '../affaire-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-affaires',
  templateUrl: './list-affaires.component.html',
  styleUrls: ['./list-affaires.component.css']
})
export class ListAffairesComponent implements OnInit {

  constructor(private affaireService:AffaireServiceService,
    private route:ActivatedRoute, private router:Router) { }

  listAffaires = new Array<Affaire>();

  ngOnInit() {
    this.affaireService.getAffaires(this.listAffaires).subscribe( (data: Affaire[]) => {
      this.listAffaires = data;
    });
  }

}
