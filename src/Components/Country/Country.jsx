import './Country.css'
const Country = ({country}) => {
    // console.log(country);
    const {name,flags} = country;
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <h4>Official Name: {name?.official}</h4>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Country;