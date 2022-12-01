import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from '../services/dbservice.service';
import { AutenthicationService } from '../services/autenthication.service';
import { HomeService } from './HOME.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
picks=[]
  constructor(private homeService : HomeService,private router: Router,public dbtaskService: DbserviceService,public authenticationSerive:AutenthicationService) {
    
  }

  
  /**
   * Función que permite navegar entre componentes
   * mediante la URL
   * @param $event 
   */
   ngOnInit() {
    this.picks =  this.homeService.getPicks()
   }
   goToUser(){
     this.router.navigate(['/userlist'])
   }

  
 
  logout(){
    this.authenticationSerive.logout();
  }
}


