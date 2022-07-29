import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {

   const  {data, loading, error} = useFetch("/hotels/countByCity?cities=goa,banglore,mumbai");


  return (
    <div className="featured">
        {loading ? ("Loading please wait") : (<><div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
             alt="" className="featuredImg" />
             <div className="featuredTitles">
                <h1>goa</h1>
                <h2>{data[0]} properties</h2>
             </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
             alt="" className="featuredImg" />
             <div className="featuredTitles">
                <h1>banglore</h1>
                <h2>{data[1]} properties</h2>
             </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
             alt="" className="featuredImg" />
             <div className="featuredTitles">
                <h1>mumbai</h1>
                <h2>{data[2]} properties</h2>
             </div>
        </div></>)}
    </div>
  );
  };

export default Featured;