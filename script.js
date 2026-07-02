// 1. Importamos los módulos necesarios de Firebase desde la red (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 2. REEMPLAZA ESTE BLOQUE CON TUS DATOS REALES DE FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// 3. Inicializamos Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. Variables globales para manejar el estado en memoria
let menuProductos = []; 
const contenedorMenu = document.getElementById("contenedor-menu");
const contenedorBotones = document.getElementById("botones-categorias");

// 5. Función principal para descargar los datos de Firebase
async function cargarMenuDesdeFirebase() {
    try {
        // A. Traer Categorías ordenadas por el campo 'orden'
        const catQuery = query(collection(db, "categorias"), orderBy("orden"));
        const catSnapshot = await getDocs(catQuery);
        
        // Limpiamos los botones estáticos del HTML (dejamos solo el de 'Todos')
        contenedorBotones.innerHTML = `<button class="btn-filtro activo" id="btn-todos">Todos</button>`;
        document.getElementById("btn-todos").addEventListener("click", (e) => filtrar('Todos', e.target));

        // Renderizamos dinámicamente los botones de las categorías que existan en la BD
        catSnapshot.forEach(doc => {
            const catData = doc.data();
            const boton = document.createElement("button");
            boton.className = "btn-filtro";
            boton.innerText = catData.nombre;
            
            // Asignamos el evento click a cada botón dinámico
            boton.addEventListener("click", (e) => filtrar(catData.nombre, e.target));
            contenedorBotones.appendChild(boton);
        });

        // B. Traer Productos de la base de datos
        const prodSnapshot = await getDocs(collection(db, "productos"));
        menuProductos = []; // Limpiamos el arreglo local
        
        prodSnapshot.forEach(doc => {
            const prodData = doc.data();
            // Solo añadimos el producto si está marcado como disponible
            if (prodData.disponible !== false) {
                menuProductos.push(prodData);
            }
        });

        // C. Renderizado inicial mostrando todo el menú completo
        renderizarMenu(menuProductos);

    } catch (error) {
        console.error("Error conectando con Firebase: ", error);
        contenedorMenu.innerHTML = `<p style="text-align:center; color:red; padding:20px;">Error al cargar el menú. Por favor, intente más tarde.</p>`;
    }
}

// 6. Función para pintar los productos en la pantalla
function renderizarMenu(lista) {
    contenedorMenu.innerHTML = "";
    lista.forEach(item => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <div class="producto-header">
                <span class="nombre">${item.nombre}</span>
                <span class="precio">C$ ${item.precio}</span>
            </div>
            ${item.descripcion ? `<p class="descripcion">${item.descripcion}</p>` : ''}
        `;
        contenedorMenu.appendChild(div);
    });
}

// 7. Función para filtrar por categorías al hacer click
function filtrar(categoriaNombre, botonPresionado) {
    // Actualizar estados visuales de los botones
    const botones = document.querySelectorAll(".btn-filtro");
    botones.forEach(b => b.classList.remove("activo"));
    botonPresionado.classList.add("activo");

    // Filtrar la lista en memoria
    if (categoriaNombre === 'Todos') {
        renderizarMenu(menuProductos);
    } else {
        const filtrados = menuProductos.filter(i => i.categoriaNombre === categoriaNombre);
        renderizarMenu(filtrados);
    }
}

// 8. Arrancar la aplicación cargando los datos de la nube
cargarMenuDesdeFirebase();