import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {loginning:false};
    }
    render() {
      let div =null;
      div = <div><div className="header">
      <span className="header_data header_data_left">1 июня 2018</span>
      <Link to='/login' className="header_auth header_aut_right">Вход и регистрация</Link>
    </div>

    <div className="page-logo">
          <h2 className="page-logo_name">EyeGuide</h2>
    </div>
<div className="menu">
<ul className="menu_box">
  <li className="menu_item">
    <a>С кем пойдем?</a>
  </li>
  <li className="menu_item">
    <Link to='/items'>Куда пойдем?</Link>
  </li>
  <li className="menu_item">
    <a>Задать вопрос</a>
  </li>
</ul>
<button className="menu_search">
  Поиск...
</button>
</div>
<div className="excursions excursions_on">
<h4 className="excursions_caption">Экскурсии</h4>
<div className="excursions_citybox">
  <div className="excursions_city excursions_city_moscow">
    <span className="excursions_cityname">Москва <br></br> 10 экскурсий</span>
  </div>
  <div className="excursions_city excursions_city_sank-peterburg">
    <span className="excursions_cityname">Санкт-Петербург <br></br> 10 экскурсий</span>
  </div>
</div>
</div>
<div className="guide">
<h4 className="guide_caption">Гиды</h4>
<div className="guide_box">
  <div className="guide_info">
    <img src="" className="guide_photo"></img>
    <span className="guide_name">Ксения</span>
    <span className="guide_count">10 экскурсий</span>
  </div>
  <div className="guide_info">
    <img src="" className="guide_photo"></img>
    <span className="guide_name">Ксения</span>
    <span className="guide_count">10 экскурсий</span>
  </div>
  <div className="guide_info">
    <img src="" className="guide_photo"></img>
    <span className="guide_name">Ксения</span>
    <span className="guide_count">10 экскурсий</span>
  </div>
  <div className="guide_info">
    <img src="" className="guide_photo"></img>
    <span className="guide_name">Ксения</span>
    <span className="guide_count">10 экскурсий</span>
  </div>
</div>
</div>
<div className="footer">
<div className="footer_social">
  <a href="/"><img src="" className="footer_icon"></img></a>
  <a href="/"><img src="" className="footer_icon"></img></a>
  <a href="/"><img src="" className="footer_icon"></img></a>
</div>
<div className="footer_menu">
  <a className="footer_item">Помощь</a>
  <a className="footer_item">Контакты</a>
</div>
<span className="footer_copyright">
  EyeGuide 2018
</span>
</div>
</div>;
      return(
       div
      );
    }
  }

export default App;
