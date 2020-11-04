import React, { Component } from 'react';


import NavItem from './../NavItem/NavItem';
import classes from './navList.scss'


class NavList extends Component {
  state = {
    IDs: [
      {key: 0, id: '#home', name: 'Home'},
      {key: 1, id: '#about', name: 'O mnie'},
      {key: 2, id: '#projects', name: 'Projekty'},
      {key: 3, id: '#stack', name: 'Umiejętności'},
      {key: 4, id: '#contact', name: 'Kontakt'}
    ]
  }
  

  componentDidMount() {
   window.addEventListener('scroll', this.changeActiveClass)
   document.querySelector(`ul li a[href="/#home"]`).classList.add(`${classes.Active}`);
  }

  
    
  changeActiveClass = () => { 
    /* let sections = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('projects'),
      document.getElementById('stack'),
      document.getElementById('contact'),
    ]; */

    let links = document.querySelectorAll("nav ul li a");
    let scrollTop = window.scrollY;
    

    links.forEach(element => {
      let section = document.querySelector(element.parentNode.id);
      //const id = section.getAttribute('id');
      //window.location.hash = element.href
    
      if (window.scrollY > (document.getElementById('stack').offsetTop + document.getElementById('stack').offsetHeight) - 500) {
        element.classList.remove(`${classes.Active}`);
        document.querySelector(`ul li a[href="/#contact"]`).classList.add(`${classes.Active}`);
      }
      else if (section.offsetTop <= scrollTop && section.offsetTop + section.offsetHeight > scrollTop ) {
        element.classList.add(`${classes.Active}`);
        //window.location.hash = `#${section.id}`
        //window.location.href = element.href
      }
      else{
        element.classList.remove(`${classes.Active}`);
      }
    
    

      /* if(scrollTop > offsetTop) {
              document.querySelector(`ul li a[href="/#${id}"]`).classList.add(`${classes.Active}`);
              window.location.hash = id
              
      } else {
              document.querySelector(`ul li a[href="/#${id}"]`).classList.remove(`${classes.Active}`);
          } */
      
    })
    
    /* const observer = new IntersectionObserver(entries => {
      console.log(document.getElementById(`stack`).offsetTop)
      entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          
          if (entry.intersectionRatio > 0) {
              document.querySelector(`ul li a[href="/#${id}"]`).classList.add(`${classes.Active}`);
              window.location.hash = id
              
          } else {
              document.querySelector(`ul li a[href="/#${id}"]`).classList.remove(`${classes.Active}`);
          }
      }); */
  } 

  // Track all sections that have an `id` applied
  /* document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section); 
  } */

  
  

  render() {
    
    return (
    <ul className={classes.NavList}>
      {this.state.IDs.map(el => {
        return <NavItem key={el.key} id={el.id} link={el.id} active={classes.Active}>{el.name}</NavItem>
      })}
      {/* <NavItem id='#home' link="#home" active={classes.Active} >Home</NavItem>
      <NavItem id='#about' link="#about" >O mnie</NavItem>
      <NavItem id='#projects' link="#projects" >Projekty</NavItem>
      <NavItem id='#stack' link="#stack" >Umiejętności</NavItem>
      <NavItem id='#contact' link="#contact" >Kontakt</NavItem> */}
    </ul>
  )
  }

    
};

export default NavList;