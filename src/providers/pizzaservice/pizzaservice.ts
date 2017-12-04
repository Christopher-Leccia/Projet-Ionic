import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../models/pizza';

/*
  Generated class for the PizzaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Pizzaservice {

	private readonly url = "http://10.13.0.248:3000/pizza/";

	results: string[];

  	constructor(private http: HttpClient) {
    	console.log('Hello PizzaserviceProvider Provider');
  	}

  	sayHello(id:number){
  		console.log("sayHello('" + id + "')");
  	}

  	get(){
  		let rt: Array<Pizza> = new Array<Pizza>();
  		return new Promise<Array<Pizza>>(resolve=> {
  			this.http.get(this.url).subscribe((data:Array<any>) =>{
    			for(let i = 0; i<data.length; i++){
      				rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'],data[i]['price']))
   				}
   				resolve(rt);
   				console.log(data);
  			})
  		})
	}
}
