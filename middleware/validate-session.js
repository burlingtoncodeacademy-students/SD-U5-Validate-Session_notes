const validateSession = async (req,res,next) => {
    //* Middleware still has access to the request, response, and requires the next() function to move past it.

    //1. Take token provided by request object (in headers)

    //2. Check the status of the token (is it expired?)

    //3. Provide response - if valid, generate a variable that holds user info.

    return next(); // moves us onto routes

}

module.exports = validateSession;