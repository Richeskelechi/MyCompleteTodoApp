import '../assets/css/TimeOfDay.css'
// import Container from './Conatiner'
function TimeOfDay (){
    const styles = {

    }
    let name = 'Mr. Riches'
    let date = new Date()
    let hours = date.getHours()
    let greeting

    if(hours < 12){
        greeting = 'Good Morning'
        styles.color = 'red'
    }else if(hours >= 12 && hours < 18){
        greeting = 'Good Afternoon'
        styles.color = 'white'
    }else{
        greeting = 'Good Night'
        styles.color = 'black'

    }
    return(
        <div className='caption'>
            <h2 style={styles}>{`${greeting} ${name}`}</h2>
        </div>
    )
}
export default TimeOfDay