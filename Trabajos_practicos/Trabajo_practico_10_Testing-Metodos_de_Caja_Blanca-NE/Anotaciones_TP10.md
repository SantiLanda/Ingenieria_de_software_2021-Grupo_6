# Anotaciones TP10

# Anotaciones sobre los videos
## [Video 1](https://www.youtube.com/watch?v=6IrH0k-2KQo)
En este caso podemos ver el código.
Los métodos de caja blanca nos permite diseñar casos de prueba maximizando la cantidad de efectos encontrados con la menor cantidad de casos de prueba posibles , disponiendo de los detalles de implementación. Existen diferentes coberturas para garantizar que los métodos de caja blanca funcionan. 
Existen distintas coberturas: Cobertura de enunciados o caminos básicos, cobertura de sentencias, cobertura de decisión, cobertura de condición, cobertura de decisión- condición, cobertura múltiple, etcétera. 

Cobertura es la estrategia para recorrer los distintos caminos que nuestro código provea para desarrollar una funcionalidad. 

### Cobertura de Enunciados o Caminos Básicos
La cobertura de enunciados o caminos básicos busca garantizar que todos los caminos independientes qué tiene nuestra funcionalidad los vamos a recorrer al menos una vez. A pasar por todos los caminos independientes que la funcionalidad tenga . 
Habiendo realizado Esta cobardía podemos garantizar que el código ha sido ejecutado pasando por todos los caminos independientes. Leído también es poder representar un conjunto de caminos mediante una métrica qué es la complejidad ciclomatica que nos va a dar una idea de Cuál es la cantidad de cabinas independientes que una funcionalidad tiene y eso nos da la idea de Cuántos casos de prueba hay que realizar para cubrirlos.

Los casos de prueba cubren un escenario particular otorgando valores específicos a las variables que van a permitir que esto se pueda ejecutar en el camino que nosotros estamos buscando. Para hacer la prueba del camino básico se requiere poder representar mediante un grafo el flujo, se calcula la complejidad ciclomatica, y dado un grafo de flujo, se puede generar casos de prueba. 

Para calcular la complejidad ciclomatica:
- M = complejidad ciclomatica.
- E = número de aristas del grafo. 
- P = número de componentes conexos, nodos de salida. 
- Fórmula: M= EE-N \+ 2 \* P

También se puede calcular 
M = número de regiones cerradas del grafo \+ 1 

La complejidad ciclomatica es una métrica de Software que provee una medición cuantitativa de la complejidad lógica de un programa. 
Habiendo calculado la cobertura de caminos básicos o M es ese valor el que nos dice Cuántos son la menor cantidad de casos de prueba qué hay que realizar. 
Se puede decir entonces que una complejidad ciclomatica entre 1 o 10 es un programa simple sin mucho riesgo, entre 11 y 20 riesgo moderado, entre 21 y 50 es un programa complejo y de alto riesgo y más de 50 es un programa no te testeable y de muy alto riesgo. 

Los pasos para el diseño de pruebas son: 
- Obtener el grafo de flujo 
- Obtener la complejidad ciclomatica del grafo de flujo 
- Determinar los casos de prueba que permite la ejecución de cada uno de los caminos anteriores, 
- Ejecutar cada caso de prueba y  
- comprobar que los resultados son los esperados, 

### Cobertura de sentencias 
Una sentencia es cualquier instrucción que no sea una estructura de control. 
El objetivo de este método es darle cobertura a todas las sentencias, vamos a buscar la cantidad mínima de casos de prueba qué nos permiten pasar ejecutar o recorrer todas las sentencias. 

    IF (A>0 $$ C==1)
        X = X \+ 1
    IF (B==3 || D < 0)
        Y=0  
    END

En este caso es posible cubrir todas las sentencias con un solo caso de prueba. En el caso del ejemplo, con qué tengamos un caso de prueba donde pasé por los dos If ya cubrimos todas las sentencias.

### Cobertura de decisión
Una decisión es una estructura de control completa. 
Lo que va a buscar la cobertura de decisión es cubrir todas las decisiones y que funcionen correctamente con la menor cantidad de casos de prueba posibles. Lo que se busca es que las decisiones vayan por dónde tienen que ir. En el ejemplo vamos a necesitar dos casos de prueba y por lo general como mínimo se va a necesitar dos casos de prueba, uno que vaya por true y otro que vaya por false. 
Una decisión constituye toda la estructura de control completa y no cada condición lógica en particular, es decir involucra todo lo que esté entre paréntesis.

    IF (A>0 $$ C==1)
        X = X \+ 1
    IF (B==3 || D < 0)
        Y=0  
    END

En el código cada uno de los paréntesis de los If \(o rombos en el grafo\) va a ser una decisión. 


## [Video 2](https://www.youtube.com/watch?v=Q7YP2x3DsSg)

### Cobertura de decisión/condición
En este caso creo que se trata de evaluar todas las decisiones de su valor verdadero y el valor falso al igual que las condiciones para la menor cantidad de casos de prueba.
Prácticamente no es distinto al anterior. Solo hay que ser más cuidadoso con la selección de valores.

    IF (A>0 $$ C==1)
        X = X \+ 1
    IF (B==3 || D < 0)
        Y=0  
    END

Para este caso también son necesarios Solo dos casos de prueba en donde todas las condiciones y la decisión se evalúen True y otro caso de prende todas las decisiones y las condiciones se evalúan en False.

Un switch tiene un camino por cada uno de los case.

### Cobertura múltiple \( ó Verbose\)
La cobertura múltiple busca valuar el combinatorio de todas las condiciones en todos los valores de verdad posibles detnro de las decisiones. 
Hay casos de prueba que pueden ser imposibles por su semántica y en esos casos se descarta el caso de prueba.

    IF (A>0 $$ C==1)
        X = X \+ 1
    IF (B==3 || D < 0)
        Y=0  
    END

Este caso solo se necesitan 4 casos de prueba y para saber esto se arman las tablas de verdad con las condiciones de dentro de los rombos \(o IFs\).


### Casos de Pruba
Se usa la plantilla y se escriben los pasos bien detalladamente

## [Video 3](https://www.youtube.com/watch?v=wLFSbA537YI)

\( se corrigieron trabajos \)

Leer la user antes de ir al pseudocódigo.
Leer el pseudocódigo y las precondiciones.
Hacer diagrama de flujo para guiarse mejor
Ahorrar variables \(ctrl\+c y ctrl\+v para las variables que se pueda\)