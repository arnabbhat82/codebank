import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDataFromUrlComponent } from './get-data-from-url/get-data-from-url.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { BasicCrudRestApiComponent } from './basic-crud-rest-api/basic-crud-rest-api.component';
import { BasicFormCrudComponent } from './basic-form-crud/basic-form-crud.component';
import { ArrayOperationsComponent } from './array-operations/array-operations.component';

const routes: Routes = [
  { path: 'get-data-from-url', component: GetDataFromUrlComponent },
  { path: 'component-communication', component: ComponentCommunicationComponent },
  { path: 'basic-crud-rest-api', component: BasicCrudRestApiComponent },
  { path: 'basic-form-crud', component: BasicFormCrudComponent },
  { path: 'array-operations', component: ArrayOperationsComponent },
  { path: '', redirectTo: '/array-operations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
