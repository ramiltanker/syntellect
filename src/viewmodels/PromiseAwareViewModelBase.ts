import {makeAutoObservable, observable} from 'mobx';

export default class PromiseAwareViewModelBase {
    public isAwaiting : boolean = false;
    public didRequestFail : boolean = false;
    public failReason? : string;

    constructor() {
        makeAutoObservable(this);
    }

    protected async runWithAwareness(action : () => Promise<void>) {
        this.didRequestFail = false;
        this.isAwaiting = true;
        await action();
        this.isAwaiting = false;
    }

    //#endregion

}