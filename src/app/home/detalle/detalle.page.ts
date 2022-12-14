import { registerLocaleData } from '@angular/common';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inicio } from '../home.model';
import { HomeService } from '../home.service';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';



declare var google : any;
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
map:any 
@ViewChild ( 'map',   {read : ElementRef, static: false }  ) mapRef: ElementRef


inicio: Inicio


  constructor( private activatedRoute: ActivatedRoute, private homeService : HomeService, public geolocation:Geolocation ) { }

  ionViewDidenter(){
    this.showMap();
  }

  showMap(){
    const location =  new google.maps.LatLng(-17.824858,31.053028);
    const options = {
      center : location,
      zoom : 15,
      disableDefaultUI: true 

    }
    this.map = new google.maps.Map(this.mapRef.nativeElement. options); 
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {


      const recipeId = paramMap.get('pickId')
      

    })

}}
