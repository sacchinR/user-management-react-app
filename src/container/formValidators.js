export const validateName = value => value ? undefined : "Please enter name."

export const validateEmail = value => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(value) ? undefined : "Please enter valid email."
}

export const validatePhoneNo = value => {
    const reg = /^([0-9]{10})$/;
    return reg.test(value) ? undefined : "Please enter phone number."
}

export const validateCity = value => value ? undefined : "Please enter city."

export const validateCompany = value => value ? undefined : "Please enter company."

