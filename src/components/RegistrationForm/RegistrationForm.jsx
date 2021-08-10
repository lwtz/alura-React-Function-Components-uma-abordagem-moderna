import React from "react";

function RegistrationForm() {
    return (
        <form>
            <label>Name</label>
            <input type="text" />

            <label>LastName</label>
            <input type="text" />


            <label>CPF</label>
            <input type="number" />


            <label>Promotions</label>
            <input type="checkbox" />

            <label>News</label>
            <input type="checkbox" />

            <button type={ "submit" }> Register</button>
        </form>
    )
}

export default RegistrationForm
