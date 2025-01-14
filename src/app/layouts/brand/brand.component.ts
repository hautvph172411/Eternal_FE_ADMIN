import {Component, OnInit} from '@angular/core';
import {BrandService} from "../../service/brand.service";
import {FormGroup,FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  branData: any;
  saveresp: any;
  messageclass = '';
  message = '';
  EditData: any;

  constructor(private service: BrandService) {
    this.loadAll();
  }

  ngOnInit(): void {
  }

  loadAll() {
    this.service.getAllBrand().subscribe(result => {
      this.branData = result;
    });
  }

  brandFrom = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  savebrand() {
    if (this.brandFrom.valid) {
      this.service.saveBrand(this.brandFrom.value).subscribe(result => {
        this.saveresp = result;
        if (this.saveresp!=null) {
          this.loadAll()
          this.message = "saev succes"
          this.messageclass = "success"
        } else {
          this.message = "save feu"
          this.messageclass = 'ero'
        }
      });
    } else {
      this.messageclass = "phe enter valid"
      this.messageclass = 'ero'
    }
  }

  get name() {
    return this.brandFrom.get('name');
  }
}
