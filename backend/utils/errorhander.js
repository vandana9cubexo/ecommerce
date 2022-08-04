class ErrorHandler extends Error{ // backend error handler
    constructor(message,statusCode){
    super(message),
    this.statusCode=statusCode,
    error.captureStrackTrace(this,this.constructor)
    }
}
models.exports=ErrorHandler