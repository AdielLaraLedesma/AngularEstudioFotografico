import { NumberSymbol } from "@angular/common"

export interface ServicioEvento{
    id: number;
    cliente_id: number;
    fotografo_id: number;
    paquete_id: number;
    fecha_evento: Date;
    direccion: String;
    marco_id: number;
    total: number;
    no_Fotos_Dig: number;
    no_Fotos_Enm: number;
    no_Fotos_Fis: number;
    estatus_id: number;
    pago_id: number;
    activo: boolean;
    usuario_registro_id: number;
    fecha_registro: number;
    fecha_modificacion?: Date;
    usuario_modificacion_id?: number;
    nombre_cliente: string;
    celular_cliente: string;
    paquete_nombre: string;
    estatus_nombre: string;

}
