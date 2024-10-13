import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImpressumComponent } from './legal/impressum/impressum.component';
import { PrivacyComponent } from './legal/privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
