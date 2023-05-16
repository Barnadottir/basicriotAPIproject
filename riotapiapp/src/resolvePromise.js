const resolvePromise = (promiseToResolve,promiseState) => {
    promiseState.promise = promiseToResolve;
    promiseState.data = null;
    promiseState.error = null;

    const saveData = (result) => {
        //console.log("these are the results",result);
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.data = result
        //console.log("data:",promiseState.data);
    }
    
    const saveError = (error) => {
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.error = error
    }
        

    if (promiseToResolve) promiseToResolve.then(saveData).catch(saveError)
}

export default resolvePromise;