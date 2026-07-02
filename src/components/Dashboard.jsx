import CourseCard from "./CoarseCard";
import ExamCard from "./ExamCard";

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="stats">
                <div className="gpa">
                    <h1>A-</h1>
                    <p>GPA</p>
                </div>
                <div className="homework">
                    <h2>Homework</h2>
                    <p>Completed: 01/08</p>

                    <h2>Exams</h2>
                    <p>Completed: 05/12</p>
                </div>
            </div>
            <div className="content">
                <div className="courses">
                    <h2>Courses</h2>
                    <CourseCard
                    title="Web Design"
                    teacher="Dr.Hazem Ehab"
                    />

                    <CourseCard
                    title="Programming 2"
                    teacher="Ehab Issa"
                    />
                </div>

                <div className="exams">
                    <h2>Exams</h2>
                    <ExamCard
                    course="Information System"
                    time="9:00 AM"
                    />

                    <ExamCard
                    course="Calculas"
                    time="9:00 AM"
                    />

                </div>
            </div>
        </div>
    )
}
export default Dashboard;