class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: ['thing one', 'thing two', 'thing three']
        };
    };
    render(){
        const title = 'Indecision!'
        const subtitle = 'Have you ever retired a human by mistake?'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions = {this.state.options.length > 0} />
                <Options options={this.state.options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
        <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button 
                onClick={this.handlePick}
                disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return (     
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    } 
}

class Option extends React.Component{
    render(){
        return (
            <div>
            {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddAption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        if(option){
            alert(option);
            e.target.elements.option.value="";
            render();
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddAption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));