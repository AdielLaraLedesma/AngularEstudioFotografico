
export interface Marco {
    /** Indica que el campo userId no es requerido **/
    /** "userId"?: number **/
    id: number;
    nombre: string;
    precio: number;
    usuario_registro_id?: number;
    usuario_modificacion_id?: number;
    
}