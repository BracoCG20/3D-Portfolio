# Portfolio 3D

## Descripción General

Este es un sitio web de portafolio moderno construido con React y Three.js, que presenta modelos 3D interactivos, animaciones y un sistema de formulario de contacto. El proyecto muestra trabajo profesional a través de una experiencia 3D inmersiva.

## Tecnologías Utilizadas

- React 19
- Three.js
- React Three Fiber & Drei
- EmailJS para funcionalidad de contacto
- Motion para animaciones
- React Type Animation
- Vite como herramienta de construcción

## Estructura del Proyecto

```
src/
│
├── App.jsx                # Componente principal de la aplicación
├── index.css             # Estilos globales
├── main.jsx              # Punto de entrada
└── components/           # Organización de componentes
    ├── Test.jsx          # Componente de prueba
    ├── contact/          # Sección de contacto
    │   ├── Contact.jsx        # Lógica del formulario
    │   ├── ContactSvg.jsx     # Ilustraciones SVG
    │   └── contact.css        # Estilos de contacto
    ├── hero/             # Sección principal
    │   ├── Hero.jsx          # Componente de inicio
    │   ├── Shape.jsx         # Formas 3D
    │   ├── Speech.jsx        # Texto animado
    │   └── hero.css          # Estilos de hero
    ├── portfolio/        # Sección de portafolio
    │   ├── Portfolio.jsx     # Muestra de proyectos
    │   └── portfolio.css     # Estilos de portafolio
    └── services/         # Sección de servicios
        ├── services.jsx      # Lógica de servicios
        ├── Counter.jsx       # Contador animado
        ├── services.css      # Estilos de servicios
        ├── computer/         # Modelo 3D de computadora
        ├── console/          # Modelo 3D de consola
        └── mug/              # Modelo 3D de taza
```

## Características Principales

- Modelos 3D interactivos usando Three.js
- Efectos de escritura animados
- Sistema de contacto por email
- Diseño responsive
- Animaciones suaves
- Interacciones con modelos 3D

## Instalación

1. Clonar el repositorio:

```bash
git clone [url-del-repositorio]
cd 3d-portfolio
```

2. Instalar dependencias:

```bash
npm install
```

Dependencias requeridas:

```json
{
  "@emailjs/browser": "^4.4.1",
  "@react-three/drei": "^10.7.6",
  "@react-three/fiber": "^9.3.0",
  "motion": "^12.23.22",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-type-animation": "^3.2.0",
  "three": "^0.180.0"
}
```

3. Crear archivo `.env` con credenciales de EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## Desarrollo

Iniciar servidor de desarrollo:

```bash
npm run dev
```

Construir para producción:

```bash
npm run build
```

## Descripción de Componentes

- **Sección Hero**: Página de inicio con elementos 3D y texto animado
- **Portfolio**: Muestra de proyectos con modelos 3D interactivos
- **Servicios**: Visualización de servicios con contadores animados e ilustraciones 3D
- **Contacto**: Formulario de contacto por email con ilustraciones SVG

## Consideraciones de Rendimiento

El proyecto utiliza Vite para una experiencia de desarrollo óptima e incluye:

- Soporte para Fast Refresh
- División de código
- Carga eficiente de modelos 3D
- Manejo optimizado de recursos
