module.exports = {
    valditor : ( object ) => {
        const session = object.session;
        const exp = object.exp;
        const iat = object.iat;

        console.log('session = ' + session);
        console.log('exp = ' + exp);
        console.log('iat = ' + iat);
    },
    
}