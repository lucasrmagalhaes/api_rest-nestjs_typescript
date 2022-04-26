import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {
    @Get()
    obterTodos(): string {
        return 'Lista todos os produtos';
    }

    @Get(':id')
    obterUm(@Param() params): string {
        return `Retorna os dados do produto ${params.id}`;
    }

    @Post()
    criar(@Body() produto): string {
        console.log(produto);

        return 'Produto criado';
    }

    @Put()
    alterar(@Body() produto): string {
        console.log(produto);

        return 'Produto atualizado';
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return `Apaga o produto ${params.id}`;
    }
}