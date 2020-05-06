# node-red-contrib-otpauth
One Time Password (HOTP/TOTP) generator node for Node-red
  
## Usage

####Simple input 
**payload** of the incoming message contains Base32 secret

####Advanced input

**payload** of the incoming message could contain the next properties:
- **secret** - Base32 secret (mandatory)
- **issuer** - account provider (empty by default)
- **label** - account label (OTPAuth by default)
- **algorithm** - hashing algorithm (SHA1 by default, also could be one of SHA256,MD5)
- **digits** - token length (6 by default)
- **period** - token time-step duration (30 by default, for TOTP only)
- **counter** - initial counter value (0 by default, for HOTP only)
 

####Output
**payload** of the output message contains generated password

## Version history

v0.0.1 Initial release

