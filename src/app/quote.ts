export class Quote {
    showCreatedDate: boolean;
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public createdDate: Date, public clickCounter:number, public dislikeCounter:number) {
        this.showDescription = false;
        this.showCreatedDate = false;
    }
}
