/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { client_country } from  '../../sd-services/client_country';
import { FormBuilder, Validators } from '@angular/forms';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {

    // continent : any


    continent : String[] = ['Asia', 'Africa', 'Aantarctic', 'Central America']
    sel:any
    data1 : any
    data : any
    sampleform: any
    filterdata : any
    selectdata: any
    childview:boolean = false;

    constructor(public nn : client_country, public fb: FormBuilder) {
        super();
    }

    ngOnInit() {
            this.sampleform =  this.fb.group({
            selectt: [' ']
        })
        this.childview = false;

    }

        submit(){
        // this.selectdata = this.sampleform.controls.selectt.value
        console.log('select field', this.sel)
        this.getcountry()
    }

    async getcountry(){
        // console.log('shsdhsjhg********')
        this.data = (await this.nn.get_c()).local.result.payload.data
        console.log('shsdhsjhg********', this.data)
    this.filterfnc(this.data)
    }

    filterfnc(data1){
        console.log('here')
        this.filterdata = Object.values(data1).filter(el => el['region'].trim() == this.sel)
        this.childview = true;
    }

    refresh(){
        this.childview = false;
    }
}
