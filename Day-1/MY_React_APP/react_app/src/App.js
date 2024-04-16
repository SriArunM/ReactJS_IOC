const Vehicle = () => {
  const about = (x,y) => {
    document.writeln(x);
    document.write("<br/>",y.type);
  };
  return (
    <>
      <div id="idd">
        <button onClick={(event) => about("Sri", event)}>Button</button>
      </div>
      {/* <h1>vehicle includes Trucks,Cars,bikes </h1> */}
      <Car car_name={"Lamborghini zx"} price={3000000000} />
    </>
  );
};
const Car = (props) => {
  return (
    <h2>
      My Car name is {props.car_name} and its price is {props.price}
    </h2>
  );
};

const Bike = () => {
  return <h3>Bike has only two wheels</h3>;
};
export default Vehicle;
/*const Monkey=()=>{
  return (
    <div>
      <h1>Monkey eats Banana</h1>
      <Banana />
    </div>
  );
};
const Banana=()=>{
  return <h2>Banana is eaten by Monkey</h2>
};

export default Monkey;
*/
//Day-1
/*const Dog = () => {
 return (<>
      <p>Dog hates cat</p>
      </>);
};
//Inheritance
function Cat(){
  return (
    <div>
      <Dog />
      <p>Cat hates Rat </p>
    </div>
  );
};

export default function Rat() {
  return (
    <div>
      <Cat />
      <p>Rat hates ?</p>
    </div>
  );
}*/
