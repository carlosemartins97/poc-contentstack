import { Component, OnInit } from '@angular/core';
import { PlansPage } from 'src/app/core/models/contentstack.model';
import { ContentStackService } from 'src/app/core/services/content-stack/content-stack.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  pageData: PlansPage;
  plansInformation: PlansPage;

  constructor(private contentstack: ContentStackService) { }

  ngOnInit(): void {
    this.contentstack.stack().ContentType('price').Entry('blt1da99f757f551afc').fetch().then(res => {
      this.pageData = res.toJSON();
      console.log(res.get('reference')[0])
      this.contentstack.stack().ContentType(res.get('reference')[0]._content_type_uid).Entry(res.get('reference')[0].uid).fetch().then(entry => {
        this.plansInformation = entry.toJSON();
      });
    }).catch(e => {
      console.log(e)
    })
  }

}
