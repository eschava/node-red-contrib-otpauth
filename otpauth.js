const OTPAuth = require('otpauth');

module.exports = function(RED) {
    function OTPAuthNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg, send, error) {
            send = send || function() { node.send.apply(node, arguments) };
            error = error || function(err) { node.error(err, msg) };

            var props = msg.payload;
            if (typeof props !== "object") props = {secret: props};
            var otp = config.otptype == 'totp' ? new OTPAuth.TOTP(props) : new OTPAuth.HOTP(props);
            msg.payload = otp.generate();
            send(msg);
        });
    }
    RED.nodes.registerType('otpauth', OTPAuthNode);
}