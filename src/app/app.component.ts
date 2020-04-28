import { Component, Directive, HostListener, OnInit } from '@angular/core';
import { fromEvent, Subscriber, Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  title = 'ng-hclinica';

  width = 800;
  difference = 50;
  left = -200;
  fixedTop= -1200;
  top = -290;
  listo = false;
  
  mostrarSuperior = "none";
  mostrarMedia = "none";
  mostrarCabecera = true;

  cabeza = false;
  abdomen = false;
  
  leftpx:string =this.left+"px";
  toppx:string = this.top+"px";

  ejecutando = false;
  

  fix = false;

  fixSuperior =false;
  fixMedia = false;
  fixCabecera = true;

  ngOnInit(): void {
    const el = document.getElementById('img1');
    
    let mouseClick = fromEvent(el, 'click');
    let mouseMove = fromEvent(el, 'mousemove');


    mouseClick.subscribe( (e) =>{
      
      if (this.width > 800 && this.width < 1800) return;
       
      this.fix = !this.fix;
    
    });

    mouseMove.subscribe( (e: MouseEvent) =>{

      if(this.fix) return;

      if (this.width>=1800 ){
      if ( e.clientY <=550 && e.clientY >=350){
        this.abdomen = true;
        this.cabeza = false;
        this.mostrarSuperior="none"
        this.mostrarMedia="block"
        this.top = -940;
        this.toppx = this.top+"px"
      } else if (e.clientY <= 350){
        this.top = -290;
        this.toppx = this.top+"px"
        this.mostrarSuperior="block"
        this.mostrarMedia="none"
        this.abdomen = false;
        this.cabeza = true;
      }
    }
    });
  }



  // @HostListener('mousemove', ['$event'])
  // actualizarPosicion(event: MouseEvent){
  //   if (this.width>=1800 && event.target["id"] == "img1"){
  //     if ( event.clientY <=550 && event.clientY >=350){
  //       this.abdomen = true;
  //       this.cabeza = false;
  //       this.mostrarSuperior="none"
  //       this.mostrarMedia="block"
  //       this.top = -940;
  //       this.toppx = this.top+"px"
  //     } else if (event.clientY <= 350){
  //       this.top = -290;
  //       this.toppx = this.top+"px"
  //       this.mostrarSuperior="block"
  //       this.mostrarMedia="none"
  //       this.abdomen = false;
  //       this.cabeza = true;
  //     }
  //   } else if (this.width>=800 && event.target["id"] != "img1"){
  //     this.decrease();
  //     this.ejecutando = true;
  //   }
  // }


 
async decrease(){ 
  await this.delay(100);
  if (this.width >= 800 && this.ejecutando == true) {
    this.listo=false;
    this.left += 25
    
    this.leftpx = this.left+"px";
    this.width = this.width - this.difference;
    this.decrease();
  } else{
    this.ejecutando=false;
    this.mostrarCabecera = true;
    this.listo=true;
    this.top = -290;
    this.toppx = this.top+"px"
  }   
}

  

  async increase(){     
    await this.delay(10);
    if (this.width <= 1800) {
    
      this.left -= 25
      
      this.leftpx = this.left+"px";
      this.width = this.width + this.difference;
      this.increase();
    } else{
      this.mostrarCabecera = false;
      this.listo=true;
    }   
  }



 delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
