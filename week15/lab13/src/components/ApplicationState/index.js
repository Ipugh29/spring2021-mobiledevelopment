let state = {
    squats: 0,
    lunges: 0
};

function reducer(state, action) {

    switch (action.type) {
        case "increment1":
            return { squats: state.squats + 1, lunges: state.lunges };
        case "increment2":
            return { squats: state.squats, lunges: state.lunges + 1 };
        case "decrement1":
            return { squats: state.squats - 1, lunges: state.lunges };
        case "decrement2":
            return { squats: state.squats, lunges: state.lunges - 1 };
        default:
            throw new Error();
    }
}

export { state, reducer };