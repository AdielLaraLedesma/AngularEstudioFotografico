//export type Roles = "RECEPCIONISTA" | "ADMINISTRDOR" | "FOTOGRAFO";


export interface Employee{
    id: number;
    nombre: string;
    ape_pat?: string;
    ape_mat?: string;
    celular?: number;
    direccion?: string;
    correo: string;
    contrasena: string; //DEBERIA SET NOT NULL
    fech_nac?: Date;
    activo: number;
    rol_id: number;
    rol_nombre?: string;
    url_imagen: string; 
    usuario_registrado_id: number;
    fecha_registro: Date;
    fecha_modificacion?: Date;
    usuario_modificacion_id?: number;

}

