import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'todo';

  constructor(private translateService: TranslateService) {
    translateService.use('tr');
    const list = [];
    list.push({language: 'tr', data: {
        'hello': 'merhaba',
        'home': 'ev',
        'Select Type': 'Type Seçiniz',
        'Title': 'Başlık',
        'Description': 'Açıklama',
        'Add': 'Ekle',
        'to do': 'yapılacaklar',
      }});
    this.setTranslations(list);
  }

  setTranslations(list) {
    list.forEach((item) => {
      this.translateService.setTranslation(item.language, item.data);
    });
  }
}
