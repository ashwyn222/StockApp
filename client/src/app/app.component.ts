import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  symbols: any[];
  stockList: any;
  selectedStockData: any;
  search_term: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.symbols = ['AAPL', 'GOOG', 'MICR', 'TESL'];
  }

  getData(symbol: string) {
    this.selectedStockData = this.http.post<any>('http://localhost:5000/getdata', {'symbol': symbol});
  }

  getStockList() {
    let token = 'PXhqoylTBvdkWJDk1xTl8rSZ0fVJjPBOFFE1iZUttS41j1uyMTmgozeP8CaN';
    this.stockList = this.http.get<any>(`https://www.worldtradingdata.com/api/v1/stock_search?search_term=${this.search_term}&api_token=${token}`);
  }
}
