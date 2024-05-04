import { Component, OnInit } from '@angular/core';
import { Product } from '../../Class/Product';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  prod = new Product()

  products:any[]=[]
  constructor(private service:ServiceService){}

  ngOnInit(): void {
    
  }

  GetAllPRoducts(){
    this.service.GetAllProducts().subscribe((data:any)=>{
      if(data)
        {
          this.products=data
        }
        else
        {
          this.products=[]
        }
    })
  }

  DeleteProduct(prod:any){

    if(confirm("Do you want to delete the selected item?"))
      {
        this.service.DeleteProd(prod.Id).subscribe((data:any)=>{
          if(data.Id>0 && data.Error==0)
            {
              alert("Deleted successfully")
              this.GetAllPRoducts()
            }
            else
            {
              alert("Deletion failed")
            }
        })
      }


  }

  EditProduct(prod:any){
    this.prod =  prod

  }

  AddProduct(){
    if(this.prod.Name!='')
      {
        if(this.prod.Price!=0 && this.prod.Price!=null)
          {
            
            this.service.AddProduct(this.prod).subscribe((data:any)=>{
              if(data)
                {
                  if(data.Id>0 && data.Error == 0)
                    {
                      if(this.prod.Id==0)
                        {
                          alert("Added Successfully")
                        }
                        else
                        {
                          alert("Updated Successfully")
                        }
                        this.prod=new Product()
                        this.GetAllPRoducts()
                    }
                    else
                    {
                      alert("Error on insertion")
                    }
                }
            })
          }
          else
          {
            alert("Enter price")
          }
      }
      else
      {
        alert('Enter Product Name')
      }
  }

}
