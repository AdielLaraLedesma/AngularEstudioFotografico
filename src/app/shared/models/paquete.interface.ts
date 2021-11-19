export interface Paquete {
    /** Indica que el campo userId no es requerido **/
    /** "userId"?: number **/
    id: number;
    nombre: string;
    descripcion: string;
    hrs_Video: number;
    no_Fotos_Dig: number;
    no_Fotos_Fis: number;
    no_Fotos_Enm: number;
    marco_id: number;
    tamano_id: number;
    precio: number;
    tipo_paquete_id: number;
    url_imagen: string; 
}

