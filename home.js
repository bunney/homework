'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton(msg) {
        _classCallCheck(this, PraiseButton);

        this.msg = 0;
    }

    _createClass(PraiseButton, [{
        key: 'count',
        value: function count() {
            return this.msg = this.msg >= 10 ? this.msg = 10 : this.msg += 1;
        }
    }, {
        key: 'tipsBox',
        value: function tipsBox() {
            var str = $("<span class='num'></span>");
            $('.thumb').append(str);
            var countNum = this.count();
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
            }, 500, function () {
                str.remove();
            });
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb() {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).apply(this, arguments));
    }

    return Thumb;
}(PraiseButton);

exports.default = Thumb;
