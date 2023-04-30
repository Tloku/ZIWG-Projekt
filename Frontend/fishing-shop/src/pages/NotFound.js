import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Niepoprawny adres strony</h2>
            <Link to="/">Wróc do strony głównej</Link>
        </div>
     );
}
 
export default NotFound;