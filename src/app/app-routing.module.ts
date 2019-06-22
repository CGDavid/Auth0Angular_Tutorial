import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PreciosComponent } from "./components/precios/precios.component";
import { ProtegidaComponent } from "./components/protegida/protegida.component";

import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "precios", component: PreciosComponent },
  { 
    path: "protegida", 
    component: ProtegidaComponent,
    canActivate: [ AuthGuardService ]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
