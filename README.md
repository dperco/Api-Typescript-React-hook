# challengue_qubik  'Este es el estado  de la Aplicacion 
 
 Esta aplicacion ,debera  recolectar  informacion de productos de la  Api publica de Mercado Libre ,y mostrar  productos por nombre o Id de producto.
 Tecnologias  utilizadas  Typescript,React ,Node.js,Express,CSS.
 
 Backend _  se  ejecuta desde  la carpeta Api , con el comando ' npm run dev '
            el servidor esta sobre el puerto 3001 , se accede  desde cualquier navegador web  al http://localhost:3001/api/items
           en api/src/functions/index  se encuentra la logica de los contoladores 
           en api/src/controllers/index  estan  las funciones controladoras para  las respuestas de las rutas
           en api/src/routes/index  las rutas de los endpoints
           
Frontend 
        se ejecuta  desde la carpeta \client\challengue\react-app-with-typescript  con el comando  'npm start'
        la pagina corre sobre el puerto 3000  para acceder desde cualquier navegador  al http://localhost:3000/
        el 'main ' de la aplicacion es la carpeta APP.tsc
        el  formulario que inicia la pagina es el archivo  /src/components/Form
        el que renderiza los productos es el/src/componnets/List
        
        Lo que seria la parte del manejo de estados ,esta realizado en el archivo Form , la funcion Reducer ,con Hooks.
        
        #####  falta realizar  la conexion  con el Backend  ,que se realiza desde el usseEfect  que esta en el Archivo App.tsc ,  para hacer la renderizacion de los productos  y terminar de darle forma  al  CSS de la pagina ##########################



           
