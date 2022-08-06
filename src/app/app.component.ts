import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'AMBIENTE-ANGULAR';
  count = 0;
  nome = 'Ivonaldo Junior Escobar Soares';
  text: string = '';

  pessoas = [
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"  
    },
    {
      nome: "Joao",
      sobrenome: "Pereira"   

    },
    {
      nome: "Marcio",
      sobrenome: "Santos"  

    },
    {
      nome: "Maria",
      sobrenome: "Silva"  

    }
  ]

  constructor () {

  }

  ngOnInit() {
    console.log(this.pessoas)
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval);
      }
    },1000)
  }

  clicou(nome:string): void {
    console.log('Clicou em mim', nome)
  }



}
