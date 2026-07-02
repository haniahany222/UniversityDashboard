import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="dashboard">

      <Sidebar />
      <div className="main-content">
        <Navbar />
        <SearchBar />
        <section id="dashboard">
          <h1>Dashboard</h1>
          <div className="gpa-card">
            <h2>A- GPA</h2>
          </div>
        </section>

        <section id="courses">
          <h2>Courses</h2>
          <div className="course-container">
            <div className="course-card">
              <h3>Web Development</h3>
              <p>Progress: 70%</p>
            </div>

            <div className="course-card">
              <h3>Graphic Design</h3>
              <p>Progress: 50%</p>
            </div>

            <div className="course-card">
              <h3>Database</h3>
              <p>Progress: 80%</p>
            </div>

          </div>
        </section>

        <section id="homework">
          <h2>Homework</h2>
          <p>Completed: 01/08</p>
        </section>

        <section id="exams">
          <h2>Exams</h2>
          <p>Completed: 05/12</p>
        </section>
      </div>
    </div>
  );
}
export default App;