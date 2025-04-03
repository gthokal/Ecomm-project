import { NgIf, NgSwitch, NgSwitchCase, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgSwitch, NgSwitchCase, TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuType: string='default';
  sellerName: string='';

  constructor(private route:Router){}
  ngOnInit(){
    this.route.events.subscribe((val:any)=>{
      //console.log(val);
      if(val.url){
        if(localStorage.getItem('seller') && val.url && val.url.includes('seller')){
          console.log("In seller Area");
          this.menuType="seller";
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName= sellerData.name;
          }
        }else{
          console.log("Outside seller Area");
          this.menuType="default";
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}
