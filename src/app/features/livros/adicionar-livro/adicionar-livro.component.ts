import { Component } from '@angular/core';
import { LivroService } from '../../../core/services/livro.service';
import { Livro } from '../../../core/models/livro.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// @component é um decorator que define um componente Angular
// selector: 'app-adicionar-livro' é o seletor do componente, que pode ser usado em templates HTML
// imports: [ CommonModule, FormsModule ] importa os módulos necessários para o componente
// CommonModule fornece funcionalidades comuns do Angular, como ngIf e ngFor
// FormsModule permite o uso de formulários reativos e template-driven, como ngModel
// templateUrl: './adicionar-livro.component.html' é o caminho para o template HTML do componente
// styleUrls: ['./adicionar-livro.component.scss'] é o caminho para os estilos CSS do componente

@Component({
  selector: 'app-adicionar-livro',
  imports: [CommonModule, FormsModule],
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.scss']
})

// classe AdicionarLivroComponent é o componente responsável por adicionar um novo livro
export class AdicionarLivroComponent {

  // livro: Livro é um objeto do tipo Livro, que representa o livro a ser adicionado
  livro: Livro = { id: 0, titulo: '', autor: '', editora: '', ano: 0 };

  // constructor é o construtor da classe, que é chamado quando o componente é criado
  // constructor: LivroService é injetado para acessar os métodos de serviço de livros
  // router: Router é injetado para navegar entre as rotas da aplicação
  constructor(
    private livroService: LivroService,
    private router: Router
  ) { }

  // método adicionarLivro é chamado quando o formulário é enviado
  // ele gera um novo ID para o livro, adiciona o livro ao serviço e navega para a lista de livros
  // Math.max(...this.livroService.getLivros().map(l => l.id)) + 1 gera um novo ID baseado no maior ID existente
  adicionarLivro(): void {
    this.livro.id = Math.max(...this.livroService.getLivros().map(l => l.id)) + 1;
    this.livroService.addLivro(this.livro);
    this.router.navigate(['']);
  }

  navigateToLivros(): void {
    this.router.navigate(['']); // Redireciona para a lista de livros
  }
}