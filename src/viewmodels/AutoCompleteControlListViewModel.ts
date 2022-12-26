import {makeAutoObservable, observable} from 'mobx';
import PromiseAwareViewModelBase from './PromiseAwareViewModelBase';
import AutoCompleteControlItem from '../models/AutoCompleteControlItem';
import AutoCompleteControlService from '../services/AutoCompleteControlService';
import AutoCompleteControlItemViewModel from './AutoCompleteControlItemViewModel';

export default class AutoCompleteControlListViewModel extends PromiseAwareViewModelBase {
    public countryItems : Array<AutoCompleteControlItemViewModel> = [];

    constructor(
        private service : AutoCompleteControlService
    ) {
        super();
        makeAutoObservable(this);
    }

    public async fetchCountryItems(value: string) {
        await this.runWithAwareness(async () => {
            const response = await this.service.getCountries(value);

            if (response.didFail) {
                this.didRequestFail = true;
                this.failReason = response.failReason;
            } else {
                this.countryItems = (response.data as AutoCompleteControlItem[]).map(item => new AutoCompleteControlItemViewModel(item));
            }
        });
    }
}