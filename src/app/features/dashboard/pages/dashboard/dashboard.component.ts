import { Component, Inject, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { WeatherService } from '../../../../core/services/weather.service';
@Component({
  selector: 'app-dashboard',
  imports: [BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  public lineChartType: ChartType = 'line';
  weatherData: any;
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [850, 920, 1450, 1320, 1860, 1740, 1950],
        label: 'KG Recolectados',
        fill: true,
        tension: 0.4,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.15)',
        pointBackgroundColor: '#22c55e',
        pointBorderColor: '#22c55e',
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: '#94a3b8',
        },
        grid: {
          color: 'rgba(255,255,255,0.05)',
        },
      },

      y: {
        ticks: {
          color: '#94a3b8',
        },
        grid: {
          color: 'rgba(255,255,255,0.05)',
        },
      },
    },
  };
  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.weatherService.getCurrentWeather().subscribe((data: any) => {
      this.weatherData = data;
    });
  }
  getWeatherIconClass(code: number): string {
    if (code === 0) {
      return 'bi bi-brightness-high-fill';
    }

    if ([1, 2, 3].includes(code)) {
      return 'bi bi-cloud-sun-fill';
    }

    if ([45, 48].includes(code)) {
      return 'bi bi-cloud-fog-fill';
    }

    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
      return 'bi bi-cloud-rain-heavy-fill';
    }

    if ([95, 96, 99].includes(code)) {
      return 'bi bi-cloud-lightning-rain-fill';
    }

    return 'bi bi-cloud-fill';
  }
}
