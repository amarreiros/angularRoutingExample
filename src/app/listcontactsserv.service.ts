import { Injectable } from '@angular/core';
import {Contact} from './contact';
@Injectable({
  providedIn: 'root'
})
export class ListcontactsservService {

  constructor() { }

  getallContacts():Contact[]{
    let lista:Contact[] = [
      {name:'Alex',phone: '966210103',email : 'amarreiros@hjh.pt',id: 1, active:true},
      {name:'Ilidio',phone: '966970103',email : 'ilidio@hjh.pt',id: 1, active:true},
      {name:'Sara',phone: '966210103',email : 'amarreiros@hjh.pt',id: 1, active:false},
      {name:'Rui',phone: '966970103',email : 'ilidio@hjh.pt',id: 1, active:true},
    ];

    return lista;
  }
}
