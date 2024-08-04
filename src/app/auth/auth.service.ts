import { Inject, Injectable, InjectionToken, inject } from "@angular/core";
import { AuthData } from "./auth-data";
import { User } from "./user.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    private user:User
    constructor(private router: Router){
    }

    authchange = new Subject<boolean>() 

    registerUser(AuthData:AuthData){
        this.user = {
            email: AuthData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccesfully
    }

    login(AuthData:AuthData){
        this.user = {
            email: AuthData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccesfully
    }

    logout(){
        this.authchange.next(false)
        this.router.navigate(['/login'])
    }

    getuser(){
        return { ...this.user };
    }

    isAuth(){
        return this.user != null
    }

    private authSuccesfully(){
        this.authchange.next(true)
        this.router.navigate(['/training'])
    }
}

