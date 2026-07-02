function CourseCard({title,teacher}) {
    return(
        <div className="card">
            <img src="https://picsum.photos/300/200" alt=""/>
            <h3>{title}</h3>
            <p>{teacher}</p>
        </div>
    )
}
export default CourseCard;