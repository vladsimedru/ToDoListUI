import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './toDoList/toDoList.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toDoList/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { ToDoListDetailsComponent } from './toDoList/toDoListDetails/to-do-list-details/to-do-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TaskComponent,
    HomeComponent,
    FooterComponent,
    ToolbarComponent,
    ToDoListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'to-do-lists/favorites', component: FavoritesComponent },
      { path: 'to-do-lists/:id', component: ToDoListDetailsComponent},
      { path: '**', component: NotFoundComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
