import {makeAutoObservable, observable} from 'mobx';
import PromiseAwareViewModelBase from './PromiseAwareViewModelBase';
import AutoCompleteControlService from '../services/AutoCompleteControlService';
import AutoCompleteControlInput from '../models/AutoCompleteControlInput';

export default class AutoCompleteControlInputViewModel extends PromiseAwareViewModelBase {
    public value : string = '';

    constructor(
        model : AutoCompleteControlInput
    ) {
        super();
        makeAutoObservable(this);
        this.value = model.value;
    }
}