import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { DetailUserComponent } from './detail-user.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes =[{
    path: '',
    component: DetailUserComponent
}]

const COMMON_IMPORTS = [
    CommonModule,
    FlexLayoutModule
];
const COMMON_DECLARATIONS = [DetailUserComponent];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class DetailUserModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}