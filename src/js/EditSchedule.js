import React from "react";
import UserHeader from "./Header";
import AppNavigation from "./Navigation";
import {db} from "./firebase";
import Link from "react-router-dom/es/Link";
import Redirect from "react-router-dom/es/Redirect";

const ErrorMessage = props => {
    let result;
    if (props.error.length) {
        result = (
            <ul className={'errorList'}>
                <li>{props.error}</li>
            </ul>
        );
    } else {
        result = null;
    }
    return result;
};

class WeekScheduleTable extends React.Component{
    constructor(props){
        super(props);
        this.planOfWeek = props.planOfWeek;
        const scheduleId = props.scheduleNumber;
        this.state = {
            id: scheduleId
        }

    }

    render(){
        return (
            <table className={'weekScheduleTable'}>
                <ScheduleTableHead/>
                <ScheduleSelectors  planOfWeek = {this.planOfWeek} scheduleNumber={this.state.id}/>
            </table>
        )
    }
}

const ScheduleTableHead = () => (
    <thead>
    <tr>
        <th> </th>
        <th>ŚNIADANIE</th>
        <th>DRUGIE ŚNIADANIE</th>
        <th>ZUPA</th>
        <th>DRUGIE DANIE</th>
        <th>PODWIECZOREK</th>
        <th>KOLACJA</th>
    </tr>
    </thead>
);

class PlanOfDay {

    constructor() {
        this.breakfest = "";
        this.lunch = "";
        this.soup = "";
        this.dinner = "";
        this. desert = "";
        this.supper = "";
    }

}

class PlanOfWeek {

    constructor() {
        this.monday = new PlanOfDay();
        this.tuesday = new PlanOfDay();
        this.wednesday = new PlanOfDay();
        this.thursday = new PlanOfDay();
        this.friday = new PlanOfDay();
        this.saturday = new PlanOfDay();
        this.sunday = new PlanOfDay();
    }

}

class ScheduleSelectors extends React.Component{
    constructor(props){
        super(props);
        this.planOfWeek = props.planOfWeek;
        const scheduleId = props.scheduleNumber;

        this.state = {
            week: ["PONIEDZIAŁEK", "WTOREK", "ŚRODA", "CZWARTEK", "PIĄTEK", "SOBOTA", "NIEDZIELA"],
            allRecipes: [],
            id: scheduleId
        }
    }

    getDataFromDb = category => {
        const result = [];

        db.collection(category).get().then(recipes => {
            recipes.forEach(recipe => {
                const recipeWithId = recipe.data();
                recipeWithId.id = recipe.id;
                result.push(recipeWithId);
            });

            this.setState({
                allRecipes: result
            });
        }).catch(error => console.log('Error getting data: ' + error));

    };

    handleChange = (event) => {

        const index = event.nativeEvent.target.selectedIndex;
        const selectedOption = event.nativeEvent.target[index].text;
        const selectedIndex = event.target.options.selectedIndex;
        const dish = event.target.options[selectedIndex].getAttribute('dish_type');
        const dayNumber = event.target.options[selectedIndex].getAttribute('week_day');

        console.log(dish, dayNumber);
        if(dish === '0'){
            if(dayNumber === '0'){
                this.planOfWeek.monday.breakfest = selectedOption;
            }else if(dayNumber === "1"){
                this.planOfWeek.tuesday.breakfest = selectedOption;
            }else if(dayNumber === "2"){
                this.planOfWeek.wednesday.breakfest = selectedOption;
            }else if(dayNumber === "3"){
                this.planOfWeek.thursday.breakfest = selectedOption;
            }else if(dayNumber === "4"){
                this.planOfWeek.friday.breakfest = selectedOption;
            }else if(dayNumber === "5"){
                this.planOfWeek.saturday.breakfest = selectedOption;
            }else if(dayNumber === "6"){
                this.planOfWeek.sunday.breakfest = selectedOption;
            }
        }else if(dish === '1') {
            if (dayNumber === '0') {
                this.planOfWeek.monday.lunch = selectedOption;
            } else if (dayNumber === "1") {
                this.planOfWeek.tuesday.lunch = selectedOption;
            } else if (dayNumber === "2") {
                this.planOfWeek.wednesday.lunch = selectedOption;
            } else if (dayNumber === "3") {
                this.planOfWeek.thursday.lunch = selectedOption;
            } else if (dayNumber === "4") {
                this.planOfWeek.friday.lunch = selectedOption;
            } else if (dayNumber === "5") {
                this.planOfWeek.saturday.lunch = selectedOption;
            } else if (dayNumber === "6") {
                this.planOfWeek.sunday.lunch = selectedOption;
            }
        }else if(dish === '2') {
            if (dayNumber === '0') {
                this.planOfWeek.monday.soup = selectedOption;
            } else if (dayNumber === "1") {
                this.planOfWeek.tuesday.soup = selectedOption;
            } else if (dayNumber === "2") {
                this.planOfWeek.wednesday.soup = selectedOption;
            } else if (dayNumber === "3") {
                this.planOfWeek.thursday.soup = selectedOption;
            } else if (dayNumber === "4") {
                this.planOfWeek.friday.soup = selectedOption;
            } else if (dayNumber === "5") {
                this.planOfWeek.saturday.soup = selectedOption;
            } else if (dayNumber === "6") {
                this.planOfWeek.sunday.soup = selectedOption;
            }
        }else if(dish === '3') {
            if (dayNumber === '0') {
                this.planOfWeek.monday.dinner = selectedOption;
            } else if (dayNumber === "1") {
                this.planOfWeek.tuesday.dinner = selectedOption;
            } else if (dayNumber === "2") {
                this.planOfWeek.wednesday.dinner = selectedOption;
            } else if (dayNumber === "3") {
                this.planOfWeek.thursday.dinner = selectedOption;
            } else if (dayNumber === "4") {
                this.planOfWeek.friday.dinner = selectedOption;
            } else if (dayNumber === "5") {
                this.planOfWeek.saturday.dinner = selectedOption;
            } else if (dayNumber === "6") {
                this.planOfWeek.sunday.dinner = selectedOption;
            }
        }else if(dish === '4') {
            if (dayNumber === '0') {
                this.planOfWeek.monday.desert = selectedOption;
            } else if (dayNumber === "1") {
                this.planOfWeek.tuesday.desert = selectedOption;
            } else if (dayNumber === "2") {
                this.planOfWeek.wednesday.desert = selectedOption;
            } else if (dayNumber === "3") {
                this.planOfWeek.thursday.desert = selectedOption;
            } else if (dayNumber === "4") {
                this.planOfWeek.friday.desert = selectedOption;
            } else if (dayNumber === "5") {
                this.planOfWeek.saturday.desert = selectedOption;
            } else if (dayNumber === "6") {
                this.planOfWeek.sunday.desert = selectedOption;
            }
        }else if(dish === '5') {
            if (dayNumber === '0') {
                this.planOfWeek.monday.supper = selectedOption;
            } else if (dayNumber === "1") {
                this.planOfWeek.tuesday.supper = selectedOption;
            } else if (dayNumber === "2") {
                this.planOfWeek.wednesday.supper = selectedOption;
            } else if (dayNumber === "3") {
                this.planOfWeek.thursday.supper = selectedOption;
            } else if (dayNumber === "4") {
                this.planOfWeek.friday.supper = selectedOption;
            } else if (dayNumber === "5") {
                this.planOfWeek.saturday.supper = selectedOption;
            } else if (dayNumber === "6") {
                this.planOfWeek.sunday.supper = selectedOption;
            }
        }
    };

    render(){
        return (
            <tbody>
            {this.state.week.map((day, dayNum) => (
                <tr key={dayNum}>
                    <td>{day}</td>
                    <td>
                        <select onChange={this.handleChange}>
                            {this.state.allRecipes.map((recipe, i) => (
                                <option key={i} week_day={dayNum} dish_type={0} value={recipe.id}>{recipe.recipeName}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <select onChange={this.handleChange}>
                            {this.state.allRecipes.map((recipe, i) => (
                                <option key={i} week_day={dayNum} dish_type={1} value={recipe.id}>{recipe.recipeName}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <select  onChange={this.handleChange}>
                            {this.state.allRecipes.map((recipe, i) => (
                                <option key={i} week_day={dayNum} dish_type={2} value={recipe.id}>{recipe.recipeName}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <select  onChange={this.handleChange}>
                            {this.state.allRecipes.map((recipe, i) => (
                                <option key={i} week_day={dayNum} dish_type={3} value={recipe.id}>{recipe.recipeName}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <select  onChange={this.handleChange}>
                            {this.state.allRecipes.map((recipe, i) => (
                                <option key={i} week_day={dayNum} dish_type={4} value={recipe.id}>{recipe.recipeName}</option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <select  onChange={this.handleChange}>
                            {this.state.allRecipes.map((recipe, i) => (
                                <option key={i} week_day={dayNum} dish_type={5} value={recipe.id}>{recipe.recipeName}</option>
                            ))}
                        </select>
                    </td>
                </tr>
            ))}
            </tbody>
        )
    }

    componentDidMount() {
        this.getDataFromDb('Recipes');
    }
}

class EditSchedule extends React.Component{
    constructor(props){
        super(props);
        this.planOfWeek = new PlanOfWeek();
        const scheduleID = this.props.match.params.value;

        this.state = {
            scheduleName: '',
            scheduleDesc: '',
            scheduleNum: '',
            nameValid: [],
            descValid: [],
            numValid: [],
            scheduleID: scheduleID,
            isEdited: false,
            editedName: ''
        }
    }

    getDataFromDb = () => {
        db.collection('Schedules').doc(this.state.scheduleID).get().then(schedule => {

            this.setState({
                scheduleName: schedule.data().scheduleName,
                scheduleDesc: schedule.data().scheduleDesc,
                scheduleNum: schedule.data().scheduleNum,
            })
        }).catch(error => console.log('Error getting data: ' + error));
    };

    handleSubmit = event => {
        const doneSchedule = JSON.parse(JSON.stringify(this.planOfWeek));
        const scheduleName = this.state.scheduleName;
        const scheduleDesc = this.state.scheduleDesc;
        const scheduleNum = Number(this.state.scheduleNum);
        let nameError = '';
        let descError = '';
        let numError = '';
        if (scheduleName.length < 3 || scheduleName.length > 50) {
            nameError = 'Nazwa planu musi mieć od 3 do 50 znaków.';
        }
        if (scheduleDesc.length < 10 || scheduleDesc.length > 300) {
            descError = ['Opis planu musi mieć od 10 do 300 znaków.'];
        }
        if (scheduleNum.length < 1 || scheduleNum < 1 || scheduleDesc > 52) {
            numError = ['Numer planu musi być liczbą pomiędzy 1 a 52.'];
        }
        if (nameError || descError || numError) {
            event.preventDefault();
            this.setState({
                nameValid: nameError,
                descValid: descError,
                numValid: numError
            });
        } else {

            const newId = this.state.scheduleNum+"week";
            console.log("ID nowego: ", newId, "ID starego: ", this.state.scheduleID)
            if(newId === this.state.scheduleID){
                db.collection('Schedules').doc(this.state.scheduleNum+"week").set({
                    scheduleName: this.state.scheduleName,
                    scheduleDesc: this.state.scheduleDesc,
                    scheduleNum: this.state.scheduleNum,
                    scheduleRec: doneSchedule
                }).then(() => {
                    console.log(db.collection('Schedules'));
                    this.setState({
                        scheduleName: '',
                        scheduleDesc: '',
                        nameValid: [],
                        descValid: [],
                        numValid: [],
                        isEdited: true,
                        editedName: this.state.scheduleName
                    });
                }).catch(error => console.log('Error writing document: ', error));
            }else{
                db.collection('Schedules').doc(this.state.scheduleID).delete().then(()=>{
                    console.log("deleted")
                });
                db.collection('Schedules').doc(this.state.scheduleNum+"week").set({
                    scheduleName: this.state.scheduleName,
                    scheduleDesc: this.state.scheduleDesc,
                    scheduleNum: this.state.scheduleNum,
                    scheduleRec: doneSchedule
                }).then(() => {
                    console.log(db.collection('Schedules'));
                    this.setState({
                        scheduleName: '',
                        scheduleDesc: '',
                        nameValid: [],
                        descValid: [],
                        numValid: [],
                        isEdited: true,
                        editedName: this.state.scheduleName
                    });
                }).catch(error => console.log('Error writing document: ', error));
            }



        }
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleEdit = () =>{
        this.handleSubmit();
    };

    render() {
        if (this.state.isEdited === true) {
            return <Redirect to={{
                pathname: '/Schedules',
                state: this.state.editedName
            }} />
        } else {
            return (
                <div className="mainAppView">
                    <UserHeader/>
                    <div style={{display: 'flex'}}>
                        <AppNavigation/>
                        <div className={'appMainContainer'}>

                            <div className={'addScheduleContainer'}>
                                <form className={'addScheduleForm'} onSubmit={this.handleSubmit}>
                                    <div className={'addScheduleHeader'}>
                                        <h2>EDYTOWANIE PLANU</h2>
                                        <button type={'submit'} onClick={this.handleEdit}>Zapisz i zamknij</button>
                                    </div>
                                    <div className={'addScheduleInput-horiz'}>
                                        <label htmlFor={'recipeName'}>Nazwa planu</label>
                                        <input type='text'
                                               value={this.state.scheduleName}
                                               onChange={this.handleChange('scheduleName')}
                                        />
                                    </div>
                                    <ErrorMessage error={this.state.nameValid}/>
                                    <div className={'addScheduleInput-horiz'}>
                                        <label htmlFor={'recipeDescription'}>Opis planu</label>
                                        <textarea onChange={this.handleChange('scheduleDesc')}
                                                  value={this.state.scheduleDesc}
                                        />
                                    </div>
                                    <ErrorMessage error={this.state.descValid}/>
                                    <div className={'addScheduleInput-horiz'}>
                                        <label htmlFor={'recipeDescription'}>Numer tygodnia</label>
                                        <input onChange={this.handleChange('scheduleNum')}
                                               value={this.state.scheduleNum}
                                               type="number"
                                               min="1"
                                               max="52"
                                        />
                                    </div>
                                    <ErrorMessage error={this.state.numValid}/>
                                    <WeekScheduleTable planOfWeek={this.planOfWeek}
                                                       scheduleNumber={this.state.scheduleID}/>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            )
        }
    }

    componentDidMount(){
        this.getDataFromDb()
    }
}

export default EditSchedule;