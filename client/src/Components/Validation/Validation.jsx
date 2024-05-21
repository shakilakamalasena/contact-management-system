export default function Validation(values) {
    let errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    // const passwordPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (values.name === "") {
        errors.name = "Name should not empty.";
    } else if (values.name.length < 3 || values.name.length > 30) {
        errors.name = "Name length should be 3-30";
    } else {
        errors.name = "";
    }

    if (values.email === "") {
        errors.email = "Email should not empty.";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid Email!";
    } else {
        errors.email = "";
    }

    if (values.password === "") {
        errors.password = "Password should not empty.";
    } else if (!passwordPattern.test(values.password)) {
        errors.password =
            "Password must be 8+ chars, with at least one uppercase letter, one lowercase letter, and one number.";
    } else {
        errors.password = "";
    }

    return errors;
}
