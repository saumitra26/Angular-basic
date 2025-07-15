import {
  Component,
  OnInit,
  OnDestroy,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JupitarService } from '../../services/jupitar.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit, AfterViewInit, OnDestroy {
  filteredRows: any[] = [];
  cardsPerSlide = 7;
  cardGap = 8;
  scrollAmount = 0;

  @ViewChildren('cardScroll') cardScrolls!: QueryList<ElementRef>;
  arrowVisibility: { left: boolean; right: boolean }[] = [];

  private resizeListener = this.setDynamicCssVars.bind(this);

  constructor(private jupitarService: JupitarService) {}

  ngOnInit(): void {
    this.testSubject()
    this.fetchJoke()
    this.setDynamicCssVars();
    window.addEventListener('resize', this.resizeListener);

    this.jupitarService.getMediaCategory().subscribe(response => {
      const allRows = response.data.category.frontPage;
      this.filteredRows = allRows.filter(
        (row: any) => row.highTimeline && row.data?.length > 0
      );
      console.log("allRows",this.filteredRows);
      this.arrowVisibility = this.filteredRows.map(() => ({
        left: false,
        right: true
      }));
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.cardScrolls.forEach((el, i) => {
        this.updateArrowVisibility(i);
        el.nativeElement.addEventListener('scroll', () => {
          this.updateArrowVisibility(i);
        });
      });
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
  }

  setDynamicCssVars(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1400) this.cardsPerSlide = 7;
    else if (screenWidth > 1000) this.cardsPerSlide = 5;
    else if (screenWidth > 600) this.cardsPerSlide = 3;
    else this.cardsPerSlide = 2;

    this.cardGap = 8;

    // Assume arrows take 96px total width (48px * 2) + some margin (16px * 2)
    const arrowsWidth = 96;
    const marginWidth = 32; // 16px left + 16px right margin or padding
    const containerWidth = screenWidth - arrowsWidth - marginWidth;

    const cardWidth = (containerWidth - (this.cardGap * (this.cardsPerSlide - 1))) / this.cardsPerSlide;
    this.scrollAmount = this.cardsPerSlide * (cardWidth + this.cardGap);

    const root = document.documentElement;
    root.style.setProperty('--nr-of-items', this.cardsPerSlide.toString());
    root.style.setProperty('--timeline-card-gap', `${this.cardGap}px`);
    root.style.setProperty('--timeline-button-width', `${arrowsWidth}px`);
    root.style.setProperty('--timeline-margin-left', '16px');
  }

  scrollRight(index: number): void {
    const container = this.cardScrolls.get(index)?.nativeElement;
    if (container) {
      container.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
      setTimeout(() => this.updateArrowVisibility(index), 400);
    }
  }

  scrollLeft(index: number): void {
    const container = this.cardScrolls.get(index)?.nativeElement;
    if (container) {
      container.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
      setTimeout(() => this.updateArrowVisibility(index), 400);
    }
  }

  updateArrowVisibility(index: number): void {
    const container = this.cardScrolls.get(index)?.nativeElement;
    if (container) {
      const atStart = container.scrollLeft <= 5;
      const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 5;
      this.arrowVisibility[index] = {
        left: !atStart,
        right: !atEnd
      };
    }
  }

  getPhotoUrl(item: any): string {
    return (
      item?.verticalPhotos?.[0]?.photoUrlBase ||
      'https://via.placeholder.com/160x100?text=No+Image'
    );
  }

  isArrowVisible(index: number, direction: 'left' | 'right'): boolean {
    return this.arrowVisibility[index]?.[direction] ?? false;
  }
  fetchJoke(){
    this.jupitarService.getRandomJoke().subscribe({
      
      
      error:(err)=>{
        console.error('Error fetching joke:', err);
      }
    })
  
  }
    testSubject(){
      this.jupitarService.testSubject$.next("hello")
    }
    
}