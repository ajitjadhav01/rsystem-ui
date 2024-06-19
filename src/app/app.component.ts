import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { Story } from './models/story.model';
import { StoriesService } from './services/stories.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatTabsModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  loading$ = this.loader.loading$;
  pageSizeOptions: number[] = [10, 50, 100, 150, 200, 500];
  stories: Story[] = [];
  displayedColumns: string[] = ['id', 'title', 'url'];
  dataSource = new MatTableDataSource<Story>(this.stories);
  @ViewChild('paginator') paginator!: MatPaginator;

  //Constructor
  constructor(
    private loader: LoaderService,
    private storiesService: StoriesService
  ) {}

  //Initialise Components
  ngOnInit(): void {
    this.loadStories();
  }

  //Load All Top Stories from Server
  loadStories(): void {
    this.storiesService.getAllTopStories().subscribe((data) => {
      this.stories = data;
      this.dataSource = new MatTableDataSource<Story>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  //Search Stories from Table by Id, Title or Url
  searchStories(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
