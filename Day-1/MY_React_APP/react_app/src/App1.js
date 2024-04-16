const App=()=>{
    const handleChange=(event)=>{
        console.log(event.target.value);
    }
    return (
        <>
        <input name="name" onChange={handleChange}></input></>
    )
}
export default App;