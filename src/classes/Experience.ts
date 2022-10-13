export class Experience {

    company: string;
    position: string;
    startDate: Date;
    endDate: Date;
    description: string;
    location: string;
    // should be a url to cdn or external image
    logo: string;

    constructor(company: string, position: string, startDate: Date, endDate: Date, description: string, location: string, logo: string) {
        this.company = company;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.location = location;
        this.logo = logo;
    }
}