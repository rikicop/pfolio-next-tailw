
### Instalación con TypeScript

```
yarn create next-app --typescript

```

### Instalación de tailwindcss
https://tailwindcss.com/docs/guides/nextjs

Instala tailwindcss y sus dependencias pares a través de npm o yarn, y \
luego ejecuta el comando init para generar tanto tailwind.config.js \
como postcss.config.js.

```
yarn add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

```

#### Configurar las rutas de las plantillas 

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
    
```
### Añade las directivas de Tailwind a tu CSS

Añade las directivas @tailwind para cada una de las capas de Tailwind \
a tu archivo ***./styles/globals.css.***

@tailwind base;
@tailwind components;
@tailwind utilities;

### Empieza a usar Tailwind en tu proyecto

Empieza a utilizar las clases de utilidad de Tailwind para dar estilo a tu contenido.
  
```
  export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
      
```

### Crear un assets folder para las imágenes dentro de public

```
mkdir public/assets
```

### @layer base 

También puede usar la Directiva @Layer para agregar estilos a las capas de base, componentes y utilidades de Tailwind: