import { addUser } from "../src/store/usersSlice";

it("should add new user addUser action is invoked", () => {
    const mockPreviousState= [
        {
            userId: "123",
            userName: "Peter"
        }
    ];

    const newUser = {
        userId: "567",
        userName: "John"
    };

    const action = addUser(newUser)
    const reducer = usersReducer(mockPreviousState, action);

    expect(reducer).toEqual([...mockPreviousState, newUser]);
    expect(reducer.length).toBe(2);
});