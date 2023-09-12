import { messagesReducer, removeMessage } from "../src/store/messagesSlice";

it("should add new message to existing messages list when addMessage action is invoked", () => {
    const mockPreviousState= [
        {
            id: "testId-1",
            message: "Some test message",
            userId: "123",
            userName: "Peter"
        }
    ];

    const newUser = {
        id: "testId-2",
        message: "Some new message",
        userId: "567",
        userName: "John"
    };

    const action = addMessage(newUser)
    const reducer = messagesReducer(mockPreviousState, action);

    expect(reducer).toEqual([...mockPreviousState, newUser]);
    expect(reducer.length).toBe(2);
});

it("should remove message from list when removeMessage action is invoked", () => {
    const mockUsersState= [
        {
            id: "testId-1",
            message: "Some test message",
            userId: "123",
            userName: "Peter"
        }, 
        {
            id: "testId-2",
            message: "Some new message",
            userId: "567",
            userName: "John"
        }
    ];

    const reducer = messagesReducer(mockUsersState, removeMessage("testId-2"));

    expect(reducer).toEqual([mockUsersState[0]]);
    expect(reducer.length).toBe(1);
});