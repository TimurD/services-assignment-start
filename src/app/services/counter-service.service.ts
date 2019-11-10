export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  onActiveToInactive() {
    this.activeToInactive++;
    console.log('Active to inactive services count: ' + this.activeToInactive);
  }

  onInactiveToActive() {
    this.inactiveToActive++;
    console.log('Inactive to active services count: ' + this.inactiveToActive);
  }
}
