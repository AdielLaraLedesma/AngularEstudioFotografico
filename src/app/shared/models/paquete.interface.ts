export interface Paquete {
    /** Indica que el campo userId no es requerido **/
    /** "userId"?: number **/
    id: number;
    nombre: string;
    descripcion: string;
    hrs_video: number;
    no_fotos_dig: number;
    no_fotos_fis: number;
    marco_id: number;
    tamano_id: number;
    precio: number;
    tipo_paquete_id: number;
    url_imagen: string; 
}

