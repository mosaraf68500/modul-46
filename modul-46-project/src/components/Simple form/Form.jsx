

const Form = () => {
    const handleInput= e =>{
        e.prevenDefault()
        console.log('data');
    }
    return (
        <div>
        <form  onSubmit={handleInput}>

            <input type="text" /> 
            <br />
            {/* <input type="email" name="email" id="" placeholder="inter your email"/>
            <br />
            <input type="text" name="phone" id="" placeholder="inter your phone"/> */}
            <br />
            <input type="submit" value="submit" />
        </form>
            
        </div>
    );
};

export default Form;