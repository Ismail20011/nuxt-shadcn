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
    confirmPassword : string,
    country : string,
    city : string,
    phone_number : string,
    address : string,
    postal_code : string,
}

