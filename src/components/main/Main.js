import "./Main.css";
import hello from "../../assets/hello.svg";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
                <h1>Profile</h1>  
            </div>
            <div className="text">
              Full Name
            </div>
            <div className="text">
              Birth Date
            </div>
            <div className="text">
              Tel
            </div>
            <div className="text">
              E-mail
            </div>
            <div className="text">
              Address
            </div>  
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
                <h1>Stats Reports</h1>  
            </div>
            <div className="text">
              Role
            </div>
            <div className="text">
              Employ Date
            </div>
            <div className="text">
              Dept
            </div>
            <div className="text">
              Salary
            </div>
            <div className="text">
              Project
            </div> 
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;