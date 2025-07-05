
import { JupitarService } from '../../services/jupitar.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  filteredRows: any[] = [];
  itemsPerPage = 8;
  currentIndexes = new Map<string, number>();
  pageSize = 5; // cards per view
  cardWidth = 170;

  constructor(private jupitarService: JupitarService) {}

  ngOnInit(): void {
    this.jupitarService.getMediaCategory().subscribe(response => {
      const allRows = response.data.category.frontPage;
      const filtered = allRows
        .filter((row: any) => row.highTimeline && row.data?.length > 0)
        .map((row: any) => ({
          ...row,
          currentIndex: 0 // Initialize pagination per row
        }));
      this.filteredRows = filtered;
    });
  }

  getPhotoUrl(item: any): string {
    return item?.verticalPhotos?.[0]?.photoUrlBase || 'https://via.placeholder.com/160x100?text=No+Image';
  }

  getCurrentItems(row: any): any[] {
    return row.data.slice(row.currentIndex, row.currentIndex + this.itemsPerPage);
  }

  nextItems(row: any): void {
    const nextIndex = row.currentIndex + this.itemsPerPage;
    if (nextIndex < row.data.length) {
      row.currentIndex = nextIndex;
    }
  }

  prevItems(row: any): void {
    const prevIndex = row.currentIndex - this.itemsPerPage;
    if (prevIndex >= 0) {
      row.currentIndex = prevIndex;
    }
  }
}