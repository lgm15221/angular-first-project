import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { Autofocus } from '../../directives/autofocus';
import { ClickCounter } from '../../directives/click-counter';
import { EnlargeOnHover } from '../../directives/enlarge-on-hover';
import { IfRole } from '../../directives/if-role';
import { BookService } from '../../services/book.service';
import { ProviderService } from '../../services/provider.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle, Autofocus, ClickCounter, EnlargeOnHover, IfRole],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  // Ejercicio 2: @if
  showWelcome = signal(true);
  toggleWelcome() {
    this.showWelcome.set(!this.showWelcome());
  }

  // Ejercicio 3: @for (lista fija)
  books = signal([
    { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes' },
    { id: 2, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez' },
    { id: 3, title: 'La Sombra del Viento', author: 'Carlos Ruiz Zafón' },
  ]);

  // Ejercicio 4: @switch
  selectedGenre = signal<'novela' | 'poesía' | 'ensayo'>('novela');
  changeGenre(genre: 'novela' | 'poesía' | 'ensayo') {
    this.selectedGenre.set(genre);
  }

  // Resto de directivas: ngClass, ngStyle, ngModel
  isDisabled = signal(false);
  searchText = signal('');

  // Libros desde json-server (nombre distinto para no chocar con 'books')
  private bookService = inject(BookService);
  apiBooks = signal<{ id: number; title: string; author: string }[]>([]);
  
  private providerService = inject(ProviderService);
  apiProviders = signal<{ id: number; name: string; email: string }[]>([]);

  constructor() {
    this.bookService.getBooks().subscribe((data) => this.apiBooks.set(data));
    this.providerService.getProviders().subscribe((data) => this.apiProviders.set(data));
  }
}