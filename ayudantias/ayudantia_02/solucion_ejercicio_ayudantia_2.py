# SOLUCION AYUDANTIA 02
# Primero, abrimos el archivo, cargamos sus datos
# y lo cerramos

archivo = open('datos_peliculas.csv','r')
lineas_archivo = archivo.readlines()
archivo.close()


# Ahora abrimos el archivo donde escribiremos los
# datos procesados

archivo_nuevo = open("datos_procesados.csv", "w")

# Iteramos sobre cada linea arreglando los errores numericos

for linea in lineas_archivo:
    linea_separada = linea.split(';')
    linea_separada[1] = linea_separada[1].replace('.', '')
    linea_separada[2] = linea_separada[2].replace('.', '').replace(',', '')
    linea_separada[3] = linea_separada[3].replace(',', '.')

    # Verificamos si la linea cumple con las condiciones que necesitamos para
    # la visualizacion (nuestro criterio). Si cumple con la condicion, se
    # escribira la linea en la nueva base de datos

    if not linea_separada[3] == '\n' and not linea_separada[3] == '-\n':
        linea_nueva = ';'.join(linea_separada)
        archivo_nuevo.write(linea_nueva)

# Finalmente, cerramos el archivo

archivo_nuevo.close()


