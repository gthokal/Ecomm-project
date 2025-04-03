import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { user } from '../interfaces/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(private seller:SellerService, private router:Router){}

  showLogin= false;
  authError: string = '';

  ngOnInit(){
    this.seller.reloadSeller()
  }
 
  signUp(data:user){
    //console.log(data);
    this.seller.userSignUp(data);
  }
  login(data:user){
    this.authError='';
    //console.log(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not Correct";
      }
    })

  }

  openLogin(){
    this.showLogin= true;
  }
  openSignIn(){
    this.showLogin= false;
  }

}
