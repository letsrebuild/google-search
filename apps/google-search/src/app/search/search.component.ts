import { SearchService } from './search.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Post } from '@nestjs/common';

@Component({
  selector: 'lets-rebuild-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.searchField.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(
        data => {
          let searchText: string = this.searchField.nativeElement.value;
          let spaceSeparatedArray = searchText.split(" ");
          searchText = spaceSeparatedArray.pop();
          this.searchPrefix = spaceSeparatedArray.join(" ");
          if(searchText) {
            this.searchResults = [];
            this.searchService.getSuggestionsfor(searchText)
            .subscribe(
              results => {
                results.results.forEach(data => {
                  this.searchResults.push(`${this.searchPrefix} ${data.word}`)
                })
              }
            )
          }
        }
      );
  }

  searchPrefix = "";
  searchResults = [];
  @ViewChild('searchInputField') searchField: ElementRef;

  clickedSearch(text: string) {
    if(!text) return;
    this.searchField.nativeElement.value = text;
    this.searchResults = [];
    this.searchService.navigateTo(`${environment.googleSearchApi}${encodeURI(text)}`);
  }

  clickedDoodle() {
    this.searchService.navigateTo(environment.googleDoodle);
  }

}
