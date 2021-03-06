import Breadcrumb from './components/Breadcrumb.js';
import { api } from './api/CatAPI.js';

export default class App {
    constructor() {
        
        const result = api.getRoot();
        result.then((value) => {
            
        });
      }
    }
}