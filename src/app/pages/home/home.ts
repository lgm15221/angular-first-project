import { Component, signal } from '@angular/core'; // Importación de los módulos necesarios de Angular
import { FormsModule } from '@angular/forms'; // Importación del módulo FormsModule para usar ngModel en el componente
import { NgClass, NgStyle } from '@angular/common';
import { Autofocus } from '../../directives/autofocus';
import { ClickCounter } from '../../directives/click-counter';
import { EnlargeOnHover } from '../../directives/enlarge-on-hover';
import { IfRole } from '../../directives/if-role';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle, Autofocus, ClickCounter, EnlargeOnHover, IfRole],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home { // Clase del componente Home
  // Ejerciocio 2: @if
  showWelcome = signal(true); // Variable de señal para controlar la visibilidad del mensaje de bienvenida
  toggleWelcome() { // Método para alternar la visibilidad del mensaje de bienvenida
    this.showWelcome.set(!this.showWelcome()); // Cambia el valor de la señal showWelcome a su valor opuesto
  }

  // Ejerciocio 3: @for
  books = signal([
    { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes' },
    { id: 2, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez' },
    { id: 3, title: 'La Sombra del Viento', author: 'Carlos Ruiz Zafón' },
  ]); // Variable de señal que contiene un array de libros con sus respectivos títulos y autores

  // Ejerciocio 4: @switch
  selectedGenre = signal < 'novela' | 'poesía' | 'ensayo' > ('novela'); // Variable de señal para almacenar el género seleccionado, con un tipo específico
  changeGenre(genre: 'novela' | 'poesía' | 'ensayo') { // Método para cambiar el género seleccionado
    this.selectedGenre.set(genre); // Actualiza el valor de la señal selectedGenre con el género seleccionado
  }

  //Resto de dierctivas: ngClass, ngStyle, ngModel
  isDisabled = signal(false); // Variable de señal para controlar si un elemento está deshabilitado
  searchText = signal(''); // Variable de señal para almacenar el texto de búsqueda ingresado por el usuario


}


