import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CurrencyPipe, DecimalPipe, NgFor, NgIf, NgClass } from '@angular/common';
import {
  IonContent,
  IonCard,
  IonList,
  IonItem,
  IonLabel,
  IonSkeletonText,
  IonButton,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { PortfolioService } from '../../core/services/portfolio.service';
import { PortfolioSummary } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    CurrencyPipe,
    DecimalPipe,
    AppHeaderComponent,
    IonContent,
    IonCard,
    IonList,
    IonItem,
    IonLabel,
    IonSkeletonText,
    IonButton,
    IonRefresher,
    IonRefresherContent,
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  loading = false;
  error: string | null = null;
  portfolio: PortfolioSummary | null = null;
  insights: string[] = [];
  readonly skeletonRows = [0, 1, 2];

  constructor(private portfolioService: PortfolioService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(event?: { target: { complete: () => void } }): void {
    this.loading = true;
    this.error = null;

    forkJoin({
      portfolio: this.portfolioService.getPortfolio(),
      insights: this.portfolioService.getInsights(),
    }).subscribe({
      next: ({ portfolio, insights }) => {
        this.portfolio = portfolio;
        this.insights = insights;
        this.loading = false;
        event?.target.complete();
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to load portfolio data. Please try again.';
        this.loading = false;
        event?.target.complete();
        this.cdr.detectChanges();
      },
    });
  }

  get dailyChangePercent(): number {
    if (!this.portfolio) return 0;
    const previousValue = this.portfolio.totalValue - this.portfolio.dailyChange;
    if (previousValue === 0) return 0;
    return (this.portfolio.dailyChange / previousValue) * 100;
  }

  get dailyChangeIsPositive(): boolean {
    return (this.portfolio?.dailyChange ?? 0) >= 0;
  }

  get totalGainLossIsPositive(): boolean {
    return (this.portfolio?.totalGainLoss ?? 0) >= 0;
  }
}
