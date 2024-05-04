import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  UserName:string=''
  PassWord:string=''
  
  constructor(private router:Router,private service:ServiceService){}

  ngOnInit(): void {
    
  }

  Login(){
    if(this.UserName!='')
      {
        if(this.PassWord!='')
          {
            this.service.Login(this.UserName,this.PassWord).subscribe((data:any)=>{
              if(data)
                {
                  if(data.length>0)
                    {
                      this.router.navigate(['product'])
                    }
                }
            })

          }
          else
          {
            alert("Enter Password")
          }

      }
      else
      {
        alert("Enter UserName")
      }
  }

}
