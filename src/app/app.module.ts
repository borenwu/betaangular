import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { MainsidebarComponent } from './mainsidebar/mainsidebar.component';
import { ContentwrapperComponent } from './contentwrapper/contentwrapper.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { ControlsidebarComponent } from './controlsidebar/controlsidebar.component';
import { OrderviewComponent } from './routerviews/order/orderview/orderview.component';
import { SalesviewComponent } from './routerviews/finance/salesview/salesview.component';
import { TaskviewComponent } from './routerviews/work/taskview/taskview.component';
import { WarehouseviewComponent } from './routerviews/warehouse/warehouseview/warehouseview.component';
import { HomeviewComponent } from './routerviews/home/homeview/homeview.component';
import { DemotestComponent } from './routerviews/demotest/demotest/demotest.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'order', component: OrderviewComponent },
  { path: 'task', component: TaskviewComponent },
  { path: 'sale', component: SalesviewComponent },
  { path: 'warehouse', component: WarehouseviewComponent },
  { path: 'home', component: HomeviewComponent },
  { path: 'demotest', component: DemotestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    MainsidebarComponent,
    ContentwrapperComponent,
    MainfooterComponent,
    ControlsidebarComponent,
    OrderviewComponent,
    SalesviewComponent,
    TaskviewComponent,
    WarehouseviewComponent,
    HomeviewComponent,
    DemotestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
