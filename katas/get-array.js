module.exports = function getArray(...args) {
   if (args.length === 1 && typeof args[0] === 'number') {
      return new Array(args[0])
   } else if (args.length > 1) {
      return Array.from(args);
   }
}
