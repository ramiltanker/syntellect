import {makeAutoObservable, observable} from 'mobx';
import PromiseAwareViewModelBase from './PromiseAwareViewModelBase';
import AutoCompleteControlService from '../services/AutoCompleteControlService';
import AutoCompleteControlItem from '../models/AutoCompleteControlItem';

export default class AutoCompleteControlItemViewModel extends PromiseAwareViewModelBase {
    public name : string = '';
    public fullName : string = '';
    public flag : string = ''

    constructor(
        model : AutoCompleteControlItem
    ) {
        super();
        makeAutoObservable(this);
        this.name = model.name;
        this.fullName = model.fullName;
        this.flag = model.flag;
    }
}