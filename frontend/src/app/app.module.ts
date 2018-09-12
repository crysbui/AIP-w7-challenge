import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { WordGuessComponent } from "./components/word-guess/word-guess.component";
import { WordGuessService } from "./components/word-guess/word-guess.service";
import { ResultComponent } from "./components/result/result.component";

const routes: Routes = [
  {
    path: "guess",
    component: WordGuessComponent
  },
  {
    path: "result",
    component: ResultComponent
  },
  {
    path: "",
    redirectTo: "guess",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent, WordGuessComponent, ResultComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [WordGuessService],
  bootstrap: [AppComponent]
})
export class AppModule {}
