import Image from './../images/image';

export default class AboutController {
  
  /* @ngInject */
	constructor() {
		this.profile = new Image('profile.png');
		this.paragraphs = [
			`Creative wizard based in Sydney, that’s me! I specialise in Software 
			Development and web-based technologies but my creativity extends into 
			Digital Design, Digital Illustration and Branding. I've completed my 
			Bachelor of Design at the University of Western Sydney.`,
			`I'm a thinker and I am constantly challenging myself with personal and 
			professional projects as I strive to achieve the best possible standard. 
			I pride myself on my dedication to clean, pure and beautiful software 
			solutions. I am skilled in: PHP, Python, Javascript (Angular/ES6), Golang 
			and Dart; with experience using: MySQL, Git, Docker, Jenkins, Swagger and
			OpenStack. I also have working knowledge of networking and unix systems 
			having worked in a web hosting company for several years.`,
			`Design exists to honour content; I believe this is the key to effective 
			design solutions and is the base principle to all my work. I enjoy 
			bringing to life the ideas of the client and consider careful listening 
			tempered with solid design skills compulsory to successfully fulfilling 
			any creativebrief. With a particular focus on being user-friendly, I 
			always strive to produce the best possible user experience.`,
		];
	}

}