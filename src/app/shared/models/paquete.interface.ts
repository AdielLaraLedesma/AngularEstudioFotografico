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
    marco_nombre?: string;
    tamano_id: number;
    tamano_nombre?: string;
    precio: number;
    tipo_paquete_id: number;
    tipo_paquete_nombre: string;
    url_imagen: string; 
}

