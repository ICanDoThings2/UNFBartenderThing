// JavaScript source code
const drinks = [
    {

    },

]

const orderView = new OrderView();
const orderApp = new orderCtrl(orderView)

class orderCtrl {
    constructor(orderView) {
        this.orderView = orderView;
    }

    init() {
        this.orderView.init();
    }

    getOrders() {
        return ""
    }

    renderOrders()
    {

    }

    addCurOrder()
    {

    }
}

class orderView {
    init() {

        console.log("Yes, I'm working.");
    }
}

orderApp.init();