import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
contacts:FirebaseListObservable<any> ;
contact:FirebaseListObservable<any> ;
id=[1];
  constructor(private af:AngularFire) {
   }

 
  ngOnInit() {
  this.contacts= this.af.database.list('/Contacts/');
   }

   onAdd()
   {   this.contacts.push( {
       name:"bala",
       email:"bala@gmail.com",
       message:"Hi bala here"
     })
   }
   
}


