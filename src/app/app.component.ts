import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
interface TD {
  "Meta Data":          MetaData;
  "Time Series (5min)": { [key: string]: TimeSeries5Min };
}

interface MetaData {
  "1. Information":    string;
  "2. Symbol":         string;
  "3. Last Refreshed": Date;
  "4. Interval":       string;
  "5. Output Size":    string;
  "6. Time Zone":      string;
}

interface TimeSeries5Min {
  "1. open":   string;
  "2. high":   string;
  "3. low":    string;
  "4. close":  string;
  "5. volume": string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend-Angular-Developer-Assignment-Test';
  metaData:any;
  TimeData:any=[];
  constructor(
    private service: ServiceService,
   
  ) { }
  Tdata:{ [key: string]: TimeSeries5Min };

  ngOnInit(): void {
    
    
    this.service.getEnabledList().subscribe((data:TD)=>{
     
      this.Tdata=data['Time Series (5min)']
      for (const i in this.Tdata) {
        this.TimeData.push(i)
      }
      })  
  }
}
