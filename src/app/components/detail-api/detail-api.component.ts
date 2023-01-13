import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-detail-api',
  templateUrl: './detail-api.component.html',
  styleUrls: ['./detail-api.component.css']
})
export class DetailApiComponent implements OnInit{
  id = ""
  json!: any[]
  constructor(private router: Router, private route: ActivatedRoute, public api:JsonService) { }
  ngOnInit(): void {
    this.api.getAll().subscribe(api => this.json = api)
    this.id = String(this.route.snapshot.paramMap.get('id'))
  }
}
