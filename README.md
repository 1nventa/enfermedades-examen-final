# enfermedades-examen-final

Cómo ejecutar el proyecto

📌 Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

Node.js (versión 18+ recomendada)

npm o yarn

SQLite (no necesita instalación adicional, viene incluido en muchos entornos)

Postman u otra herramienta para consumir la API

📂 1. Clonar el repositorio
git clone https://github.com/tu-repo.git
cd tu-repo

📦 2. Instalar dependencias
npm install

🗄️ 3. Crear la base de datos SQLite

El proyecto crea automáticamente el archivo database.sqlite si no existe, pero debes ejecutar el script de migración.

Ejecuta:

npm run migrate


Esto generará:

/src/database/database.sqlite

🚀 4. Iniciar el servidor
npm start


El servidor quedará corriendo en:

http://localhost:3000

🧪 5. Probar la API en Postman

Endpoints disponibles:

✔ Obtener todos los productos
GET http://localhost:3000/products

✔ Crear un producto
POST http://localhost:3000/products


Body (JSON):

{
  "name": "Mouse",
  "price": 45000
}

✔ Buscar un producto por ID
GET http://localhost:3000/products/:id

✔ Actualizar un producto
PUT http://localhost:3000/products/:id

✔ Eliminar un producto
DELETE http://localhost:3000/products/:id

📎 Notas finales

Cualquier error en el arranque normalmente se debe a permisos o a no ejecutar la migración.

La estructura del proyecto está lista para crecer con más módulos o controladores.
