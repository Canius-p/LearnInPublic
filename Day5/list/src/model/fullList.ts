import ListItem from './listitem';

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class fullList implements List {
  static Instance: fullList = new fullList();
  private constructor(private _list: ListItem[] = []) {}
  get list(): ListItem[] {
    return this._list;
  }
  save(): void {
    localStorage.setItem('Mylist', JSON.stringify(this._list));
  }
  load(): void {
    const storedList: string | null = localStorage.getItem('Mylist');
    if (typeof storedList !== 'string') return;

    const parsedList: { _id: string; _items: string; _checked: boolean }[] =
      JSON.parse(storedList);
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._items,
        itemObj._checked
      );
      fullList.Instance.addItem(newListItem);
    });
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }
}
