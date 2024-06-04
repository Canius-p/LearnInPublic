"use strict";
//class with real world example
class Task {
    // //constructor
    // constructor(id: number, title: string, desc: string, dueDate: Date) {
    //   this.id = id;
    //   this.title = title;
    //   this.desc = desc;
    //   this.dueDate = dueDate;
    //   this.completed = false;
    // }
    constructor(taskInfo) {
        this.id = taskInfo.id;
        this.title = taskInfo.title;
        this.desc = taskInfo.desc;
        this.dueDate = taskInfo.dueDate;
        this.completed = false;
    }
}
