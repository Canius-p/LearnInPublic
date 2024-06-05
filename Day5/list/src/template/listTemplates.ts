import fullList from '../model/fullList';

interface DomList {
  ul: HTMLUListElement;
  clearList: () => void;
  render(fullList: fullList): void;
}

export default class ListTempalte implements DomList {
  ul: HTMLUListElement;
  private constructor() {
    this.ul = document.querySelector('ul')!;
  }
  clearList(): void {
    this.ul.innerHTML = '';
  }
  render(fullList: fullList): void {
    this.clearList();
    fullList.list.forEach(item => {
      this.ul.innerHTML += `<li class="item">
                    <input type="checkbox" id="${item.id}">
                    <label for="${item.id}">${item.items}</label>
                    <button class="button">X</button>
                </li>`;
    });
  }
}
