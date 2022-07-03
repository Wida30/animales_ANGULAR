export interface imageInterface {
    src: string,
    alt: string

}

export interface animalInterface {

    nombre: string,
    descripcion: string,
    foto: imageInterface

}

export interface habitadInterface {

    habitad: string,
    vive: animalInterface[]
}

