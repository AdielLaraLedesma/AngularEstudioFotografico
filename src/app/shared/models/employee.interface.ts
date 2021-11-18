//export type Roles = "RECEPCIONISTA" | "ADMINISTRDOR" | "FOTOGRAFO";


export interface Employee{
    correo: string;
    contrasena: string;
}

export interface EmployeeResponse extends Employee{
    id: number;
    nombre: string;
    app_pat: string;
    app_mat: string;
    fech_nac: Date;
    activo: number;
    rol_id: number;
    usuario_registrado_id: number;
    fecha_registro: Date;
    fecha_modificacion?: Date;
    usuario_modificacion_id?: number;
    

}