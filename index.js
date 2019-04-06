module.exports = (model, properties) => {
    let retObj = {};
    for (var prop in properties) if (model.indexOf(prop) != -1) retObj[prop] = properties[prop];
    return retObj;
}