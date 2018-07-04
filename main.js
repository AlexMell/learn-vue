// First One
var app1 = new Vue({
    el: "#app1",
    data: {
        message: "Hello World!",
        seen: true
    },
});

app1.message = "Hello World:" + new Date().toLocaleString();
app1.seen = false

var app2 = new Vue({
    el: "#app2",
    data: {
        items: [
            {text: 'text1'},
            {text: 'text2'},
            {text: 'text3'},
            {text: 'text4'},
        ]
    }
});

app2.items.push({ text: 'new element' });

var app3 = new Vue({
    el: "#app3",
    data: {
        message: 'Это сообщение поменяет порядок букв',
    },
    methods: {
        revertMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        message: "True",
        show: true,
    },
});

var app5 = new Vue ({
    el: "#app5",
    data: {
        checked: true
    }
});

var app6 = new Vue ({
    el: "#app6",
    data: {
        count: 0,
    },
    methods: {
        countUp: function () {
            this.count += 1;
        },
        countDown: function () {
            this.count -= 1;
        },
        resetCount: function () {
            this.count = 0;
        },
        countHudred: function () {
            this.count +=100;
        }
    }
});

var app7 = new Vue ({
    el: "#app7",
    data: {
        url: "",
        cleanUrl: ""
    },
    methods: {  
        cleanerUrl: function () {
            this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/,'')
        }
    }
});
