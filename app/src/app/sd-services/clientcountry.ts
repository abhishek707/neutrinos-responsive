/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class clientcountry {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_clientcountry

  async getcountries(...others) {
    try {
      var bh = {
        input: {},
        local: {
          list: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_lZhlHwc6m5We2MPU(bh);
      //appendnew_next_getcountries
      return (
        // formatting output variables
        {
          input: {},
          local: {
            list: bh.local.list,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y42tfupNprDVMDTS');
    }
  }

  //appendnew_flow_clientcountry_start

  async sd_lZhlHwc6m5We2MPU(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `countries/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.list = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_lZhlHwc6m5We2MPU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lZhlHwc6m5We2MPU');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_clientcountry_Catch
}
