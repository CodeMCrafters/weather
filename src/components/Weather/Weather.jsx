import styles from './Weather.module.css';


function Weather({data}){
    return(
        <div >
            <img src={data.images} alt="Slika"/>
            <h1>{data.celsius}°c</h1>
            <h2>{data.name}</h2>
        </div>
    );
}

export default Weather;