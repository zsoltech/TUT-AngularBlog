import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FlexLayoutModule } from "@angular/flex-layout";
import { PostComponent } from './post/post.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainComponent,
    UserComponent,
    PostsComponent
  ],
  imports: [
        // Angular    
        BrowserModule,    
        BrowserAnimationsModule,
        FlexLayoutModule,
    
        //App
        AppRoutingModule,
    
        // Material
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
