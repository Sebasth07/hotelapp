import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, BehaviorSubject, Observable  } from "rxjs";
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthService{
    
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    private loginUrl: any;
    
    constructor(private httpClient: HttpClient, private router: Router){
        this.loginUrl = 'http://13.50.47.16/api/login';
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    async login(formValue: any,) {
        return  this.httpClient.post<any>(`${this.loginUrl}`, formValue,)
            .subscribe(data => {
                if (data.token) {
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.currentUserSubject.next(data);
                this.router.navigate(['/dashboard']);
                }
                console.log(this.currentUser);
            });
    }

    logout(){
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}