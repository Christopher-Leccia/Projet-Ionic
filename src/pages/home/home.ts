import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';
import { ToastController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { ModificationPage } from '../modification/modification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage = HomePage;
  paniersection = new Array<Pizza>();
  mypizza: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizza: Pizzaservice, private toastCrtl: ToastController) {
    this.getHome();
    this.pizza.getById(3).then((item: any) => {
    });
  }

  getHome() {
    this.pizza.get().then((items: Array<any>) => {
      this.mypizza = items;
    });
  }

  /*Ajout Pizza*/
   add() {
    this.navCtrl.push(AddPage);
    this.popup("Vous avez ajouté une pizza au menu");
  }

  /* Modification pizza*/
  update(thispizza) {
    this.navCtrl.push(ModificationPage, {
      var1: thispizza
    });
  }

  /*Suppresion Pizza*/
  delete(thispizza) {
    this.pizza.delete(thispizza.id).then((item) => {
      this.getHome();
    });
    this.popup("Vous avez supprimé " + thispizza.name + " du menu");
  }

  /*Affichage du message en fonction de l'action*/
  popup(message) {
    let toast = this.toastCrtl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });

    toast.present();
  }




  ionViewDidLoad() {
    console.log('Ion View loaded');
  }

}
