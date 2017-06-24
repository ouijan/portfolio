import angular from 'angular';

export default class Image {

	constructor(name) {
		this.name = name;
		this.url = `assets/images/${this.name}`;
	}

}