export interface Plan {
    package_id: string,
    package_name:string ,
    package_type:string,
    duration: number,
    duration_in: string,
    price: string
}

export interface UserInfo {
    package_id : string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    country_id : number,
    city_id : number,
}

