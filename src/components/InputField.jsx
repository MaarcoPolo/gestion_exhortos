import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder }) => (
    <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: ".5rem" }}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                width: "100%",
                padding: ".8rem",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                }}
            />
            </div>
);

export default InputField;
