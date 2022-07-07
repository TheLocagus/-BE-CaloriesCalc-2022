import {UserRecord} from "../records/user.record";
import {UserEntity} from "../types";

test('Adding user to db', async ()=>{

    const newUser: UserEntity = {
        username: "Admin2",
        password: "12345678",
    }
    const userId = await new UserRecord(newUser).create();
    const foundUser = await UserRecord.findOne(userId);
    expect(foundUser).toBeDefined();
});