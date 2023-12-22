// response for catch
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            error: error.message
        })
    );
};

// response for success
const successResponse = (res, result) => {
    return(
        res.status(200).json({
            result: result
        })
    )
}

// incomplete response
const incompleteResponse = (res) => {
    return(
        res.status(404).json({
            result: `Not found`
        })
    )
}

module.exports = {
    errorResponse, successResponse, incompleteResponse
}