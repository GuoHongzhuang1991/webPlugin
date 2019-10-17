function GalleryScroll(option){
	var _that=this;
	this.ele=$(option.ele);
	this.speed=option.speed||"normal";
	this.intervalId=null;
	this.leftOffset=0;
	this.init=function(){
		this.initEvent();
		this.startScroll();
	};
	this.initEvent=function(){
		$(this.ele).mouseenter(this.stopScroll);
		$(this.ele).mouseleave(this.startScroll);
	};
	this.startScroll=function(){
		_that.intervalId=setInterval(function(){
			$(_that.ele).find(".contentbox").css("margin-left",_that.leftOffset--);
			if(-(_that.leftOffset) > $(_that.ele).find('.item').outerWidth()){
				console.log(_that.leftOffset,$(_that.ele).find('.item').outerWidth());
				_that.trimItem($(_that.ele).find('.item:first-child'));
			}
		}, 10);
	};
	this.stopScroll=function(){
		clearInterval(_that.intervalId);
		_that.intervalId=null;
	};
	this.trimItem=function(ele){
		var trimInd=$(ele).clone();
		$(option.ele).find(".contentbox").append(trimInd);
		this.leftOffset=0;
		$(ele).remove();
		$(_that.ele).find(".contentbox").css("margin-left",0);
	};
	this.init();
}