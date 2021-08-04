import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {


  
  constructor() { }

authenticate(username:string,password:string):boolean{
    
   
  if(username==="sina" && password!=""){
    
    sessionStorage.setItem('authenticateduser',username);
    
    return true;
  }else{
    return false;
  }
}

isuserloggedin(){
    let user=sessionStorage.getItem('authenticateduser');
    return !(user===null)
}

logout(){
  sessionStorage.removeItem('authenticateduser');
}


}
