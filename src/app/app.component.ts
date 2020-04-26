import { Component, Directive, HostListener } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-hclinica';

  width = 800;
  difference = 50;
  left = -200;
  fixedTop= -1200;
  top = -290;
  listo = false;
  
  mostrarSuperior = "none";
  mostrarMedia = "none";

  cabeza = false;
  abdomen = false;
  
  leftpx:string =this.left+"px";
  toppx:string = this.top+"px";



  @HostListener('mousemove', ['$event'])
  actualizarPosicion(event: MouseEvent){
    if (this.width>=1800 && event.target["id"] == "img1"){
      if ( event.clientY <550 && event.clientY >350){
        this.abdomen = true;
        this.cabeza = false;
        this.mostrarSuperior="none"
        this.mostrarMedia="block"
        this.top = -940;
        this.toppx = this.top+"px"
      } else if (event.clientY < 350){
        this.top = -290;
        this.toppx = this.top+"px"
        this.mostrarSuperior="block"
        this.mostrarMedia="none"
        this.abdomen = false;
        this.cabeza = true;
      }
    }
  }

  @HostListener('mouseenter', ['$event'])
   async actualizarTop(event: MouseEvent) {
     await this.delay(1);
    if (this.width < 1800){
    // console.log(event.target["id"]);
    // console.log(event.clientY)
    if (event.target["id"] == "img1" && event.clientY <550 && event.clientY >350){
      this.top = event.clientY + this.fixedTop;
      this.toppx = this.top+"px"
      
    } 
  } 
    else{
      if (event.target["id"] == "img1" && event.clientY <550 && event.clientY >350){
        this.abdomen = true;
        this.cabeza = false;
        this.mostrarSuperior="none"
        this.mostrarMedia="block"
      } else if (event.target["id"] == "img1" && event.clientY <350){
        this.mostrarSuperior="block"
        this.mostrarMedia="none"
        this.abdomen = false;
        this.cabeza = true;
      }
    }
 }

 

  async increase(){     
    await this.delay(1);
    if (this.width < 1800) {
    
      this.left -= 25
      
      this.leftpx = this.left+"px";
      this.width = this.width + this.difference;
      this.increase();
    } else{
      
      this.listo=true;
    }

    
  }



 delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
