import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectListService } from 'src/app/core/services/project-list.service';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';

@Component({
  selector: 'app-quiz-presentation',
  templateUrl: './quiz-presentation.component.html',
  styleUrls: ['./quiz-presentation.component.css']
})
export class QuizPresentationComponent implements OnInit {
  proyecto: any;
  loading: boolean = false;

  constructor(
    private _questionnaireService: QuestionnaireService,
    private router : Router,
  ) {
    this.loading = true;
    this._questionnaireService.onSelectedidProyectoToQuiz().subscribe(
      response => {
        this.loading = false;
        console.log('response', response)
        this.proyecto = response.data.nombre;
        if(response.id === null) {
          this.router.navigate(['/dashboard/dashboard-freelancer']);
        }
      }
    );
  }

  ngOnInit(): void {
  }


}
