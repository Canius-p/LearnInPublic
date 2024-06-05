export interface Item {
  id: string;
  items: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string,
    private _items: string,
    private _checked: boolean
  ) {}
  get id(): string {
    return this._id;
  }
  get items(): string {
    return this._items;
  }
  get checked(): boolean {
    return this._checked;
  }
  set id(id: string) {
    this._id = id;
  }
  set items(items: string) {
    this._items = items;
  }
  set checked(checked: boolean) {
    this._checked = checked;
  }
}
