import { useState, useEffect } from "react";
import "./Profile.css";

function Profile({ type }) {

    const [user, setUser] = useState({
        name: "",
        age: "",
        totalSessions: 0,
        upcomingSessions: 0,
        availableHours: ""
    });

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (savedUser) {
            setUser({
                name: savedUser.name || "",
                age: savedUser.age || "",
                totalSessions: savedUser.totalSessions || 0,
                upcomingSessions: savedUser.upcomingSessions || 0,
                availableHours: savedUser.availableHours || ""
            });
        }
    }, []);

    const renderType = type === "student" ? "Student" : "Tutor";

    return (
        <div className="profile-container">
            <h2>Hi {user.name}, Welcome to {renderType} Dashboard</h2>

            <div>
                <p><strong>{renderType} Name : </strong> {user.name}</p>
                <p><strong>Age : </strong> {user.age}</p>

                <p>
                    <strong>Total Sessions : </strong>
                    {user.totalSessions}
                </p>

                <p>
                    <strong>Upcoming Sessions : </strong>
                    {user.upcomingSessions}
                </p>

                {type === "tutor" && (
                    <p>
                        <strong>Available Hours : </strong>
                        {user.availableHours}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Profile;
