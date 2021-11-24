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
    estatus_id: number;
    pago_id: number;
    activo: boolean;
    usuario_registro_id: number;
    fecha_registro: number;
    fecha_modificacion?: Date;
    usuario_modificacion_id?: number;

}