const menu = [
    // PROMOCIONES
    { categoria: "Promociones", nombre: "#1 - Cheesecake Japonés arándanos + Chocolate Caliente 16 onzas", precio: "C$ 300" },
    { categoria: "Promociones", nombre: "#2 - Pastel de Zanahoria + Té chai latte", precio: "C$ 299" },
    { categoria: "Promociones", nombre: "#3 - Sándwich de Pasta de Pollo + Cappuccino de 8 onzas", precio: "C$ 270" },

    // POSTRES
    { categoria: "Postres", nombre: "Affogato", precio: "C$ 170" },
    { categoria: "Postres", nombre: "3 Leche", precio: "C$ 176" },
    { categoria: "Postres", nombre: "Crème Brûlée", precio: "C$ 125" },
    { categoria: "Postres", nombre: "Cheesecake Vasco", precio: "C$ 190" },
    { categoria: "Postres", nombre: "Cheesecake con Fresa", precio: "C$ 195" },
    { categoria: "Postres", nombre: "Cheesecake con Maracuyá", precio: "C$ 195" },
    { categoria: "Postres", nombre: "Cheesecake Japonés", precio: "C$ 180" },
    { categoria: "Postres", nombre: "Flan Napolitano", precio: "C$ 185" },
    { categoria: "Postres", nombre: "Macarons", precio: "C$ 60" },
    { categoria: "Postres", nombre: "Pie Banoffee", precio: "C$ 185" },
    { categoria: "Postres", nombre: "Pastel de Chocolate", precio: "C$ 200" },
    { categoria: "Postres", nombre: "Pastel Red Velvet", precio: "C$ 180" },
    { categoria: "Postres", nombre: "Parfait", precio: "C$ 200" },
    { categoria: "Postres", nombre: "Panacota Frutos del Bosque", precio: "C$ 195" },
    { categoria: "Postres", nombre: "Strudel de Manzana", precio: "C$ 150" },
    { categoria: "Postres", nombre: "Tartaleta de Fresa con Jamaica", precio: "C$ 200" },
    { categoria: "Postres", nombre: "Tartaleta de Arándanos", precio: "C$ 200" },
    { categoria: "Postres", nombre: "Torta de Elote", precio: "C$ 151" },
    { categoria: "Postres", nombre: "Tiramisú", precio: "C$ 335" },

    // SÁNDWICH
    { categoria: "Sándwich", nombre: "Croissant Jamón y queso Mozzarella", precio: "C$ 235" },
    { categoria: "Sándwich", nombre: "Croissant Fresa, banano y Nutella", precio: "C$ 250" },
    { categoria: "Sándwich", nombre: "Maleta de pollo", precio: "C$ 100" },
    { categoria: "Sándwich", nombre: "Sándwich Pasta de Pollo", precio: "C$ 180" },
    { categoria: "Sándwich", nombre: "Sándwich Jamón, Pepperoni y Mozzarella", precio: "C$ 155" },
    { categoria: "Sándwich", nombre: "Sándwich Pollo Pesto", precio: "C$ 280" },

    // BEBIDAS CALIENTES
    { categoria: "Bebidas Calientes", nombre: "Americano", descripcion: "8onz: C$ 90 | 12onz: C$ 100 | 16onz: C$ 125", precio: "C$ 90+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino Vainilla Canela", descripcion: "8onz: C$ 140 | 12onz: C$ 155 | 16onz: C$ 165", precio: "C$ 140+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino", descripcion: "8onz: C$ 120 | 12onz: C$ 140 | 16onz: C$ 165", precio: "C$ 120+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino Chai", descripcion: "8onz: C$ 143 | 12onz: C$ 168 | 16onz: C$ 190", precio: "C$ 143+" },
    { categoria: "Bebidas Calientes", nombre: "Cappuccino Cacao Artesanal", descripcion: "8onz: C$ 130 | 12onz: C$ 150 | 16onz: C$ 165", precio: "C$ 130+" },
    { categoria: "Bebidas Calientes", nombre: "Latte", descripcion: "8onz: C$ 125 | 12onz: C$ 135 | 16onz: C$ 165", precio: "C$ 125+" },
    { categoria: "Bebidas Calientes", nombre: "Mocaccino", descripcion: "8onz: C$ 135 | 12onz: C$ 155 | 16onz: C$ 165", precio: "C$ 135+" },
    { categoria: "Bebidas Calientes", nombre: "Chai Caliente", descripcion: "8onz: C$ 130 | 12onz: C$ 155 | 16onz: C$ 185", precio: "C$ 130+" },
    { categoria: "Bebidas Calientes", nombre: "Chocolate Caliente Artesanal", descripcion: "8onz: C$ 130 | 12onz: C$ 155 | 16onz: C$ 165", precio: "C$ 130+" },

    // BEBIDAS FRÍAS
    { categoria: "Bebidas Frías", nombre: "Iced Latte", precio: "C$ 145" },
    { categoria: "Bebidas Frías", nombre: "Iced Cacao Latte", precio: "C$ 160" },
    { categoria: "Bebidas Frías", nombre: "Iced Cappuccino", precio: "C$ 145" },
    { categoria: "Bebidas Frías", nombre: "Iced Caramel Coffee", precio: "C$ 160" },
    { categoria: "Bebidas Frías", nombre: "Iced Mocca Latte", precio: "C$ 160" },
    { categoria: "Bebidas Frías", nombre: "Iced Matcha Latte", precio: "C$ 150" },
    { categoria: "Bebidas Frías", nombre: "Matcha straw berry", precio: "C$ 195" },
    { categoria: "Bebidas Frías", nombre: "Chai Latte", precio: "C$ 155" },
    { categoria: "Bebidas Frías", nombre: "Sangría", precio: "C$ 200" },

    // LIMONADAS
    { categoria: "Limonadas", nombre: "Fresa", precio: "C$ 160" },
    { categoria: "Limonadas", nombre: "Mango", precio: "C$ 160" },
    { categoria: "Limonadas", nombre: "Hierba Buena", precio: "C$ 140" },
    { categoria: "Limonadas", nombre: "Té Negro con Limón", precio: "C$ 155" },
    { categoria: "Limonadas", nombre: "Forest Fruit", precio: "C$ 155" },

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

    // FRAPPUCCINOS
    { categoria: "Frappuccinos", nombre: "Clásico", precio: "C$ 145" },
    { categoria: "Frappuccinos", nombre: "Cookies Butter Frapuccino", precio: "C$ 195" },
    { categoria: "Frappuccinos", nombre: "Cacao Artesanal", precio: "C$ 185" },
    { categoria: "Frappuccinos", nombre: "Caramelo", precio: "C$ 186" },
    { categoria: "Frappuccinos", nombre: "Chai", precio: "C$ 165" },
    { categoria: "Frappuccinos", nombre: "Fresa", precio: "C$ 160" },
    { categoria: "Frappuccinos", nombre: "Mocca", precio: "C$ 186" },
    { categoria: "Frappuccinos", nombre: "Oreo", precio: "C$ 190" }
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
    
    // Buscar el botón que se hizo clic y ponerlo activo
    // Usamos el evento de esta forma para evitar problemas en algunos navegadores móviles
    const botonActivo = Array.from(botones).find(b => b.innerText === cat);
    if(botonActivo) botonActivo.classList.add("activo");

    if (cat === 'Todos') {
        renderizarMenu(menu);
    } else {
        const filtrados = menu.filter(i => i.categoria === cat);
        renderizarMenu(filtrados);
    }
}

// Carga inicial
renderizarMenu(menu);