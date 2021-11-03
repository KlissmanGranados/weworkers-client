import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { MultiDropdown } from 'src/app/core/models/filters.model';

@Component({
  selector: 'app-multi-dropdown',
  templateUrl: './multi-dropdown.component.html',
  styleUrls: ['./multi-dropdown.component.css']
})
export class MultiDropdownComponent implements OnInit, OnChanges{
  @Input() items: MultiDropdown[] = [];
  @Input() placeholder: string;
  @Input() showSearch = true;
  @Input() showAll = true;
  @Input() showStatus = true;
  @Input() showError = false;
  @Input() type: string = '';
  @Output() itemChange = new EventEmitter<MultiDropdown>(null);
  private searchText = '';

  filtered: MultiDropdown[] = [];

  all: MultiDropdown = {
    id: null,
    name: 'Todas las opciones',
    checked: false,
    visible: true
  };

  get search(): string {
    return this.searchText;
  }

  set search(searchText: string) {
    this.searchText = searchText;

    const search = this.searchText.toLowerCase();
    if (!search) {
      this.filtered = [...this.items];
      this.all.visible = true;
      return;
    }
    this.filtered = this.items.filter(i => i.name.toLowerCase().indexOf(search) !== -1);
    if (this.all.name.toLowerCase().indexOf(search) !== -1) {
      this.all.visible = true;
    } else {
      this.all.visible = false;
    }
  }

  get selected(): string {
    return this.all && this.all.checked ? this.all.name :
    this.items.filter(i => i.checked && i.visible).map(i => i.name).join(', ');
  }

  get isEmpty(): boolean {
    return this.filtered.filter(i => i.visible).length === 0;
  }

  get checked(): number {
    return this.items.filter(i => i.checked).length;
  }

  constructor() {}

  ngOnChanges(){
    if(this.items.length !== 0){
      this.items.map(item => {
        item.checked = item.checked || false;
        item.visible = item.visible || true;
      });

      this.filtered = [...this.items];

      if (!this.filtered.length) {
        this.all.visible = false;
      }
    }
  }

  ngOnInit(): void{
    // console.log(this.type);
  }

  trackByid(index: number, item: MultiDropdown): number {
    return item.id;
  }

  onChange($event: any, item: MultiDropdown): void {
    const checked = $event.target.checked;
    const index = this.items.findIndex(i => i.id === item.id);

    if (item.id === null) {
        this.all.checked = checked;
        for (const iterator of this.items) {
            iterator.checked = checked;
        }
    } else {
        this.items[index].checked = checked;

        /* istanbul ignore else*/
        if (this.all) {
            /* istanbul ignore else*/
            if (this.all.checked) {
                this.all.checked = false;
            }
            const allChecked = this.items.filter(i => i.id !== null).every(i => i.checked);
            this.all.checked = allChecked;
        }
    }

    this.itemChange.emit(item);
  }
}
