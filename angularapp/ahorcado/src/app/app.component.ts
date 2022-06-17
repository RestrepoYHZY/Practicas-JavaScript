import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent {

  palabra = 'MADARINA';
  palabraOculta = '';

  intentos=0;

  gano=false;
  perdio= false; 

  letras=['A','B','C','D','E','F','G','H','I','J',
          'K','L','M','N','Ñ','0','P','Q','R','S',
          'T','U','V','W','X','Y','Z'];
  
  constructor(){

   
    this.palabraOculta = '_ '.repeat(this.palabra.length)
  }

  comprobar (letra: string){

    this.existeLetra(letra);
    
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for( let i=0; i<this.palabra.length; i++){

      if(this.palabra[i] === letra){
        palabraOcultaArr[i]= letra;
      }

    }

    this.palabraOculta=palabraOcultaArr.join(' ');
     this.verificaGane();

  }


  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar=palabraArr.join('');
    if(palabraEvaluar===this.palabra){
      this.gano= true;
      console.log('USUARIO GANO');
    }

    if(this.intentos>=9){
      this.perdio = true;
      console.log('Usuario Perdio');
    }
  }



  existeLetra(letra: string){

    if(this.palabra.indexOf(letra)>=0){
      //encontro 
      //console.log('letra existe '+letra);

    }else{
      //No econtro letra
      //console.log('letra NO existe '+letra);
      this.intentos++;
    }

  }

}


