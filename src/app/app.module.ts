import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
import { QuestionCursorImplementationService } from './question-cursor-implementation.service'; 
import { CollectionEditorLibraryModule, EditorCursor } from '@project-sunbird/sunbird-collection-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollectionEditorLibraryModule
  ],
  providers: [
    { provide: QuestionCursor, useExisting: QuestionCursorImplementationService },
    { provide: EditorCursor, useExisting: QuestionCursorImplementationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
