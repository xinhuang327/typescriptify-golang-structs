/* Do not change, this code is generated from Golang structs */


class Address {
    city: string;
    number: number;
    country: string;

    static createFrom(source: any) {
        var result = new Address();
        result.city = source["city"];
        result.number = source["number"];
        result.country = source["country"];
        return result;
    }

    //[Address:]
    /* Custom code here */

    getAddressString = () => {
        return this.city + " " + this.number;
    }

    //[end]
}
class PersonalInfo {
    hobby: string[];
    pet_name: string;

    static createFrom(source: any) {
        var result = new PersonalInfo();
        result.hobby = source["hobby"];
        result.pet_name = source["pet_name"];
        return result;
    }

    //[PersonalInfo:]

    getPersonalInfoString = () => {
        return "pet:" + this.pet_name;
    }

    //[end]
}
class Person {
    name: string;
    personal_info: PersonalInfo;
    nicknames: string[];
    addresses: Address[];

    static createFrom(source: any) {
        var result = new Person();
        result.name = source["name"];
        result.personal_info = source["personal_info"] ? PersonalInfo.createFrom(source["personal_info"]) : null;
        result.nicknames = source["nicknames"];
        result.addresses = source["addresses"] ? source["addresses"].map(function(element) { return Address.createFrom(element); }) : null;
        return result;
    }

    //[Person:]

    getInfo = () => {
        return "name:" + this.name;
    }

    //[end]
}