import "./Profile.css";

const profile = [
    {
        name: "Ram",
        Password: "!@#$RTY",
        age: 34,
        totalSessions: 20,
        upcomingSessions: 3,
        AvailableHours: "03:00 , 05:00",
    },
];

function Profile({type}) {
    const name = profile[0].name;
    const age = profile[0].age;
    const totalSessions = profile[0].totalSessions;
    const upcomingSessions = profile[0].upcomingSessions;
    const AvailableHours = profile[0].AvailableHours;

    const renderType = type === "student" ? "Student" : "Tutor";

    return (
        <div className="profile-container">
            <h2>Hi {name} , Welcome to {renderType} Dashboard</h2>
            <div>
                <p>
                    <strong>Student Name : </strong>
                    {name}
                </p>
                <p>
                    <strong>Age : </strong>
                    {age}
                </p>
                <p>
                    <strong>Total Sessions : </strong>
                    {totalSessions}
                </p>
                <p>
                    <strong>Upcoming Sessions : </strong>
                    {upcomingSessions}
                </p>
                {type === "tutor" && <p>
                    <strong>Available Hours : </strong>
                    {AvailableHours}
                </p>}
            </div>
        </div>
    );
}
export default Profile;