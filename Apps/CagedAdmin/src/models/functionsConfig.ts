// Lambda functions url config model.
export class FunctionsConfigModel {

    // Users
    public userLoginUrl: string = 'https://jacxddnbch.execute-api.us-east-1.amazonaws.com/dev/users/login';

    public createUserUrl: string = 'https://jacxddnbch.execute-api.us-east-1.amazonaws.com/dev/users';

    public updateUserUrl: string = 'https://jacxddnbch.execute-api.us-east-1.amazonaws.com/dev/users';

    public deleteUserUrl: string = 'https://jacxddnbch.execute-api.us-east-1.amazonaws.com/dev/users';

    // Events
    public createEventUrl: string = 'https://n3cgvvoxd4.execute-api.us-east-1.amazonaws.com/dev/events';

    public updateEventUrl: string = 'https://n3cgvvoxd4.execute-api.us-east-1.amazonaws.com/dev/events';

    public deleteEventUrl: string = 'https://n3cgvvoxd4.execute-api.us-east-1.amazonaws.com/dev/events';

    // Musicians
    public addMusicianUrl: string = 'https://di78q88alh.execute-api.us-east-1.amazonaws.com/dev/musicians';

}