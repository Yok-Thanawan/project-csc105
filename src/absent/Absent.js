import "./Absent.css"

const Absents = () => {
    return(
        <main>
        <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                    <h1>Apply for leave</h1>
                    <p>* is required</p>
                </div>
            </div>
            <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__cards">
                        <div className="card">
                            <label>From *</label>
                            <input type='text' name='from' placeholder="" required />
                        </div> 
                        <div className="card">
                            <label>Dear *</label>
                            <input type='text' name='dear' placeholder="" required />
                        </div> 
                        <div className="card">
                            <label>Date *</label>
                            <input type='text' name='date' placeholder="" required />
                        </div>
                        <div className="card">
                            <label>Content *</label>
                            <textarea name='more' className="content" name='content' placeholder="" required />
                        </div>
                        <div className="card">
                            <label>Note</label>
                            <input type='text' name='note' placeholder="" required />
                        </div>
                        <button className="submit-btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}
export default Absents;