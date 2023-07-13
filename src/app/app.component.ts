import { Component } from '@angular/core';
import { collectionEditorConfig } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPro';
  public editorConfig: any = collectionEditorConfig;

  editorEventListener(event){
    console.log('event value is ',event);

  }
}
