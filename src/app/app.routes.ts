import { Routes } from '@angular/router';
import { ListaLivrosComponent } from './features/livros/home-page/home-page.component';
import { AdicionarLivroComponent } from './features/livros/adicionar-livro/adicionar-livro.component';
import { EditarLivroComponent } from './features/livros/editar-livro/editar-livro.component';

export const routes: Routes = [
    { path: '', component: ListaLivrosComponent },
    { path: 'livros/adicionar', component: AdicionarLivroComponent },
    { path: 'livros/editar/:id', component: EditarLivroComponent }, 
];
