// =============================
// Array de Produtos (catálogo)
// =============================
const produtos = [
    {
        id:1,
        nome: "Smartphone",
        preco: 1500,
        categoria: "Eletrônicos",
        imagem: "https://via.placeholder.com/150"
    },
    {
         id:2,
        nome: "Camiseta",
        preco: 80,
        categoria: "Acessórios",
        imagem: "https://via.placeholder.com/150"
    },
    {
         id:3,
        nome: "Relógio",
        preco: 250,
        categoria: "Acessórios",
        imagem: "https://via.placeholder.com/150"
    }
];

// =====================================
// Seleção do Dom
// =====================================
const container = document.getElementById("product-list");

// =====================================
// Função para renderizar produtos
// =====================================
function renderizarProdutos(lista) {

    // limpa antes de renderizar
    container.innerHTML = "";

    lista.forEach(produto => {

        // cria card
        const card = document.createElement("div");
        card.classList.add("product-card");

        // conteúdo do card
        card.innerHTML= 
        // Aqui Tu digitou innerHtml ao invés de innerHTML


        `<img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        `;
        

        // adiciona no container
        container.appendChild(card);

    });
}

// ===================================
// Execução
// ===================================
renderizarProdutos(produtos);


// ===========================
// Destructuring
// ===========================
const {nome, preco } = produtos[0];
console.log(`Produto: ${nome} - R$ ${preco}`);


// ============================
// Listar produtos
// ============================
function listarProdutos(lista) {
    lista.forEach(produto => {
        console.log(`Produto:${produto.nome} - R$ ${produto.preco}`);
    });
}

listarProdutos(produtos);

// ====================================
// Filtrar por categoria
// ====================================
function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

const eletronicos = filtrarPorCategoria("Eletrônicos");
console.log(eletronicos);

// ===================================
// Spread Operator
// ===================================
const novosProdutos = [
    ...produtos,
    {
        id: 4,
        nome: "Notebook",
        preco: 3500,
        categoria:"Eletrônicos",
        imagem: "https://via.placeholder.com/150"
    }
];

console.log(novosProdutos);

// ==================================
// Simulação JSON
// ==================================
const produtosJSON = JSON.stringify(produtos);
console.log(produtosJSON);

const produtosConvertidos = JSON.parse(produtosJSON);
console.log(produtosConvertidos);
