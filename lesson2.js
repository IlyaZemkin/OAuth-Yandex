//в режиме классов не обязательно писать в начале 'use strict'

class Rect {
    static #PRIVATE_STATIC_VALUE;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //Публичный метод
    calcArea() {
        return this.height * this.width;
    }

    static publicStaticMethod() {
        Rect.#PRIVATE_STATIC_VALUE = 40;
        return Rect.#PRIVATE_STATIC_VALUE;
    }

    //Статический метод
    static getConsole() {
        console.log('static')
    }

    //Приватный метод
    #privateMethod() {
        console.log('private');
    }

    get private() {
        this.#privateMethod();
    }
}

//Наследование, всегда от 1 класса
class Square extends Rect {
    constructor(width) {
        super(width, width);
    }

    text() {
        console.log(this);
    }
}

class plusDate extends Date {
    constructor() {
        super();
    }

    getLocalFormatedMonth() {
        var month = [
            'Январь', 'Февраль',
            'Март', 'Апрель',
            'Май', 'Июнь',
            'Июль', 'Август',
            'Сентябрь', 'Октябрь',
            'Ноябрь', 'Декабрь',
        ];

        return (
            this.getDate() + '/' + month[this.getMonth()] + '/' + this.getFullYear()
        )
    }
}

const st = new plusDate();
console.log(st.getLocalFormatedMonth());

// const rect = new Rect(10, 20);
// console.log (rect.calcArea());

// Rect.getConsole();
// rect.private();

//Приватный метод нельзя вызывать напрямую
//rect.#privateMethod();

const sqr = new Square(4);
console.log(sqr.calcArea());