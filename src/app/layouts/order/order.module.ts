import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrderRouting} from "./order.routing";
import { TatcaComponent } from './tatca/tatca.component';
import { ChoxacnhanComponent } from './choxacnhan/choxacnhan.component';
import { DahuyComponent } from './dahuy/dahuy.component';
import { DanggiaoComponent } from './danggiao/danggiao.component';
import { DaGiaoComponent } from './da-giao/da-giao.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Material_module} from "../../../material_module";
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    TatcaComponent,
    ChoxacnhanComponent,
    DahuyComponent,
    DanggiaoComponent,
    DaGiaoComponent,
    ModalPopupComponent
  ],
    imports: [

        CommonModule,
        OrderRouting,

        Material_module,
        ReactiveFormsModule
    ]
})
export class OrderModule{}
