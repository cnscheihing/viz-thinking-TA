# Evaluación de Pares
El curso posee una evaluación de pares para las dos etapas grupales. Se elaboraron estos *scripts* en `GoogleScript` para automatizar el proceso. A continuación se dejan las instrucciones:

## Generador de Form
Para generar el *form* con la evaluación de pares se necesita:
1. Tener un archivo Google Sheet con una hoja con el nombre `Grupo`, que tenga los nombres de l@s estudiantes y su grupo correspondiente, de la siguiente forma:

    | Nombre                   | Grupo |
    | ------------------------ | ----- |
    | Benito Martínez Ocasio   | 1     |
    | Emmanuel Gazmey Santiago | ···   |
    | ···                      | ···   |


2. En ese archivo, ir a `Herramientas > Editor de secuencia de comandos`.
3. Copiar el código y guardar.
4. Recargar el archivo excel.
5. Abrir menú `Evaluación de Pares` y escoger la evaluación que se quiere.

`PENDIENTE`: A la fecha no está soportado ir a una página de manera dinámica según una respuesta en una sección, por lo que hay que setear a mano la página asociada al grupo según la respuesta en la primera sección (grupos).

## Calculadora de notas
En el archivo de resultados del *form* (Gogle Spreadsheet) se debe hacer lo siguiente:

1. Ir a `Herramientas > Editor de secuencia de comandos`
2. Copiar el código y guardar.
3. Recargar el archivo excel.
4. Abrir menú `Evaluación de Pares` y escoger opción `Obtener resultados`.

**Nota:** El *form* debe cumplir con el formato particular que se usa en el curso (el mismo dado por el generado por el *script* de arriba).