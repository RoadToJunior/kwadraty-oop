class AddNumber {
  constructor(selector, startNumber, step) {
    this.btn = document.querySelector(selector);
    this.number = startNumber;
    this.step = step;
    this.btn.addEventListener("click", this.addElement.bind(this));
  }
  addElement() {
    const div = document.createElement("div");
    div.textContent = this.number;
    this.number += this.step;
    document.body.appendChild(div);
  }
}
