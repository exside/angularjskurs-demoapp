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
    };

    this.addTask = function(task) {
        console.log(task);
        if(task) {
            this.tasks.push({
                name: task,
                done: false
            })
        }
    };

    this.removeDone = function() {
        this.tasks = this.tasks.filter(function(t) {
            return !t.done;
        });
    };
}