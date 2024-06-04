//class with real world example

class Task {
  //Properties
  private id: number;
  private title: string;
  private desc: string;
  private dueDate: Date;
  private completed: boolean;

  // //constructor
  // constructor(id: number, title: string, desc: string, dueDate: Date) {
  //   this.id = id;
  //   this.title = title;
  //   this.desc = desc;
  //   this.dueDate = dueDate;
  //   this.completed = false;
  // }

  constructor(taskInfo: {
    id: number;
    title: string;
    desc: string;
    dueDate: Date;
  }) {
    this.id = taskInfo.id;
    this.title = taskInfo.title;
    this.desc = taskInfo.desc;
    this.dueDate = taskInfo.dueDate;
    this.completed = false;
  }
  //method to mark the task as completed
  public compelted() {
    this.completed = true;
  }

  //method to mark the task as not completed
  public notCompleted() {
    this.completed = false;
  }
}

const task1 = new Task({
  id: 1,
  title: 'lspp day4 task',
  desc: 'need to finish the oop in ts',
  dueDate: new Date('2024-06-04'),
});

const task2 = new Task({
  id: 2,
  title: 'log of lspp',
  desc: 'finish the log',
  dueDate: new Date('2024-06-05'),
});
task1.compelted();
console.log(task1);
console.log(task2);
