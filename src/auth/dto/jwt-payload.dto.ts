export class JwtPayLoadDTO {
    sub: number;
    email: string;
    iat?: number;
    exp: number;
}