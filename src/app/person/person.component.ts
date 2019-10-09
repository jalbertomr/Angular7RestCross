import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personas:string[];

  constructor( private httpClientService:HttpClientService ) { }

  ngOnInit() {
    this.httpClientService.getPersonas().subscribe( 
      response => this.handleSuccessfulResponse( response ));
  }

  handleSuccessfulResponse(response)
  {
    this.personas=response;
  }
}
