# react-basics
Основы React

- Инициализация проекта, установка React Dev Tools

<h3>1. Знакомство с React</h3>
<h5>1.1 Первое приложение</h5>
<p><b>- Создание элемента:</b><br/>
С помощью метода <code>createElement</code> с параметрами (Название, Свойства(class, id), Содержимое) создаём элемент и помещаем его в переменную <code>title</code></p>
<pre><code>const title = React.createElement('h1', null, "React Todo");</code>
<code>const subtitle  = React.createElement('p', { className: 'subtitle' }, "Это первое приложение на React");</code></pre>
<p>Чтобы отправить два и более элемнтов на страницу, их необходимо обернуть:</p>
<pre><code>const container = React.createElement('div', null, title, subtitle);</code></pre>
<p><b>- Вывод элемента на страницу:</b><br/>
У объекта ReactDom есть метод <code>Render</code> с параметрами (Какой элемент, куда разместить). Элемент находиться в переменной <code>title</code>, а разместим в блоке с <code>id="root"</code></p>
<pre><code>ReactDom.render(title, document.getElementById('root'));</code></pre>
