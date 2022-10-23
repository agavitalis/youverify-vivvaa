import {CustomError} from './custom-error'

export class NotAuthorizedError extends CustomError{

    statusCode = 401;

    constructor(public reason = "You are not Authorized"){
        super('Not Authorized');
        Object.setPrototypeOf(this, NotAuthorizedError.prototype)
    }

    serializeErrors(){
        return [
            {message : this.reason}
        ]
    }
}