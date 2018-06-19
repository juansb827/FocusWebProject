var logger=require('./logger')
process.on('exit', (code) => {
	console.log(`About to exit with code: ${code}`);
});
process.on('unhandledRejection', function (reason, p) {
	//I just caught an unhandled promise rejection, since we already have fallback handler for unhandled errors (see below), let throw and let him handle that	
	logger.info("Caught unhandledRejection");
	throw reason;
});
process.on('uncaughtException', function (error) {
	logger.info("Caught uncaughtException");
	logger.error(error);
	process.exit(1)
	//TODO errorHandler
});
