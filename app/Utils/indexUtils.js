export function UserDisplayName(req){           // If request has a variable availabe - if passprt saved user in request
    if (req.user){                              // return user.displayName, if not return blank
        return req.user.displayName;
    }
    return '';
}