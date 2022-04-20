import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  project:string=""
  projectmanager:string=""
  users:string=""
  modules:string=""
  tasks:string=""
  constructor(private projectService:ProjectService , private roleService:RoleService ) { }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp=>{
      this.project=resp.data.length
    })
    this.projectService.getAllManagers().subscribe(resp=>{
         
      this.projectmanager=resp.data.length
    })
    this.roleService.getAllUsers().subscribe(resp => {
      this.users= resp.data.length
    })
    this.projectService.getAllModule().subscribe(resp => {
      this.modules = resp.data.length
    })
    this.projectService.getAllTask().subscribe(resp => {
      this.tasks = resp.data.length
    })
  }

}
