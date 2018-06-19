const NS_PER_SEC = 1e9;
module.exports =function clock(start,name) {
    if ( !start ) return process.hrtime();   
    const diff=process.hrtime(start);
    const nano=diff[0] * NS_PER_SEC + diff[1];
    const mili=nano/(1e6);
    console.log(`${name} benchmark took ${nano} nanoseconds, or ${mili} ms`);    
}