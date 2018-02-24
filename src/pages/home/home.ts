import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';
import { ToastController } from 'ionic-angular';
import { PanierPage } from '../panier/panier';
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

  update(thispizza) {
    this.navCtrl.push(ModificationPage, {
      var1: thispizza
    });
  }

  delete(thispizza) {
    this.pizza.delete(thispizza.id).then((item) => {
      this.getHome();
    });
    this.popup("Vous avez supprimé " + thispizza.name + " du menu");
  }

  popup(message) {
    let toast = this.toastCrtl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });

    toast.present();
  }

  panier(thispizza) {
    this.paniersection.push(thispizza);
    this.popup("Vous avez ajouté " + thispizza.name + " à votre panier");
  }

  add() {
    this.navCtrl.push(AddPage);
    this.popup("Vous avez ajouté une pizza au menu");
  }

  panierCheck() {
    this.navCtrl.push(PanierPage, {
      var1: this.paniersection
    });
  }

  ionViewDidLoad() {
    console.log('Ion View loaded');
  }

}
