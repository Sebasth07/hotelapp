export interface hotel {
    id?: number;
    name?: string;
    email?: string;
    rol_id?: number;
    estado?: number;
    superadmin?: number;
    
}

export interface country{
    id?:number;
    nombre?: string;
}

export interface state{
    id?:number;
    nombre?: string;
    pais_id?: number;
}

export interface city{
    id?:number;
    nombre?: string;
    departamento_id?: number;
}