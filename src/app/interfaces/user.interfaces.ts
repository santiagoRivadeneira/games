export default interface Usuario {
    id: string | null,
    correo: string | null,
    contraseña: string | null,
    isLogg: boolean;
    planId: number;
}