import AutoCompleteControlItem from '../models/AutoCompleteControlItem';
import ServerResponseInterface from './ServerResponseInterface';
import {getCountryByName} from '../api/apiService';

export default class AutoCompleteControlService {
    // singleton pattern
    private static _instance : AutoCompleteControlService;

    private constructor(){}

    public static get instance() {
        return this._instance ?? (this._instance = new AutoCompleteControlService())
    }

    public async getCountries(name: string) : Promise<ServerResponseInterface<AutoCompleteControlItem[]>> {
        try {
            let response = await getCountryByName(name);

            if (!response) {
                return { didFail: true, failReason: 'Error' };
            }

            return { didFail: false, data: response };
        } catch(e) {
            return { didFail: false, failReason: String(e) };
        }
    }
}