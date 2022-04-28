import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model';
@Controller('produtos')
export class ProdutosController {
    produtos: Produto[] = [
        new Produto("LIV01", "TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Iniciando com Flutter", 39.90),
        new Produto("LIV03", "Inteligência artificial como serviço", 29.90)
    ];

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[0];
    }

    @Post()
    criar(@Body() produto: Produto) {
        produto.id - 100;

        this.produtos.push(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtos.pop();
    }
}