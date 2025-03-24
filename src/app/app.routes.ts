import { Routes } from '@angular/router';
import { ListaLivrosComponent } from './features/livros/lista-livros/lista-livros.component';
import { AdicionarLivroComponent } from './features/livros/adicionar-livro/adicionar-livro.component';
import { EditarLivroComponent } from './features/livros/editar-livro/editar-livro.component';

export const routes: Routes = [
    { path: '', redirectTo: 'livros', pathMatch: 'full' },
    { path: 'livros', component: ListaLivrosComponent },
    { path: 'livros/adicionar', component: AdicionarLivroComponent },
    { path: 'livros/editar/:id', component: EditarLivroComponent }, 
];
