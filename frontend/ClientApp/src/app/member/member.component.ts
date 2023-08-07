import { Component, OnInit } from '@angular/core';
import { Members } from '../shared/member.model';
import { MembersService } from '../shared/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './member.component.html',
  styles: [
  ]
})
export class MemberComponent implements OnInit {
  Members: Members[] = [];
  constructor(public service: MembersService) { }
  /*
  ngOnInit(): void {
    this.service.refreshList();
  }
  */
  ngOnInit() {
    this.service.refreshList().subscribe(
      (Members) => {
        this.Members = Members;
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }

  populateForm(selectedRecord: Members) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    this.service.deleteMember(id)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => { console.log(err) }
    )
  }
} 
