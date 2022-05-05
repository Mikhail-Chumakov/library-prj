class Books {
  constructor(name, autor, pages, status) {
    this.name = name;
    this.autor = autor;
    this.pages = pages;
    this.status = status; 
  }
  info() {
    console.log(`
    книга: ${this.name}, 
    автор: ${this.autor}, 
    кол-во страниц: ${this.pages}, 
    прогресс: ${this.status}
    `);
  }
}
let bookHobbit = new Books("Хоббит", "Толкиен", "300", "в процессе прочтения");

console.log(bookHobbit.name);
bookHobbit.info();