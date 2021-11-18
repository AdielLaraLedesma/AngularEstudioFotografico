//export type Roles = "RECEPCIONISTA" | "ADMINISTRDOR" | "FOTOGRAFO";

export interface Employee{
    email: string;
    password: string;
}

export interface EmployeeResponse {
    id: number;
    correo: string;
    role: number;
}