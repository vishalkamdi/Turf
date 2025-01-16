import { useState } from "react";

const BookingController = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    return {
        setters: {
            setFirstName,
            setLastName,
            setEmail,
            setContactNumber,
            setDate,
            setStartTime,
            setEndTime,
        },
        getters: {
            firstName,
            lastName,
            email,
            contactNumber,
            date,
            startTime,
            endTime,
        }
    }
}

export default BookingController;
