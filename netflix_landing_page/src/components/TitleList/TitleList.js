import React, { Component } from 'react';
import Item from '../Item/Item';
import classes from './TitleList.css';

class TitleList extends Component {

    apiKey= '87dfa1c669eea853da609d4968d294be';
    state= {
        data:[],
        mounted:false
    }

    loadContent() {
        var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
        fetch(requestUrl).then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({data : data});
        }).catch((err)=>{
            console.log("There has been an error");
        });
      }

    componentDidMount() {
        console.log("Component Did Mount");
        if(this.props.url !== ''){
          this.loadContent();
          this.setState({mounted:true});
        }
        
    }

    // componentDidUpdate(nextProps) {

    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     const {url} = nextProps;
    //     if(url !== prevState.url) {
    //         return {mounted:true,url:nextProps.url};
    //     } else 
    //      return null;
    // }

    componentWillReceiveProps (nextProps) {
        console.log("Component Will receive Props");
        if(nextProps.url !== this.props.url && nextProps.url !== ''){
          this.setState({mounted:true,url:nextProps.url},()=>{
            this.loadContent();
          });
          
        }
    }

    render () {
        let titles='';
        if(this.state.data.results){
            titles=this.state.data.results.map(function(title, i) {
                if(i<5){
                    let name='';
                    let backdrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
                    if(!title.name) {
                        name = title.original_title;
                      } else {
                        name = title.name;
                      }
                  return (
                     <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backdrop}></Item> 
                  )
                }else {
                    return (<div key={title.id}></div>);
                }
            }) 
        }
        return (
            <div ref="titlecategory" className={classes.TitleList} data-loaded={this.state.mounted}>
                <div className={classes.Title}>
                <h1>{this.props.title}</h1>
                <div className={classes.titlesWrapper}>
                    {titles}
                </div>
                </div>
            </div>
        )
    }

}

export default TitleList;