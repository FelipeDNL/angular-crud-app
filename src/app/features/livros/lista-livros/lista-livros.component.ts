import { Component } from '@angular/core';
import { LivroService } from '../../../core/services/livro.service';
import { Livro } from '../../../core/models/livro.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-lista-livros',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.scss'
})
export class ListaLivrosComponent {
  livros: Livro[] = [];

  constructor(private livroService: LivroService) {
    this.livros = this.livroService.getLivros();
  }

  deleteLivro(id: number): void {
    if (confirm('Tem certeza que deseja excluir este livro?')) {
      this.livros = this.livros.filter(livro => livro.id !== id);
    }
  }
}
