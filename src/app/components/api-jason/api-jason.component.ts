import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-api-jason',
  templateUrl: './api-jason.component.html',
  styleUrls: ['./api-jason.component.css']
})
export class ApiJasonComponent implements OnInit {

  json!: any[]
  constructor(private router: Router, private route: ActivatedRoute, private api:JsonService) { }
  ngOnInit(): void {
     this.api.getAll().subscribe(api => this.json = api)
  }
  editar(id: string) {
    this.router.navigate(['/detalle', id])
  }
}
