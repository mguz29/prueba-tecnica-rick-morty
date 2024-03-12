# Documentación del Proyecto: Buscador de Personajes de "Rick y Morty"

## Descripción del Proyecto

Este proyecto es una aplicación frontend desarrollada en TypeScript, React, React Router DOM, Tailwind CSS y creado mediante Vite. Su propósito principal es permitir a los usuarios realizar búsquedas de personajes de la serie "Rick y Morty" utilizando la API Rick and Morty.

## Searchbar

- Nos permite buscar por genero, estado o especie

![alt text](/src/assets/image.png)

## Lista de personajes
- Renderiza los personajes en forma de cartas, mostrandonos el nombre, imagen, y especie. Ademas de esto cada carta tiene la opcion de añadir ese personaje a favoritos

  ![alt text](/src/assets/image-1.png)

## Seccion de filtros
- Se pueden combinar 2 opciones de filtros, para buscar favoritos, no favoritos, humanos o aliens. Ademas se añadio la opcion para hacer un ordenamiento de la A-z y viceversa, ademas un boton de reset que permite dejar todo sin filtros ni ordenamientos 
  ![alt text](/src/assets/image-3.png)

## Seccion detail
- Nos enseña mas informacion acerca del personaje, desde esta seccion tambien podemos agregar o quitar de favoritos, para poder ver el detalle de un personaje es necesirio dar click sobre el nombre o imagen de las cartas.
  ![alt text](/src/assets/image-4.png)
## Tecnologías Utilizadas

### TypeScript v5.2

- **Descripción**: TypeScript es un lenguaje de programación desarrollado por Microsoft que se basa en JavaScript, pero agrega tipos estáticos opcionales a la sintaxis del lenguaje. Esto permite detectar errores en tiempo de compilación y proporciona herramientas de desarrollo más potentes.
- **Página Web**: [TypeScript](https://www.typescriptlang.org/)

### React v18.2

- **Descripción**: React es una biblioteca de JavaScript de código abierto desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y reactivas. Utiliza un paradigma de programación llamado "programación declarativa", donde se definen los componentes y su estado, y React se encarga de actualizar la interfaz de usuario de manera eficiente.
- **Página Web**: [React](https://reactjs.org/)

### React Router DOM v6.22

- **Descripción**: React Router DOM es una biblioteca que permite agregar enrutamiento a las aplicaciones web construidas con React. Permite definir diferentes rutas en la aplicación y renderizar componentes diferentes según la URL actual del navegador, lo que facilita la creación de aplicaciones de una sola página (SPA).
- **Página Web**: [React Router](https://reactrouter.com/web/guides/quick-start)

### Tailwind CSS v3.4

- **Descripción**: Tailwind CSS es un framework de diseño de código abierto que utiliza clases de CSS predefinidas para estilizar componentes y elementos HTML. En lugar de escribir estilos personalizados, los desarrolladores pueden aplicar clases predefinidas a sus elementos para lograr el diseño deseado. Tailwind CSS promueve un enfoque de "diseño utilitario", donde los estilos se definen de manera pragmática y modular.
- **Página Web**: [Tailwind CSS](https://tailwindcss.com/)

### Vite v5.1

- **Descripción**: Vite es un entorno de desarrollo rápido para aplicaciones web modernas, especialmente diseñado para proyectos construidos con React, Vue.js, Svelte y otros marcos de trabajo. Proporciona una configuración de desarrollo optimizada que permite una rápida recarga en caliente (HMR) y un tiempo de inicio rápido. Vite utiliza ESM (ECMAScript Modules) para cargar archivos de forma diferida, lo que mejora significativamente el rendimiento durante el desarrollo.
- **Página Web**: [Vite](https://vitejs.dev/)

## Instalación

1. Clona el repositorio desde GitHub:

   ```bash
   git clone https://github.com/mguz29/prueba-tecnica-rick-morty.git
   ```

2. Ingresa al directorio del proyecto

   ```bash
   cd prueba-tecnica-rick-morty
   ```

3. Instala las dependencias del proyecto usando el siguiente comando
   ```bash
   npm install
   ```

## Configuración

    No se requieren configuraciones adicionales

## Ejecución

Para empezar a ejecutar la aplicacion localmente, utiliza el siguiente comando.

    ```bash
      npm run dev
    ```

## Estructura del proyecto

El proyecto esta estructurado de la siguiente manera

```bash
src/
│
├── components/
│   ├── Detail
│   ├── List
│   └── Search
│
│── icons/
├   ├── arrowBack
│   ├── filterIcon
│   └── searchIcon
│
├── pages/
│   ├── ErrorPages
│   ├── HomePAges
│   └── ...
│
│── services/
├   ├── filters
│   ├── getCharacters
│   └── getDetailCharacters
│
│── store/
├   ├── storeProvider
│   ├── storeReducer
└── App.tsx

```

- La carpeta components contiene los componentes reutilizables de la aplicación.
- La carpeta icons contiene todos los iconos utilizados en la aplicación.
- La carpeta pages contiene las páginas principales de la aplicación.
- El archivo App.tsx es el punto de entrada de la aplicación.
- La carpeta services contiene todos los archivos con funciones que nos permiten conectarnos y hacer peticiones a la API para obtener información.
- La carpeta store contiene el provider que nos permite usar estados globales mediante el contexto, además de contener el reducer que nos permite manejar y modificar los estados.

## Enrutamiento

La aplicacion utiliza React router Dom en su version 6 para hacer la gestion de rutas

```bash
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/errorPages/ErrorPages.tsx";
import Detail from "./components/detail/DetailCharacter.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/character/:id",
        element: <Detail />,
      },
    ],
  },
]);
```

## Estilos

Los estilos de la aplicación están gestionados mediante Tailwind CSS en su version 3.4. Se utilizan clases de Tailwind CSS directamente en los componentes para aplicar estilos.

```bash
export default function List({ title, characters, filterActive }: props) {
  return (
    <div className="mt-8">
      <div className="text-left mb-4">
        {filterActive ? (
          <div className="flex justify-between">
            <span className="pl-5 text-base font-semibold text-blue-400">
              {characters.length} {title}
            </span>
            <span>
              <div>
                <span className="mx-3 text-sm font-semibold text-secondary700 bg-secondary600 rounded-xl w-10 px-2 bg-opacity-20">
                  1 Filter
                </span>
              </div>
            </span>
          </div>
        ) : (
          <span className="pl-5 text-xs font-semibold text-ColorCharactersSpecie">
            {title} ({characters.length})
          </span>
        )}
      </div>
      <div>
        {characters &&
          characters.map((character) => {
            return (
              <div key={character.id}>
                <ItemList
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  favorite={character.favorite}
                  gender={character.gender}
                  status={character.status}
                />
              </div>
            );
          })}
      </div>
    </div>
  )
}
```

## API Rick and Morty:

La aplicación utiliza la API de Rick and Morty para obtener información sobre los personajes. Se realizan solicitudes HTTP para obtener los datos necesarios.

```js
import { actionProps, types } from "../store/StoreReducer";
export const getCharacters = async (dispatch: React.Dispatch<actionProps>) => {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: types.getCharacters,
        payload: data.results.slice(0, 8),
      })
    )
    .catch((error) => console.log(error));
};
```

Link documentacion api Rick and Morty

- https://rickandmortyapi.com/documentation/

## Creación del Proyecto:

Este proyecto fue creado utilizando Vite, un entorno de desarrollo rápido para aplicaciones web modernas. Vite proporciona una configuración de desarrollo optimizada y es compatible con TypeScript, React y otras tecnologías modernas.

Para crear un nuevo proyecto utilizando Vite, puedes utilizar el siguiente comando:

```bash
npm create vite@latest
```

Este comando generará la estructura inicial del proyecto utilizando React como plantilla. Luego puedes agregar las demás dependencias necesarias, como React Router DOM y Tailwind CSS, según sea necesario.
