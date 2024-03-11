export interface StatsProps {
    name: string;
    stat: string;
}

export interface AuthenticationComponentProps {
    name: string;
    type: string;
    
}

export interface UserRegistration {
    name: string;
    email: string;
    password: string;
    cpassword: string;
}

export interface RegistrationFeeback {
    success?: string;
    error?: string;
}