import { Injectable } from "@angular/core";
import { Livro } from "../models/livro.model";

@Injectable({
    providedIn: 'root',
})

export class LivroService {
    private livros: Livro[] = [
        { id: 1, titulo: 'Angular', autor: 'John Doe', editora: 'Editora A', ano: 2020 },
        { id: 2, titulo: 'React', autor: 'Jane Doe', editora: 'Editora B', ano: 2021 },
        { id: 3, titulo: 'Vue', autor: 'John Smith', editora: 'Editora C', ano: 2022 },
    ];

    getLivros(): Livro[] {
        return this.livros;
    }

    getLivro(id: number): Livro {
        const livro = this.livros.find(livro => livro.id === id);
        if (!livro) {
            throw new Error(`Livro with id ${id} not found`);
        }
        return livro;
    }

    addLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    updateLivro(livro: Livro): void {
        const index = this.livros.findIndex(l => l.id === livro.id);
        if (index === -1) {
            throw new Error(`Livro with id ${livro.id} not found`);
        }
        this.livros[index] = livro;
    }

    deleteLivro(id: number): void {
        const index = this.livros.findIndex(livro => livro.id === id);
        if (index === -1) {
            throw new Error(`Livro with id ${id} not found`);
        }
        this.livros.splice(index, 1);
    }
}