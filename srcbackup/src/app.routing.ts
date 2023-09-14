import { RouterModule,Routes } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "./app/pages/home/home.component";

const routes:Routes=[
    {path:'home',component:HomeComponent}
];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);