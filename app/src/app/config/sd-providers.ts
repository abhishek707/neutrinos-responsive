import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-client_country
import { client_country } from '../sd-services/client_country';
//CORE_REFERENCE_IMPORT-clientcountry
import { clientcountry } from '../sd-services/clientcountry';

export const sdProviders = [
  SDBaseService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-client_country
  client_country,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-clientcountry
  clientcountry,
];
