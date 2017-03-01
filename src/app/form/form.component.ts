import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import {AngularFire} from 'angularfire2';
import {FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
contacts:FirebaseListObservable<any> ;

constructor(private af:AngularFire) {
   }

  ngOnInit() {
   this.contacts= this.af.database.list('/Contacts/');
  }

onAdd(formVal){

  console.log(formVal);
this.contacts.push( {
        email:formVal.emailId,
        message:formVal.comment,
        name: formVal.name,
     })

   }
onSubmit(form)
{ 
  this.onAdd(form.value);
 alert("Your message has been saved");
 
}

}
