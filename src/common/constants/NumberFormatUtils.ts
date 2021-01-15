export const NumberFormatUtils = {

    utilsNumeric: () => {
        String.prototype.toNumber = function () {
            return parseFloat(this.replace(/,/ig, ""))
        }
        Number.prototype.toFlex = function (digits) {
            return Math.round(this, digits).toString();
        };
        /**
         * Used by indicative tote
         * truncate before rounding
         * @example
         * (123.1).toLimit()           >> 123
         * (123.6).toLimit(1)          >> 123
         * (123.1).toLimit(2)          >> 123
         * (123.1).toLimit(2, 2)       >> 123
         * (12.12).toLimit(2, 2)       >> 12.12
         * (12.12).toLimit(1, 2)       >> 12.1
         * (12.02).toLimit(1, 2)       >> 12
         */
        Number.prototype.toLimit = function (digits, max) {
            let noDecimal = new String(this > 0 ? Math.floor(this) : Math.ceil(this));

            if (noDecimal.length > (max || 2))
                return noDecimal;

            return this.toFlex(digits);
        };

        /**
         * Using for Reports format
         * @example
         * 1234.10 .toDollar()           >> 1,234
         * 1234.10 .toDollar(2)          >> 1,234.1
         * 1234.10 .toDollar(2, true)    >> 1,234.10
         */
        Number.prototype.toDollar = function (digits, lengthy) {
            let i,
                result = lengthy ? this.toFixed(digits) : this.toFlex(digits),
                minus = result.startsWith("-");

            if (minus) {
                result = result.replace("-", "");
            }
            digits = digits || 0;

            let buffer = [];

            // get the index or '.', if not found, start from the last didigt
            let last = result.lastIndexOf('.');

            if (last < 0) {
                last = result.length - 1;
            } else {// right now assume 2 digits only, no care is take for the decimals
                last -= 1;
                for (i = result.length - 1; i > last; i--) {
                    buffer.push(result.charAt(i));
                }
            }

            for (i = last; i >= 0; i--) {
                let count = last - i;
                if (count > 0 && count % 3 === 0) {
                    buffer.push(',');
                }
                buffer.push(result.charAt(i));
            }

            if (minus)
                buffer.push("-");

            return buffer.reverse().join('').toString();
        };

        String.prototype.toDollar = function () {
            return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }

        /**
         * Truncate number to a decimal point
         * @param digits
         * @example
         * (0.1259).truncate() == 0
         * (0.1259).truncate(2) == 0.12
         * (0.1259).truncate(6) == 0.1259
         */
        Number.prototype.truncate = function (digits, lengthy) {
            let pow = Math.pow(10, digits || 0);
            let result = Math.floor(this * pow) / pow;
            return lengthy ? result.toFixed(digits) : result;
        };

        // ----------------------------------------------------------------------- //
        // Array type extension
        // ----------------------------------------------------------------------- //

        /**
         * round half up
         * bits - default is 0;
         *        -1 means without rounding;
         */
        Math._round = Math.round;
        Math.round = function (number, bits) {
            if (bits < 0)
                return number;
            bits = bits || 0; // default round 0 decimal
            let dir = number > 0 ? 1 : -1;
            let i = Math.pow(10, bits);
            number = Math.abs(number) + 1 / Math.pow(10, bits + 5);
            return Math._round(number * i) / i * dir;
        };
    },

}