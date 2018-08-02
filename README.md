# VTEX - Smart Research
>*Extensões da plataforma VTEX são plugins criados por desenvolvedores de interface ou pelo VTEX Lab (Laboratório de Inovações da VTEX) que podem ser inseridas em sua loja. Existem extensões gratuitas com código aberto -  Open Source - e extensões pagas.  Indicamos que a instalação seja realizada pelos profissionais e empresas certificados pela VTEX. Vale ressaltar que qualquer profissional de CSS, JavaScript e HTML pode também executar esta tarefa.*

----------

Veja este componente na [VTEX Store](http://conversionstore.com.br/index.php/extensoes/home/smart-research)

## Instalação
Faça o upload para o "Gerenciador do portal" no "Vtex Admin" dos seguintes arquivos:
* vtex-smartResearch.css
* vtex-smartResearch.min.js

Faça a chamada do arquivo javascript e CSS na página:

```html
<link rel="stylesheet" type="text/css" href="/arquivos/vtex-smartResearch.css" />
<script type="text/javascript" src="/arquivos/vtex-smartResearch.min.js"></script>
```

Certifique-se que na página existe o controle `<vtex.cmc:searchNavigator />` e que os produtos possueem opções de filtros.

Execute o plugin sempre selecionando os check-box retornados pelo controle:
```javascript
$(".menuLateral input[type='checkbox']").vtexSmartResearch();
```


## Avançado

Configurações completas do plugin (lista atualizada em 02/08/2018):

### Chamada Completa

```javascript
$(".menuLateral input[type='checkbox']").vtexSmartResearch({
	pageLimit: null,página
	loadContent: ".prateleira[id^=ResultItems]",
	shelfClass: ".prateleira",
	filtersMenu: ".search-multiple-navigator",
	linksMenu: ".search-single-navigator",
	menuDepartament: ".navigation .menu-departamento",
	mergeMenu: true,
	insertMenuAfter: ".search-multiple-navigator h3:first",
	emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'),busca vazia
	elemLoading: '<div id="scrollLoading">Carregando ... </div>',seguinte
	returnTopText: '<span class="text">voltar ao</span><span class="text2">TOPO</span>',
	emptySearchMsg: '<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>',
	alertFilterErro: true,
	filterErrorMsg: "Houve um erro ao tentar filtrar a página!",filtros
	searchUrl: null,
	usePopup: false,
	showLinks: true,
	popupAutoCloseSeconds: 3,
	filterOnChange: true,
	filterButtonClass:  ".filter-btn",
	clearButtonClass:  ".clear-filter-btn",
	
	filterScrollTop:function(shelfOffset){ return (shelfOffset.top-20);},
	callback:function(){},
	getShelfHeight:function(container){ return (container.scrollTop()+container.height());},
	shelfCallback:function(){},
	ajaxCallback:function(){},
	emptySearchCallback:function(){},
	authorizeScroll:function(){return true;},
	authorizeUpdate:function(){return true;},
	labelCallback:function(data){}
});
```


### Opções 

Opção | default | descricao
---|---|---
pageLimit | `null` | Número máximo de páginas que o script irá retornar. Exemplo "pageLimit=3" só será retornado resultados até a terceira página
loadContent | `".prateleira[id^=ResultItems]"` | Elemento que esta em volta da(s) prateleira(s) de produtos.
shelfClass | `".prateleira"` | Pratelira de produtos (filha do elemento definido de um "loadContent")
filtersMenu | `".search-multiple-navigator"` | Menu com os filtros
linksMenu | `".search-single-navigator"` | Menu de links
menuDepartament | `".navigation .menu-departamento"` | seletor do menu da página de departamentos
mergeMenu | `true` | Define se o menu de links será mesclado com o de filtros será mesclado na página de departamento
insertMenuAfter | `".search-multiple-navigator h3:first"` | O menu de links será inserido após este elemento
emptySearchElem | `jQuery('<div class="vtexsr-emptySearch"></div>')` | Elemento Html (em Objeto jQuery) no qual será adicionado a mensagem de busca vazia
elemLoading | `<div id="scrollLoading">Carregando ... </div>` | Elemento com mensagem de carregando ao iniciar a requisição da página seguinte
returnTopText | `<span class="text">voltar ao</span><span class="text2">TOPO</span>` | Mensagem de "retornar ao topo"
emptySearchMsg | `<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>` | Html com a mensagem para ser apresentada quando não existirem resultados para os filtros selecionados
alertFilterErro | `true` | exibe aler casso haja erro algum erro de servidor ao aplicar os filtros
filterErrorMsg | `"Houve um erro ao tentar filtrar a página!"` | Mensagem de erro exibida quando existe algum erro de servidor ao aplicar os filtros
searchUrl | `null` | Url da página de busca (opicional)
usePopup | `false` | Opção p/ definir se deseja que a mensagem de não localizado seja exibida em um popup
showLinks | `true` | Exibe o menu de links caso o de filtro não seja encontrado
popupAutoCloseSeconds | `3` | Caso esteja utilizando popup, defina aqui o tempo para que ele feche automaticamente
filterOnChange | `true` | Permite que o filtro seja aplicado assim que a opção é marcada
filterButtonClass |  `".filter-btn"` | Classe do botão que terá a ação de filtro caso a "filterOnChange" seja false
clearButtonClass |  `".clear-filter-btn"` | Classe para o botão que limpa todos os filtros


### Callbacks

Lista de callbacks do Plugin

- filterScrollTop

```Javascript 
function(shelfOffset){ 
	return (shelfOffset.top-20);
}
```
- callback
```Javascript 
function(){},
// Cálculo do tamanho do conteúdo/vitrine para que uma nova página seja chamada antes 
// do usuário chegar ao "final" do site
```

- getShelfHeight 

```Javascript 
function(container){
	return (container.scrollTop()+container.height());
},
//Callback após inserir a prateleira na página
```


- shelfCallback
```javascript
function(){},
// Callback em cada requisição Ajax (Para requisições feitas com sucesso)
// Recebe como parâmetro um objeto contendo a quantidade total de requisições feitas e a quantidade de filtros selecionados 
```

- ajaxCallback
```javascript
function(){},
// Função que é executada quando a seleção de filtros não retorna nenhum resultado
// Recebe como parâmetro um objeto contendo a quantidade total de requisições feitas e a quantidade de filtros selecionados 
```

- emptySearchCallback
```javascript
function(){},
// Função para permitir ou não que a rolagem infinita execute na página esta deve retornar "true" ou "false"
// Recebe como parâmetro um objeto contendo a quantidade total de requisições feitas e a quantidade de filtros selecionados 
```

- authorizeScroll
```javascript
function(){return true;},
// Função para permitir ou não que o conteúdo de "loadContent" seja atualizado. Esta deve retornar "true" ou "false"
// Recebe como parâmetro um objeto contendo a quantidade total de requisições feitas e a quantidade de filtros selecionados 
```

- authorizeUpdate
```javascript
function(){return true;},
// Callback de cada laço percorrendo os fildsets e os labels. Retorna um objeto com algumas informações
```

- labelCallback
```javascript
function(data){}
```

### Eventos 

Eventos do Plugin
Evento | diparado
---|---|---
`vsr-complete` | Assim que a chamada do plugin é finalizada
`vsr-ajax-sucess` | Ocorre sempre que uma requisição por filtro é bem sucedida
`vsr-ajax-fail` | Ocorre quando uma requisição por filtro falha
`vsr-add-filter` | Ocorre quando o filtro é marcado
`vsr-remove-filter` | Ocorre quando o filtro é desmarcado
`vsr-clean-all-filter` | Ocorre quando todos filtros removidos de uma só vez
