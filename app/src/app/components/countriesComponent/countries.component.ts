/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-countries',
    templateUrl: './countries.template.html'
})

export class countriesComponent extends NBaseComponent implements OnInit {

    @Input() receivedtabledata:any;

    constructor() {
        super();
    }

    ngOnInit() {

    }
}
