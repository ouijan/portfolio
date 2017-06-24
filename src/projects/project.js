import Image from './../images/image';
import angular from 'angular';

export default class Project {
	
	constructor(data) {
		angular.merge(this, data);
		
		this.icon = new Image(this.icon);
		this.images = this.images.map((image) => {
			return new Image(image);
		});
	}

}