import { Component } from '@angular/core';
import { Livro } from '../../../core/models/livro.model';
import { LivroService } from '../../../core/services/livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// consultar adicionar-livro.component.ts para mais detalhes sobre o decorator @component
@Component({
  selector: 'app-editar-livro',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.scss'
})
export class EditarLivroComponent {
  
  livro: Livro = { id: 0, titulo: '', autor: '', editora: '', ano: 0 };

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute, // actived route para obter parâmetros da rota
    private router: Router 
  ) {}

  //ngOnInit é um hook do ciclo de vida do Angular que é chamado após o construtor
  // é utilizado para inicializar o componente e carregar dados iniciais
  // devo usar quando precisar de dados que dependem de parâmetros da rota ou serviços
  ngOnInit(): void {
    // Obtém o ID do livro da rota e carrega os dados do livro
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.livro = this.livroService.getLivro(id);
  }

  // Método chamado quando o formulário é enviado
  // Atualiza o livro no serviço e redireciona para a lista de livros
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