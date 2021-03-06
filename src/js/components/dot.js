import dot from 'dotdotdot';
import { $window, Resp, throttle } from '../modules/dev/helpers';

export default class Dot {
	
	constructor() {
    this.$el = $('.js-dot');
		this.init();
	}
	
	init() {
		$window.on('load', () => {
			this.initDot();
			this.onResize();
		});
	}
	
	onResize() {
		const reinitDot = throttle(() => {
			this.destroy();
			this.initDot();
		}, 250, this);

		$window.on('resize orientationchange', reinitDot);
	}
	
	initDot() {
		this.$el.dotdotdot();
	}
	
	destroy() {
		this.$el.trigger('destroy');
	}
}