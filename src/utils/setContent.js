import Loader from "../components/loader/Loader";


const setContent = (process, Component, data) => {
    switch (process){
        case 'waiting':
            return false //тут можно забахать скелетон
        case 'loading':
            return <Loader/>
        case 'confirmed': 
            return <Component data={data}/>
        case 'error':
            return false //возвращать ErrorMessage
        default:
            return new Error('Unexpected process state');
    }
}

export default setContent;