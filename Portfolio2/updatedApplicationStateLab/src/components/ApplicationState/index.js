let state = {
    squats: 0,
    lunges: 0,
    pushups: 0,
    pullups: 0,
    crunches: 0
};

function reducer(state, action) {

    switch (action.type) {
        case "increment1":
            return { squats: state.squats + 1, lunges: state.lunges, pushups: state.pushups, pullups: state.pullups, crunches: state.crunches };
        case "increment2":
            return { squats: state.squats, lunges: state.lunges + 1, pushups: state.pushups, pullups: state.pullups, crunches: state.crunches };
        case "increment3":
            return { squats: state.squats, lunges: state.lunges, pushups: state.pushups + 1, pullups: state.pullups, crunches: state.crunches }
        case "increment4":
            return { squats: state.squats, lunges: state.lunges, pushups: state.pushups, pullups: state.pullups + 1, crunches: state.crunches }
        case "increment5":
            return { squats: state.squats, lunges: state.lunges, pushups: state.pushups, pullups: state.pullups, crunches: state.crunches + 1 }
        case "decrement1":
            return { squats: state.squats - 1, lunges: state.lunges, pushups: state.pushups, pullups: state.pullups, crunches: state.crunches };
        case "decrement2":
            return { squats: state.squats, lunges: state.lunges - 1, pushups: state.pushups, pullups: state.pullups, crunches: state.crunches };
        case "decrement3":
            return { squats: state.squats, lunges: state.lunges, pushups: state.pushups - 1, pullups: state.pullups, crunches: state.crunches };
        case "decrement4":
            return { squats: state.squats, lunges: state.lunges, pushups: state.pushups, pullups: state.pullups - 1, crunches: state.crunches };
        case "decrement5":
            return { squats: state.squats, lunges: state.lunges, pushups: state.pushups, pullups: state.pullups, crunches: state.crunches - 1 };
        default:
            throw new Error();
    }
}

export { state, reducer };