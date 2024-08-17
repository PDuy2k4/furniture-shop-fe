enum userVerifyStatus {
    UNVERIFIED,
    VERIFIED,
    PENDING,
}

export default class IUser {
    _id: String;
    name: string;
    email: string;
    password: string;
    profileImg: string;
    isAdmin: boolean;
    forgotPasswordToken: string;
    verifiedEmailToken: string;
    verify: userVerifyStatus;
    refreshToken: string;
    createdAt: string;
    updatedAt: string;

    constructor(
        _id: String,
        name: string,
        email: string,
        password: string,
        profileImg: string , 
        isAdmin: boolean = false, 
        forgotPasswordToken: string ,
        verifiedEmailToken: string ,
        
        refreshToken: string ,
        createdAt: string,
        updatedAt: string
    ) {
        this._id = _id || '';
        this.name = name;
        this.email = email;
        this.password = password;
        this.profileImg = profileImg|| '';
        this.isAdmin = isAdmin;
        this.forgotPasswordToken = forgotPasswordToken || '';
        this.verifiedEmailToken = verifiedEmailToken|| '';
        this.verify = userVerifyStatus.UNVERIFIED;
        this.refreshToken = refreshToken|| '';
        this.createdAt = createdAt || new Date().toISOString();
        this.updatedAt = updatedAt || new Date().toISOString(); 
    }
}
