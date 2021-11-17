import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';

@Component({
  selector: 'app-quiz-presentation',
  templateUrl: './quiz-presentation.component.html',
  styleUrls: ['./quiz-presentation.component.css']
})
export class QuizPresentationComponent implements OnInit {

  constructor(
    private _questionnaireService: QuestionnaireService,
    private router : Router
  ) {
    this._questionnaireService.onSelectedidProyectoToQuiz().subscribe(
      response => {
        if(response === null) {
          this.router.navigate(['/dashboard/dashboard-freelancer']);
        }
      }
    );
  }

  ngOnInit(): void {
  }


}
