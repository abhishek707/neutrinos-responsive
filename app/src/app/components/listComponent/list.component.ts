/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { clientcountry } from  '../../sd-services/clientcountry';
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
    selector: 'bh-list',
    templateUrl: './list.template.html'
})

export class listComponent extends NBaseComponent implements OnInit {

    
    country: string[] = [
        'Asia', 'Africa', 'Antarctic', 'Central America'
    ];
    sel:any
    data1 : any
    data : any
    sampleform: any
    filterdata : any
    selectdata: any
    childview:boolean = false;

    constructor(public nn : clientcountry, public fb: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.sampleform = this.fb.group({
            selectt: ['']
        })
        this.childview = false;
    }

    onclickk(){
        // this.selectdata = this.sampleform.controls.selectt.value
        console.log('select field', this.sel)
        this.getcountry()
    }

    async getcountry(){
        this.data = (await this.nn.getcountries()).local.list.payload.data
    this.filterfnc(this.data)
    }

    filterfnc(data1){
        this.filterdata = Object.values(data1).filter(el => el['region'].trim() == this.sel)
        this.childview = true;
    }

    refresh(){
        this.childview = false;
    }
}
