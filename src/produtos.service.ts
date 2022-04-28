import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("LIV01", "TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Iniciando com Flutter", 39.90),
        new Produto("LIV03", "Inteligência artificial como serviço", 29.90)
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop();
    }
}