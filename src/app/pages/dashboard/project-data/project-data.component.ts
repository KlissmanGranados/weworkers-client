import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProjectListService } from 'src/app/core/services/project-list.service';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css']
})
export class ProjectDataComponent implements OnInit {
  userRole: any;
  detalleProyecto: any;

  constructor(
    private _questionnaireService: QuestionnaireService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private projectListService: ProjectListService
  ) {
    this.userRole = this.authService.getUserRole();
    console.log(this.userRole);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this._questionnaireService.idProyectoToQuiz = id;
      this.getDetalleProyecto(id);
    });
  }

  getDetalleProyecto(idProyecto){
    this.projectListService.detallesProyecto(idProyecto).subscribe(
      response => {
        console.log('response',response.data)
        this.detalleProyecto = response.data;
      }, error =>{
        console.log(error)
      }
    );
  }
}
