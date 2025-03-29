import { Component } from '@angular/core';
import { LivroService } from '../../../core/services/livro.service';
import { Livro } from '../../../core/models/livro.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-livro',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.scss']
})
export class AdicionarLivroComponent {
  livro: Livro = { id: 0, titulo: '', autor: '', editora: '', ano: 0 };

  constructor(private livroService: LivroService, private router: Router) {}

  adicionarLivro(): void {
    this.livro.id = Math.max(...this.livroService.getLivros().map(l => l.id)) + 1;
    this.livroService.addLivro(this.livro);
    this.router.navigate(['']);
  }

  navigateToLivros(): void {
    this.router.navigate(['']); // Redireciona para a lista de livros
  }
}