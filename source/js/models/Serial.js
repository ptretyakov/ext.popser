'use strict';

import Backbone from 'backbone';

class Serial extends Backbone.Model{
	constructor(){
		super();
	}

	get defaults(){
		return {
			title : ''
		}
	}
}

export default Serial;