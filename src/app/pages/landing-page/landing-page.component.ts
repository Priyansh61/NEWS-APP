import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/services/get-news.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private getnews : GetNewsService) { }

  async ngOnInit(): Promise<void> {
    console.log(await this.getnews.getNews())
  }

}
