
import { Routes, RouterModule} from '@angular/router';

import { ListpersonalcontactsComponent } from './listpersonalcontacts/listpersonalcontacts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DummyComponent } from './dummy/dummy.component';




const routes: Routes = [
  { path: 'lista', component: ListpersonalcontactsComponent},
  { path: '', redirectTo: '/lista' , pathMatch: 'full'}

];

export const AppRoutingModule  = RouterModule.forRoot(routes);
