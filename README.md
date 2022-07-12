# desafioBsaleBackend

Aplicación de backend creada para cumplir con el desafío Bsale, para optar por una vacante de empleo dentro de la empresa.

Para utilizar a nivel local, es necesario descargar el repositorio e instalar lós modulos de node mediante "npm install" y crear el archivo .env dentro de la carpeta raíz que contenga las credenciales de la base de datos: HOST, DATABASE, USER y PASSWORD.

La aplicación está desarrollada para obtener productos de una base de datos que simula una tienda.
Los métodos utilizados son los siguientes:

- getProducts = Método utilizado para obtener los productos de la base de datos y entregar una lista de todos ellos en formato json.

- getByCategoryProducts = Método que sirve para obtener los productos de la base de datos de acuerdo a su categoría. Para eso se utiliza una consulta a la base de datos que une ambas tablas ("product" y "category"), obteniendo así el nombre de la categoría a la cual pertenece el producto y no solo el id de la categoría.

- searchProducts = Este método es utilizado para procesar un valor obtenido del request y buscar dicho valor dentro de la base de datos, entregando los productos que coinciden con dicho valor, en este caso el valor se compara al nombre por el cual se desea buscar un producto.
