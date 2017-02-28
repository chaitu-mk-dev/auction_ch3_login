import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'auction-product-page',
  template: `<div>
  		<img src="http://placehold.it/820x320" alt="">
  		<h4>Product Details Component for product : {{productTitle}}</h4>
  		</div>`
})
export default class ProductDetailComponent {
	productTitle: String;
	
	constructor(route: ActivatedRoute) {
		this.productTitle = route.snapshot.params['productTitle'];
	}
}
