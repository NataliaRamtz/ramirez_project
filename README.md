# Ostara - Alta Costura & Colecciones Exclusivas

Una aplicación web moderna para la tienda de ropa de alta costura "Ostara", especializada en colecciones exclusivas y pedidos personalizados.

## 🎨 Características

- **Catálogo de Productos**: Visualización de colecciones por temporada y categorías
- **Sistema de Carrito**: Gestión completa del carrito de compras con funcionalidades avanzadas
- **Pedidos Personalizados**: Formulario de consulta para servicios de alta costura a medida
- **Responsive Design**: Optimizado para dispositivos móviles, tablets y desktop
- **Filtros Avanzados**: Búsqueda y filtrado por categoría, temporada y precio

## 🛍️ Funcionalidades Principales

### Página de Inicio
- Productos destacados
- Información sobre la marca
- Navegación a colecciones y servicios

### Colecciones
- Catálogo completo de productos
- Filtros por categoría y temporada
- Ordenamiento por precio y nombre
- Vista detallada de cada producto

### Detalle de Producto
- Información completa del producto
- Selección de talla y color
- Gestión de cantidades
- Añadir al carrito

### Carrito de Compras
- Lista de productos seleccionados
- Actualización de cantidades
- Cálculo automático de totales
- Proceso de checkout

### Pedidos Personalizados
- Formulario de consulta detallado
- Información sobre el proceso de alta costura
- Contacto directo con la marca

## 🚀 Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **React Router** - Navegación entre páginas
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconografía
- **Vite** - Herramienta de construcción

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <https://github.com/NataliaRamtz/ramirez_project.git>
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Barra de navegación
│   └── Footer.jsx      # Pie de página
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página de inicio
│   ├── Collections.jsx # Catálogo de productos
│   ├── ProductDetail.jsx # Detalle de producto
│   ├── Cart.jsx        # Carrito de compras
│   └── CustomOrders.jsx # Pedidos personalizados
├── data/               # Datos de la aplicación
│   └── products.js     # Productos y colecciones
├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎯 Características Técnicas

- **Estado Global**: Gestión del carrito con React hooks
- **Routing**: Navegación con React Router
- **Responsive**: Diseño adaptativo con Tailwind CSS
- **Accesibilidad**: Soporte para lectores de pantalla y navegación por teclado
- **Performance**: Optimización con Vite y lazy loading

## 📱 Diseño Responsive

La aplicación está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Paleta de Colores

- **Primario**: Gris oscuro (#111827)
- **Secundario**: Gris medio (#6B7280)
- **Fondo**: Gris claro (#F9FAFB)
- **Acentos**: Blanco y grises neutros

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción
- `npm run lint` - Verificación de código

## 📞 Contacto

Para más información sobre Ostara:
- **Email**: info@ostara.com
- **Teléfono**: +55 618 123 44 55
- **Dirección**: Durango, México

---

Desarrollado con ❤️ para Ostara Alta Costura
