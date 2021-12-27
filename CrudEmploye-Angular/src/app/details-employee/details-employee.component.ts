import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

   id!: number;
   employee! : Employee;

  constructor( private employeService : EmployeeService,
               private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   
     this.employee = new Employee();
     this.employeService.getEmployeeById(this.id).subscribe(
       data =>{
         this.employee = data;
       });
  }

}
