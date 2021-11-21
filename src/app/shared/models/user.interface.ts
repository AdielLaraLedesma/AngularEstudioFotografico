export interface User{
    correo: string;
    contrasena: string;
}
export interface UserResponse extends User{
    id: number;
    nombre: string;
    ape_pat?: string;
    ape_mat?: string;
    celular: string;
    direccion: string;
    fech_nac?: Date;
    activo: number;
    rol_id: number;
    usuario_registrado_id: number;
    fecha_registro: Date;
    fecha_modificacion?: Date;
    usuario_modificacion_id?: number;
    url_imagen: string;
    

}