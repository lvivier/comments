/**
 * Extract avatar from Firebase user
 */

// default avatar
var avatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABo0lEQVRo3u2ZMY9GQBCG9+crBIWEgoSChEKIhNBINBr/4NqrvuZ+gvvmEpc7+Th2xu7KKd5W3mdnZ3ZmsHEcpyuL3QA3wA1wA9wASgF0XTdlWTalafpLdV1PwzCoCwAmLcuaNE3blO/7U9u26gDAqdq2/afxpeI4lg/Aa35WFEVyAeA68Jqfhb1O3AB936PNg1zXlQOQJAkJAAgOQziA4zhkAJhr9H8BgiC4NgBlDmBeaG6AoijIAKRUIQg7hXnIJSkAl88BKvMgyCfhALquXxvA8zwygKqqxAPA4EIRBWlJPLfTGAjp7TS2GlFMZmgA3gcNIqfMTGyaptDKQw5w9FWGMZRqQ0G2lTjS3GEGmNMA9kYBWzZvgDXBayqy+pADHHkPlNrMzW2FyFUKKQCY37MTXSoMQ/kAZVmieiGIBLakMl7jmJ3oq2jwgrAjq8S9K3RMROBwSAHgg/Dhs0yvldq9UWFrff7Zp30kKltll70yTjnvng3CsOVQtODPzs9O9gsgz3MlT32rHf8GaJrm4yrGlz8Ln5F4sOc09XZFAJBhGO+f4A8Dbpsk/SYAAAAASUVORK5CYII=';

module.exports = function (user) {
  return (user.provider == 'facebook') ?
    ('http://graph.facebook.com/'+user.id+'/picture') :
    user.profile_image_url ||
    user.avatar_url ||
    avatar
}

exports.avatar = avatar
