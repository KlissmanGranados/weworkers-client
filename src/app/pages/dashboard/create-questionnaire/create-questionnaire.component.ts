import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})
export class CreateQuestionnaireComponent implements OnInit {
  questionnaireForm: FormGroup;
  type: string;

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuestionnaireService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.questionnaireForm = new FormGroup({
      proyectosId: new FormControl(''),
      preguntas: new FormArray([this.createItemPreguntas()])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.type = params['type'];

      this.questionnaireForm.get('proyectosId').setValue(id);
      // type: crear o ver
      console.log('type',this.type);
      if(this.type === 'ver') {
        this.preguntas.removeAt(0);
        this.quizService.seleccionarCuestionario(id).subscribe(
          response => {
            console.log('response',response);
            response.data.preguntas.forEach(x => {
              this.preguntas.push(
                this.formBuilder.group({
                  pregunta: x.pregunta,
                  respuestas: this.setRespuestas(x)
                }))
              });

          }
        );
      }
    });
  }

  setRespuestas(x) {
    let arr = new FormArray([])
    x.respuestas.forEach(y => {
      arr.push(this.formBuilder.group({
        respuesta: y.respuesta,
        correcta: true,
      }))
    });
    return arr;
  }

  onSubmitQuestionnaire(formValue): void {
    if(this.questionnaireForm.valid) {
      // console.log('formValue')
      // console.log(formValue)
      this.quizService.crearCuestionario(formValue).subscribe(
        response => {
          // console.log('response',response);
          if(response.data === null) {
            Swal.fire({
              icon: 'warning',
              title: `${response.message}`
            })
          } else {
            Swal.fire({
              icon: 'success',
              title: `${response.message}`
            });
            //hacer la navegacion ...
            this.router.navigate(['/dashboard/projects']);
          }
        }, error =>{
          // console.log('error', error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error.message}`
          })
      });
    } else {
      alert('El formulario es inválido')
    }
  }

  get preguntas() {
    return this.questionnaireForm.get('preguntas') as FormArray;
  }

  createItemPreguntas(): FormGroup {
    return this.formBuilder.group({
      pregunta: '',
      respuestas: new FormArray([this.createItemRespuestas()])
    });
  }

  addItemPreguntas(): void {
    this.preguntas.push(this.createItemPreguntas());
  }

  getrespuestas(i) {
    return this.preguntas.controls[i].get('respuestas') as FormArray;
  }

  createItemRespuestas(): FormGroup {
    return this.formBuilder.group({
      respuesta: ['', Validators.required],
      correcta: [false, Validators.required]
    });
  }

  addItemRespuestas(i): void {
    const array =  this.preguntas.controls[i].get('respuestas') as FormArray;
    array.push(this.createItemRespuestas());
  }


  deleteRespuesta(indexPregunta: number, indexRespuesta: number): void {
    this.getrespuestas(indexPregunta).removeAt(indexRespuesta);
  }

  onChangeCorrecta(evt, indexPregunta, indexRespuesta) {
    this.getrespuestas(indexPregunta).controls.forEach((element, index) => {
      if(index !== indexRespuesta) {
        element.get('correcta').setValue(false);
      }
    });
    if (evt.target.checked) {
     this.getrespuestas(indexPregunta).controls[indexRespuesta].get('correcta').setValue(true);
    }
  }

  deleteQuiz(): void {
    Swal.fire({
      title: 'Quiere borrar el cuestionario?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success').
        this.quizService.eliminarCuestionario(this.questionnaireForm.get('proyectosId').value).subscribe(
          response =>{
            Swal.fire({
              icon: 'success',
              title: `${response.message}`
            });
            this.router.navigate(['/dashboard/projects']);
          }, error =>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.error.message}`
            });
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se guardaron', '', 'info');
      }
    });
  }

}
