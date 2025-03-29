import { Component } from '@angular/core';
import { LivroService } from '../../../core/services/livro.service';
import { Router, ActivatedRoute } from '@angular/router'; // Corrigir o import do Router
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-livro',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.scss'
})
export class EditarLivroComponent {
  livro: any = { id: 0, titulo: '', autor: '', editora: '', ano: 0 };

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router // Certifique-se de que o Router está corretamente injetado
  ) {}

  ngOnInit(): void {
    // Obtém o ID do livro da rota e carrega os dados do livro
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.livro = this.livroService.getLivro(id);
  }

  editarLivro(): void {
    try {
      this.livroService.updateLivro(this.livro);
      alert('Livro atualizado com sucesso!');
      this.router.navigate(['']); // Redireciona para a lista de livros
    } catch (error) {
      alert('Erro ao atualizar o livro: ' + (error as Error).message);
    }
  }

  navigateToLivros(): void {
    this.router.navigate(['']); // Redireciona para a lista de livros
  }
}