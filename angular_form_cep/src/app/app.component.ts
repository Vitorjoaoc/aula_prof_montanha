import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnderecoService } from './services/endereco.service';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(enderecoService: EnderecoService) {
    enderecoService.getEndereco('30570000').then(endereco => {
      console.log(endereco);
    });
   }

  title = 'aula_ts_angular';
}

 


