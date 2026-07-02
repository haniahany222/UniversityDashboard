function Sidebar() {
return(

<div className="sidebar">
<h1>University</h1>
<div className="profile">

<img src="https://i.pravatar.cc/150?img=32"alt="student"/>

<h3>Hania</h3>
</div>

<ul>
<li>
    <a href="#dashboard">Dashboard</a>
    </li>
<li>
    <a href="#courses">Courses</a>
    </li>
<li>
    <a href="#homework">Homework</a>
    </li>
<li>
    <a href="#exams">Exams</a>
    </li>
</ul>
</div>
)
}
export default Sidebar;