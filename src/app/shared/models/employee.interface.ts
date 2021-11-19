//export type Roles = "RECEPCIONISTA" | "ADMINISTRDOR" | "FOTOGRAFO";


export interface Employee{
    id: number;
    correo: string;
    nombre: string;
    ape_pat: string;
    ape_mat: string;
    contrasena: string;
    celular: number;
    fech_nac: Date;
    rol_id: number;
    direccion: string;
}

export interface EmployeeResponse extends Employee{
    activo: number;
    usuario_registrado_id: number;
    fecha_registro: Date;
    fecha_modificacion?: Date;
    usuario_modificacion_id?: number;
    

}