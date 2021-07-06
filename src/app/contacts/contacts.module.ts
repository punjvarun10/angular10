import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';



@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    ListContactsComponent,
    DeleteContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
