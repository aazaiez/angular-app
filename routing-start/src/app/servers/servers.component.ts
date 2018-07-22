import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router,
    // if we want to add a route on top of the current route, we use Activated route below
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['/servers']);
    // unlike the routerLink, the navigate method does not know what route we are currently on,
    // so to tell the navigate method where we currently are, we need to inject active route and
    // add an argument to navigate, see below
    // this.router.navigate(['servers'], {relativeTo: route});
  }
}
