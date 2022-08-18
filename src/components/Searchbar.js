import React from 'react';


class Searchbar extends React.Component{
    state={text:"Money"}
    Oninputchange=(event)=>{
        this.setState({text:event.target.value})
        
    }
    Onformsubmit=(event)=>{
        event.preventDefault();
        this.props.onformsubmit(this.state.text)
    }
    render(){
        return(
            <div className='ui segment search-bar'>
                <form onSubmit={this.Onformsubmit} className='ui form'>
                    <div className='field'>
                        <label > Search bar</label>
                        <input type='text' onChange={this.Oninputchange} value={this.state.text}></input>
                    </div>

                </form>

            </div>
        )
    }
}

export default Searchbar;