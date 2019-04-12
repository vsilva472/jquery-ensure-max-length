;( function ( $, undefined ) {
	var defaults = { 
		limit: 100,	
		cssClass: '',
		separator: '/',
		placement: null
	};
	
	function Plugin ( element, options ) {
		this.element = $( element );
		this.options = $.extend( {}, defaults, options );
		this.$counter = $( '<small />' ).addClass( this.options.cssClass );
		this.init();
	}
	
	Plugin.prototype.init = function () {
		var _self = this;
		
		this.showCount();
		this.addMaxlengthAttribute();
		this.element.on( 'keyup blur', function () {
			_self.checkLength.call( _self, this );
		});
	};
	
	Plugin.prototype.addMaxlengthAttribute = function () {
		this.element.attr('maxlength', this.options.limit);
	};
	
	Plugin.prototype.showCount = function () {	
		if ( this.options.placement ) this.$counter.appendTo( this.options.placement );
		else this.$counter.insertAfter( this.element );

		this.checkLength();
	};
	
	Plugin.prototype.updateCountData = function ( count ) {
		var text = count + this.options.separator + this.options.limit;
		this.$counter.text( text );
	};
	
	Plugin.prototype.checkLength = function () {
		var val = this.element.val(), count = val.length;
		
		if ( count > this.options.limit ) {
			this.element.val( val.substring( 0, this.options.limit ) );
			count = this.options.limit;
		}
		
		this.updateCountData( count );
	};
	
	$.fn.EnsureMaxLength = function ( options ) {
		return this.each( function () {
			if ( ! $.data( this, "plugin" ) ) {
				$.data( this, "plugin", new Plugin( this, options ) );
			}
		});
	};
} ( jQuery ));