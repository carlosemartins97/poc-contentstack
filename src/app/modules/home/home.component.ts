import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/core/models/contentstack.model';
import { ContentStackService } from 'src/app/core/services/content-stack/content-stack.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageData: HomePage;

  constructor(private contentstack: ContentStackService) { }

  ngOnInit(): void {
    this.contentstack.stack().ContentType('home_page').Entry('bltc11b11b37a7ec145').fetch().then(res => {
      this.pageData = res.toJSON();
      console.log(this.pageData)
    }).catch(e => {
      console.log(e)
    })
  }

}
