import React from 'react';
import Searchbar from './Searchbar';
import youtube from '../Api/youtube';
import Viedolist from './viedolist';
import Viedodetail from './viedodetail';



class App extends React.Component{
    state={videos:[], selectedviedo:null}
   componentDidMount(){
    this.Ontermsubmit('Money')
   }
   Ontermsubmit= async (term)=>{
      const responce=await youtube.get('/search',{
      params:{
         q:term
      }
    }
      )
      this.setState({videos:responce.data.items, selectedviedo:responce.data.items[0]});
   };
   Onviedoselect=(viedo)=>{
    this.setState({selectedviedo:viedo})
   }
   
    render(){
        return(
            <div className='ui container'>
                <Searchbar onformsubmit={this.Ontermsubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                    <div className='eleven wide column'>
                        <Viedodetail viedo={this.state.selectedviedo}/>
                    </div>
                    <div className='five wide column'>
                        <Viedolist onviedoclick={this.Onviedoselect} list={this.state.videos}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;