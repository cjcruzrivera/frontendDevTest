# Mobile Store

Aplicación web para una tienda de dispositivos móviles desarrollada con React y Vite.

## Características

- **Catálogo de Productos**
  - Listado con búsqueda por marca y modelo
  - Vista detallada con especificaciones técnicas completas
  - Diseño responsive adaptado a diferentes dispositivos

- **Optimización de Rendimiento**
  - Sistema de caché local con expiración de 1 hora
  - Persistencia de datos del carrito en localStorage
  - Reducción de llamadas innecesarias al API

- **Experiencia de Usuario**
  - Navegación intuitiva con breadcrumbs
  - Interfaz responsive

## Requisitos Previos

- Node.js (versión 18.x o superior recomendada)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias:
```bash
npm install
```

## Scripts Disponibles

- **Desarrollo**:
  ```bash
  npm start
  ```
  Inicia el servidor de desarrollo en `http://localhost:5173`

- **Producción**:
  ```bash
  npm run build
  ```
  Genera una versión optimizada para producción en la carpeta `dist`

- **Lint**:
  ```bash
  npm run lint
  ```
  Ejecuta el análisis de código con ESLint

## Estructura del Proyecto

```plaintext
src/
├── components/    # Componentes reutilizables
├── pages/         # Páginas/Vistas principales
├── context/       # Contextos de React (ej: CartContext)
└── services/      # Servicios (API, caché)
```


## Características Técnicas

### Sistema de Caché
- Implementación de caché local para optimizar llamadas a la API
- Tiempo de expiración: 1 hora
- Almacenamiento en localStorage

### Gestión del Estado
- Uso de React Context para el estado global del carrito
- Estados locales con useState para componentes individuales

### Routing
- React Router DOM para la navegación
- Rutas principales:
  - `/`: Listado de productos
  - `/product/:id`: Detalles de producto

## API

La aplicación consume la API de Mobile Store:
- Base URL: `https://itx-frontend-test.onrender.com/api`
- Endpoints:
  - `GET /product`: Lista de productos
  - `GET /product/:id`: Detalles de producto
  - `POST /cart`: Añadir al carrito
