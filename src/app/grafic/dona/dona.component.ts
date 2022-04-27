import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/bar/bar.component';
import { AppconfigService } from 'src/app/service/appconfig.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  data: any;

    chartOptions: any;

    subscription: Subscription;

    config: AppConfig;

    constructor(private configService: AppconfigService) {}

    ngOnInit() {
        this.data = {
            labels: ['Juan','Bradro','Carla'],
            datasets: [
                {
                    data: [55, 50, 12],
                    backgroundColor: [
                        "#008cff",
                        "#e81919",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#ffeedd",
                        "#5fff2a",
                        "#1f5767"
                    ]
                }
            ]
        };

        this.config = this.configService.config;
        this.updateChartOptions();
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
    }

    updateChartOptions() {
        this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
    }

    getLightTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#008cff'
                    }
                }
            }
        }
    }

    getDarkTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        }
    }
}
