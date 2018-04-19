import {Injectable } from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class QuoteService{
    //private http:any;
    public data:any;

    constructor(private http:Http){
        //this.http=http;
    }

    getQuotes(){
        this.http.get("http://localhost:8080/sports.json")
        .subscribe(
            res=>{
                this.data = res.json();
                console.log(this.data);
            },
            error=>{
                console.log(error);

            }
            );
            
    }
}