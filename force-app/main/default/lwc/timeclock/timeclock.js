import { LightningElement, track } from 'lwc';

export default class TimeClock extends LightningElement {
    @track currentTime;

    connectedCallback() {
        this.updateTime();
        setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    updateTime() {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString();
    }
}
