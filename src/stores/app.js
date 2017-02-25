import { observable } from 'mobx';

class AppStore {
  @observable root = undefined;

  constructor() {}

  appInitialized() {
    this.root = 'signin';
  }

  signedIn() {
    this.root = 'home';
  }
}

export default new AppStore();
