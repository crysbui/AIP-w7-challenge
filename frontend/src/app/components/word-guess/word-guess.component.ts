import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WordGuessService } from "./word-guess.service";
import { Word } from "./word-guess.model";

@Component({
  selector: "word-guess",
  templateUrl: "./word-guess.component.html",
  styleUrls: ["./word-guess.component.css"]
})
export class WordGuessComponent implements OnInit {
  words: Word[];

  constructor(
    private wordGuessService: WordGuessService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchWords();
  }

  fetchWords() {
    this.wordGuessService.getWords().subscribe((data: Word[]) => {
      this.words = data;
      console.log("Data requested...");
      console.log(this.words);
    });

    // this.wordGuessService.getWords().subscribe(words => {
    //   console.log(words);
    // });
  }

  checkWord(input) {
    console.log(input);
    this.words.forEach(element => {
      if (input === element.content) {
        this.router.navigate([`/result`]);
      }
    });
  }
}
