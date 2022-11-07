import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {

    }
    async login(user: any):Promise<any> {
        if(user) {
            return {
                access_token: this.jwtService.sign({
                    user: user.id, sub: 1
                })
            }
        } else {
            return {
                access_token:''
        }
    }
    }
    
    logout() {
        
    }
}