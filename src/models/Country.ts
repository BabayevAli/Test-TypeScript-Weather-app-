export class Country{
    static count: number = 1;

    id:number;
    name:string;
    country_id:number;

    constructor(name:string,country_id:number){
        this.id = Country.count++;
        this.name = name;
        this.country_id = country_id;
    }
}
