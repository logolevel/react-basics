# react-basics
Основы React

- Инициализация проекта, установка React Dev Tools

<h2>1. Знакомство с React</h2>
<h3>1.1 Первое приложение</h3>
<p><b>- Создание элемента:</b><br/>
С помощью метода <code>createElement</code> с параметрами (Название, Свойства(class, id), Содержимое) создаём элемент и помещаем его в переменную <code>title</code></p>
<pre><code>const title = React.createElement('h1', null, "React Todo");</code>
<code>const subtitle  = React.createElement('p', { className: 'subtitle' }, "Это первое приложение на React");</code></pre>
<p>Чтобы отправить два и более элемнтов на страницу, их необходимо обернуть:</p>
<pre><code>const container = React.createElement('div', null, title, subtitle);</code></pre>
<p><b>- Вывод элемента на страницу:</b><br/>
У объекта ReactDom есть метод <code>Render</code> с параметрами (Какой элемент, куда разместить). Элемент находиться в переменной <code>title</code>, а разместим в блоке с <code>id="root"</code></p>
<pre><code>ReactDom.render(title, document.getElementById('root'));</code></pre>
<h3>1.2 JSX - JavaScript Syntax Extentions</h3>
<p><b>-Создаём набор элементов:</b><br/>
Используем JSX разметку(cхожую с HTML), которую присваиваем в переменную и с помощью метода Render выводим результат на страницу.</p>
<pre><code>app = ( тут JSX разметка );</code></pre>
<p>JSX - это не HTML!<br/>JSX транспилируется в JS с помощью Babel</p>
<h3>1.3 Виртуальный дом</h3>
<p>React элемент - это объект с набором свойств(props), он представляет из себя образ DOM элемента или виртуальный DOM.<br/>Свойства (props) содержат: просто содержимое или может включать в себя массив других объектов, которые содержит элемент. Также свойства содержат название классов, идентификаторов и т.д.<br/>Далее с помощью метода Render эта структура генерируется в настоящий DOM<br/>Виртуальном DOM - дерево простых объектов, следить за состояниями и работать с ними быстрее чем в реальном DOM</p>
