# p5-dev
# Configuración Inicial del Proyecto
Decidimos dividir el front y el back en este proyecto por temas de prolijidad, es por ello que cada uno tiene su pakage.json.
 De esta forma quienes quieran trabajar en alguna de las secciones no deben descargarse si o si todos los packetes de la otra sección.

# Informe Back
En el Back trabajaron Mariano, Tomás y Santino. 

# server
Primero en el archivo server.js se levanto el server del back, utilizando express. Se instaló morgan para el loggeo y nodemon para poder desarrollar con el sever levantado (se lo selecciono como herramienta para el "Start").
En la primera linea se requiere la DB para que esta misma se ejecute al levantarse el server, entonces la DB esta conectda con nuestra App.

# DB
Decidimos elegir Mongo Atlas como nuestra DB, por varios motivos:
 1. Es una tecnología nueva para nosotros y nos interesaba aprender como se utilizaba.
 2. Al ser una base de datos online nos ahorramos la tarea de crear una db en cada una de nuestros equipos.
 3. Al ser online también nos aseguramos de que la info que ella posea este sincronizada en todos los equipos.

Nuestra base se llama wowDB y su password es wow2022, este nombre y password son necesarios para el connectionString, que conecta nuestra app con la base de datos.
La base de datos se encuentra seedeada por 98 noticias, entre 9 y 10 de cada emoción. Ellas se encuentran en el archivo seed.js de utils, así como el método para seedear la base.
Las noticias fueron extraidas del siguiente url: https://ohlala-drupal-do.bd-it.com/data/search?keywords=<emotion>
OJO:Al momento de seedear la base necesitamos cambiar la configuración de la DB para que esta retorne mongoose al seed. Dicha configuración se encuentra comentada en la db.js

# Schema
Para nuestras noticias decidimos fijar un schema usando mongoose. Dicho modelo se puede ver en models/News.js. Estos son sus campos:

    {title:String,
    subtitle:String,
    field_credits:String,
    field_category:String,
    emotion:String,
    field_img_primary:String}

# Routes
El objetivo era cumplir con una condición: en un solo llamado se le debería pasar un numero n random de noticias por emoción al front. Para ello se recurre a un get api/
Definimos 10 emociones.  
     "Alegria",
    "Tristeza",
    "Misterio",
    "Reflexion",
    "Naturalleza",
    "Diversion",
    "Paz",
    "Amor",
    "Pasion",
    "Accion"

Cada emoción cuenta con 10 noticias en la base de datos.
De esas 10 emociones, se ordenan de forma random en un array y se envian tres de cada emoción al front. Siento un total de 30 noticias.
Lo a estructura en la cual devuelve esta ruta es un array de 10 indices (uno x cada emoción)
dentro de cada indice otro array enciierra tres objetos (uno x cada noticia).
Sería algo así [[{},{},{}],[],...]

Existe a su vez otra ruta que trae todas las emociones por si en algun momento no es necesaria. Y se resuelve llamando a get(api/newses).

