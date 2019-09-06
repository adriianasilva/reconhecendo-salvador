# Copiar o PorData Kids

## [HomePage](https://www.pordatakids.pt/HomePage.aspx)

- aviso de uso de cookies

- 2 navbars

> - navegação geral do site

>> - escolas, jogos, vídeo e música

>> - barra de busca (o que ela faz?)

> - logo do projeto + navegação baseada em temas

```js
for (let a=0; a<=13; a++ ) { 
    console.log('- >> ' + $('nav .clearfix li' )[a].innerText) ;
}
```

- >> Início

- >> Sabias que

- >> Ambiente

- >> Ciência e Tecnologia

- >> Cultura e Desporto

- >> Educação

- >> Emprego

- >> Famílias

- >> Justiça

- >> População

- >> Saúde

- >> Turismo

- >> Transportes

- container

> - mapa animado da cidade que permite a seleção dos temas que tem na navbar mais inferior

> a página [JSHome.aspx](https://www.pordatakids.pt/HomePage.aspx) possui o código que realiza animações CSS via JQuery 

- footer (separados por linha)

> - Sobre o Projeto ; Termos de Utilização; Ficha Técnica

> - Copyright © FFMS. Todos os direitos reservados.

> - logo da PORDATA e FFMS (centralizados)

### Observações

- A HomePage é responsiva. Os seguintes comportamentos foram observados: 

> - navbars colapsam

> - rótulos à direita colapsam

> - (e o resto?)

- Fonte esquisita: *font-family: 'Patrick Hand SC', cursive;*

- Talvez seja possível acelerar as animações utilizando método de *sprites* com [essa biblioteca](https://blaiprat.github.io/jquery.animateSprite/); também transitions e keyframes.

