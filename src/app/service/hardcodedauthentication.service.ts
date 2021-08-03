import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {


  
  constructor() { }

authenticate(username:string,password:string):boolean{
    
    console.log('before '+this.isuserloggedin())
  if(username==="sina" && password!=""){
    
    sessionStorage.setItem('authentuicateduser',username);
    console.log('after '+this.isuserloggedin())
    
    return true;
  }else{
    return false;
  }
}

isuserloggedin(){
    let user=sessionStorage.getItem('authentuicateduser');
    console.log(user+' ppppppppooooo')
    return !(user===null)
}


}
