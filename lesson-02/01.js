const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess

if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
    isAccess = true
}

else {
    isAccess = false
};


