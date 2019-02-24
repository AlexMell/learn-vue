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

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.item }}</li>'
})

var app8 = new Vue ({
    el: "#app8",
    data: {
        items: [
            { id: 0, item: "item1" },
            { id: 1, item: "item2" },
            { id: 2, item: "item3" },
        ],
    }
})

var app9 = new Vue ({
    el: "#app9",
    data: {
        message: "Title",
        msg: "Hello msg",
        sizeToggle: false,
        isRounded: false,
        disabled: false,
        fontColor: "#ccc",
        backgroundColor: "#fc9"
    },
    computed: {
        styles: function() {
            return {
                color: this.fontColor,
                backgroundColor: this.backgroundColor
            }
        }
    }
    
})


var data10 = {
    value: 'value1',
    anotherValue: 'value2',
}

Object.freeze(data10)

var app10 = new Vue ({
    el: "#app10",
    data: data10
});

app10.$watch('value', function (newValue) {
//    Object.freeze(data10)
});

console.log(app10.$data === data10);

var app11 = new Vue ({
    data: {
        a: 1
    },
    created: function () {
        console.log('I"m ' + this.a);
    }
});

Vue.component('task', {
    template: '<div style="margin-bottom: 5px;">Im Task Hello 123</div>'
})

var app12 = new Vue ({
    el: '#app12',
});

Vue.component('task', {
    template: '#task'
});

var app13 = new Vue ({
    el: '#app13'
});

Vue.component('comp', {
    template: '<h1>{{ message }}</h1>',
    props: ['message']
});

var app14 = new Vue ({
    el: '#app14',
});

Vue.component('books', {
    template: 'books',
    props: ['author', 'title', 'descr']
});

var app15 = new Vue ({
    el: '#app15',
    data: {
        author: 'David Flangan asd asd ',
        title: 'Title Book',
        descr: 'Descriptio Book'
    }
});

var app16 = new Vue ({
    el: '#app16',
    data: {
        show: false
    }
});

const Home = {
    template: '<h1>Home</h1>'
}

const About = {
    template: '<h1>About</h1>'
}

const Blog = {
    template: '<h1>Blog</h1>'
}

const routes = [
    {path: '/home', component: Home},
    {path: '/about', component: About},
    {path: '/blog', component: Blog}
]

const router = new VueRouter ({
    routes
})

var app17 = new Vue ({
    router
}).$mount('#app17');

var app18 = new Vue ({
    el: '#app18',
    data: {
        title: "Task list",
        items: [
            { text: 'First'},
            { text: 'Second'},
            { text: 'Third'},
            { text: 'Fourth'},
        ]
    },
    methods: {
        addItem: function () {
            var input = document.getElementById('itemForm');

            if (input.value !== '') {
                this.items.push({
                    text:input.value
                })
                input.value = '';
            } else {
                this.items.push({
                    text: 'No name task'
                })
            }
        },
        deleteTask: function (index) {
            this.items.splice(index, 1);
        },
        deleteAll: function () {
            this.items = []
        }
    }
});

var app19 = new Vue ({
    el: '#app19',
    data: {
        items: [
            'Home',
            'About',
            'Faq',
            'Map',
            'Contacts'
        ],
        show: false
    }
});

var app20 = new Vue ({
    el: '#app20',
    data: {
        title: 'Alex Mell Vue Education',
        buttonText: 'Reverse Message',
    },
    methods: {
        reverse: function () {
            this.title = this.title.split('').reverse().join('-');
        }
    }
});

var app21 = new Vue ({
    el: '#app21',
    data: {
        data: [0,1,2,3,4,5,6,7,8,9,10,11],
        perPage: 3,
        pagination: {}
    },
    computed: {
        collection() {
            return this.paginate(this.data);
        }
    },
    methods: {
        setPage(p) {
            this.pagination = this.paginator(this.data.length, p)
        },
        paginate(data) {
            return _.slice(data, this.paginate.startIndex, this.pagination.endIndex + 1)
        },
        paginator(totalItems, currentPage) {
            let startIndex = (currentPage - 1) * this.perPage,
                endIndex = Math.min(startIndex + this.perPage - 1, totalItems -1);

            return {
                currentPage: currentPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
            }

        }
    },
    created() {
        this.setPage(1)
    }
});

var app22 = new Vue ({
    el: "#app22",
    data: {
        showPass: false,
        password: '1a2bae2f',
        btnText: "Show/Hide Password",
    }
});

var app23 = new Vue ({
    el: "#app23",
});

