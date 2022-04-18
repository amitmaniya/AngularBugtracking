import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { AdminSlidebarComponent } from './admin/admin-slidebar/admin-slidebar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LogoutComponent } from './logout/logout.component';
import { PendingProjectComponent } from './admin/pending-project/pending-project.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { ListModuleComponent } from './admin/list-module/list-module.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { AddModulesComponent } from './projectManager/add-modules/add-modules.component';
import { AddTasksComponent } from './projectManager/add-tasks/add-tasks.component';
import { AddTeamMembersComponent } from './projectManager/add-team-members/add-team-members.component';
import { AddUsersComponent } from './projectManager/add-users/add-users.component';
import { AssignTasksComponent } from './projectManager/assign-tasks/assign-tasks.component';
import { CompletedProjectsComponent } from './projectManager/completed-projects/completed-projects.component';
import { EditModulesComponent } from './projectManager/edit-modules/edit-modules.component';
import { EditProjectsComponent } from './projectManager/edit-projects/edit-projects.component';
import { ListModulesComponent } from './projectManager/list-modules/list-modules.component';
import { ListProjectsComponent } from './projectManager/list-projects/list-projects.component';
import { ListTasksComponent } from './projectManager/list-tasks/list-tasks.component';
import { ListUsersComponent } from './projectManager/list-users/list-users.component';
import { ModulesReportComponent } from './projectManager/modules-report/modules-report.component';
import { PendingProjectsComponent } from './projectManager/pending-projects/pending-projects.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { ProjectManagerHeaderComponent } from './projectManager/project-manager-header/project-manager-header.component';
import { ProjectManagerSlidebarComponent } from './projectManager/project-manager-slidebar/project-manager-slidebar.component';
import { ProjectManagerComponent } from './projectManager/project-manager/project-manager.component';
import { TasksReportComponent } from './projectManager/tasks-report/tasks-report.component';
import { ViewTeamComponent } from './projectManager/view-team/view-team.component';
import { TaskReportComponent } from './admin/task-report/task-report.component';
import { UserReportComponent } from './admin/user-report/user-report.component';
import { ProjectReportComponent } from './admin/project-report/project-report.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    EditRoleComponent,
    AddUserComponent,
    ListUserComponent,
    AdminDashboardComponent,
    EditUserComponent,
    AddProjectComponent,
    ListProjectComponent,
    EditProjectComponent,
    AdminSlidebarComponent,
    AdminComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    LogoutComponent,
    PendingProjectComponent,
    AddModuleComponent,
    AddTaskComponent,
    AddProjectTeamComponent,
    EditTaskComponent,
    EditModuleComponent,
    ListModuleComponent,
    ListProjectTeamComponent,
    ListTaskComponent,
    AddModulesComponent,
    AddTasksComponent,
    AddTeamMembersComponent,
    AddUsersComponent,
    AssignTasksComponent,
    CompletedProjectsComponent,
    EditModulesComponent,
    EditProjectsComponent,
    ListModulesComponent,
    ListProjectsComponent,
    ListTasksComponent,
    ListUsersComponent,
    ModulesReportComponent,
    PendingProjectsComponent,
    ProjectManagerDashboardComponent,
    ProjectManagerHeaderComponent,
    ProjectManagerSlidebarComponent,
    ProjectManagerComponent,
    TasksReportComponent,
    ViewTeamComponent,
    TaskReportComponent,
    UserReportComponent,
    ProjectReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
