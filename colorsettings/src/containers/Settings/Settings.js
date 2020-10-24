import React, {Component} from 'react';
import classes from './Settings.css';
import Setting from '../../components/Setting/Setting';
import Filter from '../../containers/Filter/Filter';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state ={
        'contrast':100,
        'hue':0,
        'brightness':100,
        'saturate':100,
        'sepia':0
    }

    handleChange = (e) => {
        let filter= e.target.id;
        let value = e.target.value;
        this.setState((prevState,props) => {
            prevState[filter] = +value;
            return prevState;
        })
    }


  updateSettings = (nextFilterState)=>{
    this.setState(nextFilterState);
  }

    render () {
        return (
            <div className={classes.Settings}>
                <div className={classes.MainWrapper}>
                    <div className={classes.Sidebar}>
                        <div className={classes.Title}>Reactagram v1.0</div>
                        <Setting 
                         name="contrast" 
                         value={this.state.contrast} 
                         steps="1"
                         min={0} 
                         max={200}
                         onChange={this.handleChange}/>
                         <Setting 
                         name="hue" 
                         value={this.state.hue} 
                         steps="1"
                         min={60} 
                         max={360}
                         onChange={this.handleChange}/>
                         <Setting 
                         name="brightness" 
                         value={this.state.brightness} 
                         steps="1"
                         min={0} 
                         max={200}
                         onChange={this.handleChange}/>
                         <Setting 
                         name="saturate" 
                         value={this.state.saturate} 
                         steps="1"
                         min={0} 
                         max={100}
                         onChange={this.handleChange}/>
                         <Setting 
                         name="sepia" 
                         value={this.state.sepia} 
                         steps="1"
                         min={0} 
                         max={100}
                         onChange={this.handleChange}/>
                    </div>
                    <div className={classes.ImageContainer}>
                       <Filter key="Default" filterFunctions={this.state}><ImageContainer image={this.props.image}/></Filter> 
                    </div>
                </div>
                <div className={classes.FilterList}>
                <Filter key="Noir" name="Noir" filterFunctions={{'contrast':138,'hue':0,'brightness':122,'saturate':0,'sepia':0}} onClick={this.updateSettings}><ImageContainer classes={classes.ImageContainer} image={this.props.image}/></Filter>
            <Filter key="Aged" name="Aged" filterFunctions={{'contrast':94,'hue':-54,'brightness':92,'saturate':100,'sepia':44}} onClick={this.updateSettings}><ImageContainer image={this.props.image}/></Filter>
            <Filter key="Whiteout" name="Whiteout" filterFunctions={{'contrast':32,'hue':0,'brightness':173,'saturate':0,'sepia':0}} onClick={this.updateSettings}><ImageContainer image={this.props.image}/></Filter>
            <Filter key="Vintage" name="Vintage" filterFunctions={{'contrast':164,'hue':0,'brightness':47,'saturate':0,'sepia':100}} onClick={this.updateSettings}><ImageContainer image={this.props.image}/></Filter>
                </div>
            </div>
           
        )
    }

}

export default Settings;