export default {
    init() {
        $(document).on('mouseenter', '.mode > div', e => {
            if (e.originalEvent.sourceCapabilities.firesTouchEvents) return;
        
            const $el = $(e.currentTarget);
            setTimeout(() => $el.css('transition', 'none'), 100);
            $el.parent('.mode').css('transform', 'translateZ(0) scale(1.03)');
        });
        
        $(document).on('mousemove', '.mode > div', e => {
            if (e.originalEvent.sourceCapabilities.firesTouchEvents) return;
        
            const $el = $(e.currentTarget);
        
            var ax = (e.pageX - $el.offset().left - $el.outerWidth() / 2) / 20;
            var ay = -(e.pageY - $el.offset().top - $el.outerHeight() / 2) / 20;
        
            $el.css('transform', `rotateY(${ax}deg) rotateX(${ay}deg)`);
        });
        
        $(document).on('mouseleave', '.mode > div', e => {
            if (e.originalEvent.sourceCapabilities.firesTouchEvents) return;
        
            const $el = $(e.currentTarget);
            $el.parent('.mode').css('transform', '');
            $el.css({
                transition: 'transform .2s ease',
                transform: ''
            });
        });
        
        $(document).on('click', 'aside', e => {
            $(e.currentTarget).toggleClass('open');
        });        
    }
}