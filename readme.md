# CURSO DOCKER UTN

### ALUMNO: PABLO GALEANO

### DOCENTE : MARCOS TONINA

#### Unidad 3

---

## Actividad integradora de Docker

Consigna:

Elijamos una tecnología de nuestra preferencia y creemos una imagen de algún servidor con un Dockerfile.

El servidor debe poder recibir requests HTTP y responder acorde a los inputs definidos.

La tecnología es libre.

---

## Instrucciones de uso

- Descargar todo los archivos en una carpeta

- Abrir una línea de comandos y correr el siguiente comando para realizar el build en docker con el dockerfile

```
docker buildx build . -t galeanopablo
```

( \* puede colocar el nombre que desee luego del -t)

- Una vez finalizado el build, utilizar el siguiente comando para verificar que está creada la imagen:

```
docker images
```

- Crear un contenedor con el siguiente comando:

```
docker run -p 8010:80 galeanopablo
```

(\*el nombre galeanopablo es de ejemplo, debe colocar el mismo nombre con el que realizó el build)
