import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http : HttpClient) { }

  //metodos de pesquisas

  facilityKepler = "&where=pl_facility like 'Kepler'";
  facilityHubble = "&where=pl_facility like 'Hubble Space Telescope'";

  //Funções
  public obterExoplanetas(opcaoDeBusca: string){
    let url;
    let urlBase = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json";
    
    let methodDefaultFacilityDefault = urlBase;
    let facilityKeplerMethodDefault = urlBase + this.facilityKepler;
    let facilityHubbleMethodDefault = urlBase + this.facilityHubble;

    if(opcaoDeBusca=="default"){
      url = methodDefaultFacilityDefault;
      return this.http.get(url);
    }

    if(opcaoDeBusca=="facilityHubbleMethodDefault"){
      url = facilityHubbleMethodDefault;
      return this.http.get(url);
    }

    if(opcaoDeBusca=="facilityKeplerMethodDefault"){
      url = facilityKeplerMethodDefault;
      return this.http.get(url);
    }
   
    
  }

  public obterApod(dataEscolhida : string){
    let apiKey = "&api_key=8gABP2TgQ0uqWipePoCazd80Es6KKPzTIbTVuchc";
    
    let data = dataEscolhida;
    let url = "https://api.nasa.gov/planetary/apod?date=" + data + apiKey;
    

    return this.http.get(url);
  }
}
