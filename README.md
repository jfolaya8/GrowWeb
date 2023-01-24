# GrowWeb

## 🧾 Prerequisitos
* Clonar el repositorio 
* En la raiz del proyecto ejecutar 

```bash
    npm install && npm install cypress --save-dev
```

## 💻 Ejecutar pruebas mediante interfaz
* En la raiz del proyecto mediante la terminal ejecutar 

```bash
    npx cypress open
```
* Se ejecutara una ventana, allí seleccionar ```E2E Testing```
* Despues seleccionar como navegador ```Chrome``` y dar clic en ```Start E2E Testing in Chrome```
* Se abrira una ventana nueva de Chrome, alli se visualizaran los test disponibles para ejecutar, dar clic en el test que se desee ejecutar.


## ⌛ Ejecutar test por consola
* En la raiz de proyecto ejecute el siguiente comando: 
```bash
    npx cypress run
```


# 🐞Casos de prueba
Para el ejecicio planteado se elaboraron 2 casos de prueba.

- Ingresar a la web, aceptar el modal de cookies, seleccionar un país y un curso *aleatorio* y dar clic en "Buscar experiencias": Se debe visualizar al menos una experiencia con los criterios de busqueda seleccionados.

- Ingresar a la web, aceptar el modal de cookies, recorrer todos los paises y sus respectivos cursos y buscar experiencias: Se debe visualizar al menos una experiencia con los criterios de busqueda seleccionados.


## Conclusiones
Ha sido una prueba interesante ya que existian ciertos componentes de la web que por su forma en la cual estan construidos requiere que la automatización se adapte, por ejemplo las opciones que se encuentran dentro de country o course son buttons no un select, por lo cual no se puede seleccionar de primera instancia si no requiere que se le haga un tratamiento diferente.

Adicional la segunda prueba en donde se recorren todos los paises y cursos, es bastante costosa en cuanto a tiempo, pero si es un caso de gran importancia para el negocio se podria implementar como una prueba de backend en donde se hagan todas las combinaciones y se compruebe que exista al menos un curso.




