const menu = [
    // POSTRES
    { categoria: "Postres", nombre: "Affogato", precio: "C$ 170" },
    { categoria: "Postres", nombre: "3 Leches", precio: "C$ 176" },
    { categoria: "Postres", nombre: "Crème Brûlée", precio: "C$ 125" },
    { categoria: "Postres", nombre: "Cheesecake Vasco", precio: "C$ 190" },
    { categoria: "Postres", nombre: "Cheesecake Vasco Blueberries", precio: "C$ 250" },
    { categoria: "Postres", nombre: "Cheesecake con Fresa", precio: "C$ 195" },
    { categoria: "Postres", nombre: "Cheesecake con Maracuyá", precio: "C$ 195" },
    { categoria: "Postres", nombre: "Cheesecake Marmoleado", precio: "C$ 195" },
    { categoria: "Postres", nombre: "Cheesecake Japonés Clásico", precio: "C$ 180" },
    { categoria: "Postres", nombre: "Cheesecake Japonés Nutella", precio: "C$ 250" },
    { categoria: "Postres", nombre: "Cheesecake Japonés con Topping", descripcion: "Arándanos, fresa con crema, chocolate, dulce de leche, leche condensada", precio: "C$ 210" },
    { categoria: "Postres", nombre: "Flan Napolitano", precio: "C$ 185" },
    { categoria: "Postres", nombre: "Mini Cheesecake Vasco", precio: "C$ 120" },
    { categoria: "Postres", nombre: "Pie Banoffee", precio: "C$ 185" },
    { categoria: "Postres", nombre: "Pastel de Chocolate", precio: "C$ 200" },
    { categoria: "Postres", nombre: "Pastel Germán", precio: "C$ 250" },
    { categoria: "Postres", nombre: "Pastel Red Velvet", precio: "C$ 180" },
    { categoria: "Postres", nombre: "Parfait", precio: "C$ 200" },
    { categoria: "Postres", nombre: "Pecan Square", precio: "C$ 120" },
    { categoria: "Postres", nombre: "Strudel de Manzana", precio: "C$ 150" },
    { categoria: "Postres", nombre: "Torta de Elote", precio: "C$ 151" },
    { categoria: "Postres", nombre: "Tiramisú", precio: "C$ 335" },

    // LIMONADAS
    { categoria: "Limonadas", nombre: "Fresa", precio: "C$ 160" },
    { categoria: "Limonadas", nombre: "Mango", precio: "C$ 160" },
    { categoria: "Limonadas", nombre: "Hierba Buena", precio: "C$ 140" },
    { categoria: "Limonadas", nombre: "Té Negro con Limón", precio: "C$ 155" },
    { categoria: "Limonadas", nombre: "Forest Fruit", precio: "C$ 155" },
    { categoria: "Limonadas", nombre: "Sangría", precio: "C$ 200" },

    // SANDWICH
    { categoria: "Sandwich", nombre: "Croissant Jamón y queso Mozzarella", precio: "C$ 235" },
    { categoria: "Sandwich", nombre: "Croissant Fresa, banano y Nutella", precio: "C$ 250" },
    { categoria: "Sandwich", nombre: "Croissant Clásico", precio: "C$ 150" },
    { categoria: "Sandwich", nombre: "Maleta de pollo", precio: "C$ 100" },
    { categoria: "Sandwich", nombre: "Sandwich Pasta de pollo", precio: "C$ 180" },
    { categoria: "Sandwich", nombre: "Sandwich Jamón, peperoni y Mozzarella", precio: "C$ 155" },

    // SMOOTHIES
    { categoria: "Smoothies", nombre: "Apio Perejil", precio: "C$ 135" },
    { categoria: "Smoothies", nombre: "Banano Fresa", precio: "C$ 165" },
    { categoria: "Smoothies", nombre: "Banana Berry", precio: "C$ 190" },
    { categoria: "Smoothies", nombre: "Guanábana", precio: "C$ 165" },
    { categoria: "Smoothies", nombre: "Guanábana Fresa", precio: "C$ 175" },
    { categoria: "Smoothies", nombre: "Mora", precio: "C$ 165" },
    { categoria: "Smoothies", nombre: "Mango Power", precio: "C$ 181" },
    { categoria: "Smoothies", nombre: "Power Peach", precio: "C$ 180" },
    { categoria: "Smoothies", nombre: "Tropical", precio: "C$ 195" },
    { categoria: "Smoothies", nombre: "Sol de Verano", precio: "C$ 185" },

    // CAFÉ FRÍOS
    { categoria: "Café Fríos", nombre: "Iced Latte", precio: "C$ 145" },
    { categoria: "Café Fríos", nombre: "Iced Cacao Latte", precio: "C$ 160" },
    { categoria: "Café Fríos", nombre: "Iced Cappuccino", precio: "C$ 145" },
    { categoria: "Café Fríos", nombre: "Iced Caramel Coffee", precio: "C$ 160" },
    { categoria: "Café Fríos", nombre: "Iced Mocca Latte", precio: "C$ 160" },
    { categoria: "Café Fríos", nombre: "Iced Matcha Latte", precio: "C$ 150" },
    { categoria: "Café Fríos", nombre: "Matcha straw berry", precio: "C$ 195" },
    { categoria: "Café Fríos", nombre: "Té Chai Latte", precio: "C$ 155" },
    { categoria: "Café Fríos", nombre: "Tiramisú Latte", precio: "C$ 200" },

    // GRANIZADOS
    { categoria: "Granizados", nombre: "Clásico", precio: "C$ 145" },
    { categoria: "Granizados", nombre: "Cookies Butter Frapuccino", precio: "C$ 195" },
    { categoria: "Granizados", nombre: "Cacao Artesanal", precio: "C$ 185" },
    { categoria: "Granizados", nombre: "Caramelo", precio: "C$ 186" },
    { categoria: "Granizados", nombre: "Chai", precio: "C$ 165" },
    { categoria: "Granizados", nombre: "Dulce de leche", precio: "C$ 170" },
    { categoria: "Granizados", nombre: "Fresa", precio: "C$ 160" },
    { categoria: "Granizados", nombre: "Mocca", precio: "C$ 186" },
    { categoria: "Granizados", nombre: "Oreo", precio: "C$ 190" },

    // BEBIDAS CALIENTES
    { categoria: "Bebidas Calientes", nombre: "Americano", descripcion: "8onz: C$ 90 | 12onz: C$ 100 | 16onz: C$ 125", precio: "C$ 90+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino Vainilla canela", descripcion: "8onz: C$ 140 | 12onz: C$ 155 | 16onz: C$ 165", precio: "C$ 140+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino", descripcion: "8onz: C$ 120 | 12onz: C$ 140 | 16onz: C$ 165", precio: "C$ 120+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino Chai", descripcion: "8onz: C$ 143 | 12onz: C$ 168 | 16onz: C$ 190", precio: "C$ 143+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino Cacao Artesanal", descripcion: "8onz: C$ 130 | 12onz: C$ 150 | 16onz: C$ 165", precio: "C$ 130+" },
    { categoria: "Bebidas Calientes", nombre: "Latte", descripcion: "8onz: C$ 125 | 12onz: C$ 135 | 16onz: C$ 165", precio: "C$ 125+" },
    { categoria: "Bebidas Calientes", nombre: "Mocaccino", descripcion: "8onz: C$ 135 | 12onz: C$ 155 | 16onz: C$ 165", precio: "C$ 135+" },
    { categoria: "Bebidas Calientes", nombre: "Té Chai Caliente", descripcion: "8onz: C$ 130 | 12onz: C$ 155 | 16onz: C$ 185", precio: "C$ 130+" },
    { categoria: "Bebidas Calientes", nombre: "Chocolate Caliente Artesanal", descripcion: "8onz: C$ 130 | 12onz: C$ 155 | 16onz: C$ 165", precio: "C$ 130+" },

    // PROMOCIONES
    { categoria: "Promociones", nombre: "#1 - Cheesecake Japonés arándanos + Chocolate Caliente 16onz", precio: "C$ 300" },
    { categoria: "Promociones", nombre: "#2 - Pastel de Zanahoria + Té chai latte", precio: "C$ 299" },
    { categoria: "Promociones", nombre: "#3 - Sándwich de Pasta de Pollo + Cappuccino de 8onz", precio: "C$ 270" }
];

const contenedorMenu = document.getElementById("contenedor-menu");

function renderizarMenu(lista) {
    contenedorMenu.innerHTML = "";
    lista.forEach(item => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <div class="producto-header">
                <span class="nombre">${item.nombre}</span>
                <span class="precio">${item.precio}</span>
            </div>
            ${item.descripcion ? `<p class="descripcion">${item.descripcion}</p>` : ''}
        `;
        contenedorMenu.appendChild(div);
    });
}

function filtrar(cat) {
    // Actualizar botones
    const botones = document.querySelectorAll(".btn-filtro");
    botones.forEach(b => b.classList.remove("activo"));
    event.target.classList.add("activo");

    if (cat === 'Todos') {
        renderizarMenu(menu);
    } else {
        const filtrados = menu.filter(i => i.categoria === cat);
        renderizarMenu(filtrados);
    }
}

// Carga inicial
renderizarMenu(menu);