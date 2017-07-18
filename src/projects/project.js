import Image from './../images/image';
import angular from 'angular';

export default class Project {
	
	constructor(data) {
		angular.merge(this, data);
		
		this.icon = new Image(this.icon);

		if (this.images) {
			this.images = this.images.map((image) => new Image(image));	
		}
	}

}