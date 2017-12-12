var app = new Vue({
    el: '#option',
    data: {
        picked: '10',
        editions: [
            { price: 10, text: 'Product Home Edition' },
            { price: 20, text: 'Product Pro Edition' },
            { price: 50, text: 'Product Unlimited Edition' }
        ]
    }
})