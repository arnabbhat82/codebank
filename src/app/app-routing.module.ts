import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDataFromUrlComponent } from './get-data-from-url/get-data-from-url.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';

const routes: Routes = [
  { path: 'get-data-from-url', component: GetDataFromUrlComponent },
  { path: 'component-communication', component: ComponentCommunicationComponent },
  { path: '', redirectTo: '/get-data-from-url', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
