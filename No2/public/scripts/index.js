class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;

    }


    clickAction() {
        this.element.click(() => {
            $.ajax({
                url: "/index",
                type: "post",
                data: "{id:'1'}",
                dataType: "json",
                success: (res) => {
                    console.log(res)
                    if (res) {
                        this.element.css('-webkit-filter', 'grayscale(0)');
                        $('#animation').addClass('num');
                        this.num = add(this.num);
                        setTimeout(function() {
                            $('#animation').removeClass('num');
                        }, 1000);
                    }
                }
            })

        })
    }
}

class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
};

let f = new Thumb(0, $('#thumb'));
f.clickAction();