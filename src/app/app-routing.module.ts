import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album/album.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home/home.component';
import { PhotosComponent } from './photos/photos/photos.component';

const routes: Routes = [

  { path : 'albums',      component : AlbumComponent,  canActivate : [AuthenticationGuard]},
  { path : 'photos/:id',  component : PhotosComponent, canActivate : [AuthenticationGuard]},
  { path : '',            component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
