function ExamCard({course,time}) {
    return(
        <div className="examCard">
            <h3>{course}</h3>
            <p>{time}</p>
        </div>
    )
}
export default ExamCard;