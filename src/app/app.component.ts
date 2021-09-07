
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { callbackify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DailyAffirmations';
  affirmationsData;
  affirmation;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let res = this.http.get('https://dulce-affirmations-api.herokuapp.com/affirmation/index');
    res.subscribe(data => {
      this.affirmationsData = data
      console.log(data);
      this.getRandomAffirmations()
    })

  }

  getRandomAffirmations() {
    let randomIndex = Math.floor(Math.random() * this.affirmationsData.length)

    // console.log(this);
    // console.log(this.affirmationsData[randomIndex].phrase)

    this.affirmation = this.affirmationsData[randomIndex].phrase

    let appComponentObj = this
    setTimeout(function () { appComponentObj.getRandomAffirmations(); }, 9000);
  }

}
