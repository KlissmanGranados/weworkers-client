import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseQuiz } from 'src/app/core/models/quiz.model';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-answer-questionnaire',
  templateUrl: './answer-questionnaire.component.html',
  styleUrls: ['./answer-questionnaire.component.css']
})
export class AnswerQuestionnaireComponent implements OnInit {

  userIndex: number = 0;

  quizArray: DatabaseQuiz;

  puntaje: any = null;

  constructor(
    private _questionnaireService: QuestionnaireService,
    private router : Router
  ) {
    this._questionnaireService.onSelectedidProyectoToQuiz().subscribe(
      response => {
        if(response !== null) {
          console.log('id por subscribe',response);
          this.getQuiz(response);
        } else {
          this.router.navigate(['/dashboard/dashboard-freelancer']);
        }
      }
    );
  }

  ngOnInit(): void {
    this.userIndex = 0;
    // console.log('id directo',this._questionnaireService.idProyectoToQuiz);
  }

  onSubmitCuestionario(): void {
    let jsn = {
      cuestionariosId:  this.quizArray.data.cuestionario.id,
      respuestasId: this.arrayCheckboxSelected,
    };
    this._questionnaireService.responderCuestionario(jsn).subscribe(
      response => {
        console.log('response',response);
        if(response.data === null) {
          this.puntaje = null;
          Swal.fire({
            icon: 'warning',
            title: `${response.message}`
          });
        } else {

          this.puntaje = response;
          Swal.fire({
            icon: 'success',
            title: `${response.message}`
          });
        }
        // mensaje de sweet alert
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.error.message}`
        });
      }
    );

    // mensaje con el sweet alert
  //   {
  //     "cuestionariosId":14,
  //     "respuestasId":[
  //         75,77
  //     ]
  // }
  }

  getQuiz(idProyecto): void {
    this._questionnaireService.seleccionarCuestionario(idProyecto).subscribe(
      (response: DatabaseQuiz) => {
        this.quizArray = response;
      }, error => {
        console.log('error', error);
      }
    );
  }

  changeIndex(number) {
    if (this.userIndex > 0 && number < 0 ||
    this.userIndex < this.quizArray?.data.preguntas.length && number > 0 ) {
      this.userIndex += number;
    }
  }

  arrayCheckboxSelected: Array<string> = [];

  onCheckboxChange(evt, tag){
    this.arrayCheckboxSelected.forEach((element, index) => {
      if((index === this.userIndex) && (element !== evt.target.value)) {
        this.arrayCheckboxSelected.splice(index, 1)
      }
    });
    if (evt.target.checked) {
      this.arrayCheckboxSelected.push(evt.target.value);
    }
  }

}
