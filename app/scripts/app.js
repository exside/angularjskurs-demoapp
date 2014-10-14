'use strict';

function KursController() {
    this.name = "Daniel";

    this.tasks = [{
        name: 'Abwaschen', done: false
    }, {
        name: 'Putzen', done: true
    }];

    this.sayHello = function() {
        alert(this.name);
    }
}