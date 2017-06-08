import React from 'react';
import ReactDom from 'react-dom';

const title     = React.createElement('h1', null, "React Todo");
const subtitle  = React.createElement('p', { className: 'subtitle' }, "Это первое приложение на React");
const container = React.createElement('div', null, title, subtitle);

ReactDom.render(container, document.getElementById('root'));





