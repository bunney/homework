class PraiseButton {
    constructor(msg) {
        this.msg = 0;
    }
    count() {
        return this.msg = this.msg >= 10 ? this.msg = 10 : this.msg += 1;
    }
    tipsBox() {
        let str = $("<span class='num'></span>");
        $('.thumb').append(str);
        let countNum = this.count();
        str.html('+' + countNum);
        str.css({
            "position": "absolute",
            "z-index": 9999,
            "font-size": '12px',
            "line-height": '36px',
            "color": '#ff0000'
        });
        str.animate({
            "font-size": 36,
            "opacity": 0
        }, 500, function() {
            str.remove();
        });
    }

}
export default class Thumb extends PraiseButton {

}