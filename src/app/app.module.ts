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
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { FlexLayoutModule } from "@angular/flex-layout";
import { PostComponent } from './post/post.component';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';
import { API_BASE_URL, PostService } from './serivces/post.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PostInterceptor } from './serivces/post.interceptor';
import { PostCreateComponent } from './post-create/post-create.component';

import { ReactiveFormsModule } from '@angular/forms'

export function getBaseUrl(): string {
  return 'https://jsonplaceholder.typicode.com';
}

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainComponent,
    PostsComponent,
    PostCreateComponent,    
  ],
  imports: [
        // Angular    
        BrowserModule,    
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        ReactiveFormsModule,
    
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
        MatMenuModule,
        MatChipsModule,
        MatSelectModule
  ],
  providers: [ 
    PostService,

    //{ provide: API_BASE_URL, useFactory: getBaseUrl },
    { provide: API_BASE_URL, useValue: environment.apiRoot },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: PostInterceptor,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
